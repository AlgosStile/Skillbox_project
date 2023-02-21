<template>

  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow pagination__link--disabled" v-on:click="previous()"
        aria-label="Предыдущая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a href="#" class="pagination__link" :class="{ 'pagination__link--current': pageNumber === page }"
        @click="$event.preventDefault(), paginate(pageNumber)">
        {{ pageNumber }}
      </a>
    </li>

    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow" href="#" v-on:click="next()" aria-label="Следующая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right">{{ page }}</use>

        </svg>
      </a>
    </li>
  </ul>

</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    }
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    }
  },
  next() {
    const maxPageIndex = Math.ceil(this.rows.length / this.rowsPerPage) - 1;
    this.pageIndex = Math.min(this.pageIndex + 1, maxPageIndex);
  },
  previous() {
    this.pageIndex = Math.max(this.pageIndex - 1, 0);
  }
}

</script>
