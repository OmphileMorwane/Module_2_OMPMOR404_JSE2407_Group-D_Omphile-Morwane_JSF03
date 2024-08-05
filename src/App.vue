<template>
  <div id="app">
    <Header />
    <ProductList />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import ProductList from './components/ProductList.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; 
  background-color: darkcyan;
}

#app {
  margin:0;
 padding: 0;
  width: 100%;
}

* {
  box-sizing:content-box; /* Include padding and border in element's total width and height */
}

</style>

