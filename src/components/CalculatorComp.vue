<template>
  <div>
    <input v-model.number="num1" type="number" placeholder="First number" />
    <input v-model.number="num2" type="number" placeholder="Second number" />

    <button @click="calculate('add')">Ajouter</button>
    <button @click="calculate('subtract')">Soustraire</button>
    <button @click="calculate('multiply')">Multiplier</button>
    <button @click="calculate('divide')">Diviser</button>


    <div>Result: {{ result }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Calculator } from '@/utils/calculator';

export default defineComponent({
  name: 'CalculatorComp',
  setup() {
    const num1 = ref(0);
    const num2 = ref(0);
    const result = ref(0);
    const calculator = new Calculator();

    const calculate = (operation: string) => {
      switch (operation) {
        case 'add':
          result.value = calculator.add(num1.value, num2.value);
          break;
        case 'subtract':
          result.value = calculator.subtract(num1.value, num2.value);
          break;
        case 'multiply':
          result.value = calculator.multiply(num1.value, num2.value);
          break;
        case 'divide':
          result.value = calculator.divide(num1.value, num2.value);
          break;
      }
    };

    return {
      num1,
      num2,
      result,
      calculate,
    };
  },
});
</script>
