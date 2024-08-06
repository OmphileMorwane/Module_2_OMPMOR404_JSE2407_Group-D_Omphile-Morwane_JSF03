<template>
  <div>
    <div class="controls">
      <div class="control">
        <label for="category">Filter by Category:</label>
        <select id="category" v-model="selectedCategory" @change="filterByCategory">
          <option value="">All</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <div class="control">
        <label for="sortOrder">Sort by Price:</label>
        <select id="sortOrder" v-model="sortOrder" @change="sortProducts">
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
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore();

    const categories = computed(() => store.state.categories);
    const loading = computed(() => store.state.loading);
    const selectedCategory = computed({
      get: () => store.state.selectedCategory,
      set: (value) => store.commit('setSelectedCategory', value),
    });
    const sortOrder = computed({
      get: () => store.state.sortOrder,
      set: (value) => store.commit('setSortOrder', value),
    });
    const filteredAndSortedProducts = computed(() => store.getters.filteredAndSortedProducts);

    const filterByCategory = () => {
      // No need to update the state here as v-model does that
    };

    const sortProducts = () => {
      // No need to update the state here as v-model does that
    };

    onMounted(() => {
      store.dispatch('loadProducts');
      store.dispatch('loadCategories');
    });

    return {
      categories,
      loading,
      selectedCategory,
      sortOrder,
      filteredAndSortedProducts,
      filterByCategory,
      sortProducts,
    };
  },
};
</script>

<style scoped>
.controls {
  display: flex;
  gap: 200px;
  margin-left: 200px;
  width:10%;
}

.control {
  display: flex;
  flex-direction: column;
  gap: 30px;
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

@media (max-width: 768px) {
  .controls {
    flex-direction: flex;
    gap: 80px;
    margin-left: 90px;
    align-items: center;
    font-size: small;
  }

  .control {
    flex-direction: flex;
    gap: 8px;
    width: 140%;
    text-align: center;
    font-size: small;
  }

  .sort-control {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .sort-control label, .sort-control select {
    margin: 0 auto;
  }
}
</style>
