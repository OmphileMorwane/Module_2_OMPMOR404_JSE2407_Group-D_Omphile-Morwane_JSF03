<template>
        <div>
          <div class="product-grid">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </template>
      
      <script>
      import { ref, onMounted } from 'vue';
      import { fetchProducts } from './api'; 
      import ProductCard from './ProductCard.vue';
      
      export default {
        name: 'ProductList',
        components: {
                ProductCard,
        },
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

<style scoped>
.product-grid {
  display: flex;
  flex-wrap:wrap;
  gap: 30px;
  justify-content:space-evenly;
}
</style>
      