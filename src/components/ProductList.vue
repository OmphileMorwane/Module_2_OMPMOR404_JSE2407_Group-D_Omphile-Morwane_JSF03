<template>
        <div>
          <h1>Product List</h1>
          <ul>
            <li v-for="product in products" :key="product.id">
              {{ product.title }}
            </li>
          </ul>
        </div>
      </template>
      
      <script>
      import { ref, onMounted } from 'vue';
      import { fetchProducts } from './api'; // Adjust the path as necessary
      
      export default {
        name: 'ProductList',
        setup() {
          const products = ref([]);
          const error = ref(null);
      
          const loadProducts = async () => {
            try {
              products.value = await fetchProducts();
            } catch (err) {
              error.value = err.message;
              console.error('Error fetching products:', err);
            }
          };
      
          onMounted(() => {
            loadProducts();
          });
      
          return {
            products,
            error,
          };
        },
      };
      </script>
      