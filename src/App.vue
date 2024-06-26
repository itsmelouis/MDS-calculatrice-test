<template>
  <div id="app">
    <CalculatorComp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalculatorComp from './components/CalculatorComp.vue';

export default defineComponent({
  name: 'App',
  components: {
    CalculatorComp,
  },
});
</script>
