<template>
        <div>
          <div class="controls">
            <div class="control">
              <label for="category">Filter by Category:</label>
              <select id="category" @change="filterByCategory">
                <option value="">All</option>
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
              </select>
            </div>
      
            <div class="control">
              <label for="sortOrder">Sort by Price:</label>
              <select id="sortOrder" @change="sortProducts">
                <option value="">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
      
          <div v-if="loading" class="loading">Loading...</div>
      
          <div v-else class="product-section">
            <div class="product-grid">
              <ProductCard
                v-for="product in filteredAndSortedProducts"
                :key="product.id"
                :product="product"
                @view-product="handleViewProduct"
              />
            </div>
          </div>
        </div>
      </template>
      
      <script>
      import { ref, onMounted, computed } from 'vue';
      import { fetchProducts, fetchCategories } from './api';
      import ProductCard from './ProductCard.vue';
      
      export default {
        name: 'ProductList',
        components: {
          ProductCard,
        },
        setup() {
          const products = ref([]);
          const categories = ref([]);
          const selectedCategory = ref('');
          const sortOrder = ref('');
          const loading = ref(true);
          const error = ref(null);
      
          const loadProducts = async () => {
            try {
              products.value = await fetchProducts();
            } catch (err) {
              error.value = err.message;
              console.error('Error fetching products:', err);
            } finally {
              loading.value = false;
            }
          };
      
          const loadCategories = async () => {
            try {
              categories.value = await fetchCategories();
            } catch (err) {
              error.value = err.message;
              console.error('Error fetching categories:', err);
            }
          };
      
          const filterByCategory = (event) => {
            selectedCategory.value = event.target.value;
          };
      
          const sortProducts = (event) => {
            sortOrder.value = event.target.value;
          };
      
          const filteredAndSortedProducts = computed(() => {
            let result = [...products.value];
      
            if (selectedCategory.value) {
              result = result.filter((product) => product.category === selectedCategory.value);
            }
      
            if (sortOrder.value === 'asc') {
              result.sort((a, b) => a.price - b.price);
            } else if (sortOrder.value === 'desc') {
              result.sort((a, b) => b.price - a.price);
            }
      
            return result;
          });
      
          onMounted(() => {
            loadProducts();
            loadCategories();
          });
      
          return {
            products,
            categories,
            selectedCategory,
            sortOrder,
            loading,
            error,
            filterByCategory,
            sortProducts,
            filteredAndSortedProducts,
          };
        },
      };
      </script>
      
      <style scoped>
      .controls {
        display: flex;
        gap: 200px;
        
      }
      
      .control {
        display: flex;
        flex-direction: flex;
        gap: 40px;


      }
      
      .loading {
        text-align: center;
        margin-top: 20px;
      }
      
      .product-section {
        margin-top: 20px;
      }
      
      .product-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-evenly;
        margin-top: 50px;
      }
      </style>
      
      
      