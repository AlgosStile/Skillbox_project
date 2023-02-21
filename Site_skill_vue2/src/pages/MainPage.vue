<template>
    <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">

      <ProductFilter
        :price-from="filterPriceFrom"
        :price-to="filterPriceTo"
        :categoryid="filterCategoryId"
        :color-id="filterColorId"
        @update:priceFrom="filterPriceFrom = $event"
        @update:priceTo="filterPriceTo = $event"
        @update:categoryId="filterCategoryId = $event"
        @update:colorId="filterColorId = $event"/>

      <section class="catalog">
        <div v-if="productsLoading"> Происходит загрузка товаров...</div>
        <div v-if="productsLoadingFailed"> Произошла ошибка при загрузке товаров...
        <button @click.prevent="loadProducts">Попробовать еще раз</button></div>
        <ProductList v-if="!productsLoading" :products="products"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>
      </section>
    </div>
  </main>
</template>

<script>

import ProductList from "@/components/ProductList.vue";
import BasePagination from "@/components/BasePagination.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import axios from 'axios';
import {API_BASE_URL} from "../config";


export default {

  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: null,

      page: 1,
      productsPerPage: 3,

      productsData: null,

      productsLoading: false,

      productsLoadingFailed: false


    }

  },

  computed: {
    products() {
      return this.productsData
         ? this.productsData.items.map(product => {
          return {
            ...product,
            image: product.image.file.url
          }

         }) : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    }
  },
  methods: {
    loadProducts() {
      this.productsLoading = true;
      this.productsLoadingFailed = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
       axios.get(API_BASE_URL + `/api/products`, {
        params: {
          page: this.page,
          limit: this.productsPerPage,
          categoryId: this.filterCategoryId,
          minPrice: this.filterPriceFrom,
          maxPrice: this.filterPriceTo,
          colorId: this.filterColorId,

        }
       })
       .then(response => this.productsData = response.data)

       .catch(() => this.productsLoadingFailed = true)
       .then(() => this.productsLoading = false);
    }, 1000);
    }
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterColorId() {
      this.loadProducts();
    }
  },
  created() {
    this.loadProducts();
  }
}
</script>
