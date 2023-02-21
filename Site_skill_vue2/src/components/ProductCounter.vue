<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click="increment">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="count" @input="$emit('chang-counter', count)"/>

    <button type="button" aria-label="Добавить один товар" @click="decrement">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>


<script>
export default {
  name: 'ProductCounter',
  props: ['number'],
  data() {
    return {
      count: null,
    }
  },
  mounted() {
    this.count = this.number;
  },
  methods: {
    increment() {
      if (this.count >= 1) {
        this.count -= 1;
        this.$emit('chang-counter', this.count)
    }
  },
   decrement() {
       this.count += 1; {
       this.$emit('chang-counter', this.count)
    }
   }
}
}
</script>
