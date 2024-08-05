<template>
  <main>
    <div v-if="product" class="product-detail">
      <img :src="product.image" :alt="product.title" />
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
      <p class="product-category">{{ product.category }}</p>
      <div class="rating-reviews">
        <div class="rating">
          <span class="rating-icon">⭐</span>
          <span class="rating-value">{{ product.rating.rate }}</span>
        </div>
        <div class="reviews">
          <span class="reviews-label">Number of Reviews:</span>
          <span class="reviews-value">{{ product.rating.count }}</span>
        </div>
      </div>
      <div class="back-link">
        <router-link to="/">Back to products</router-link>
      </div>
    </div>
    <p v-else>Loading...</p>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchProduct } from "./api";

const route = useRoute();
const product = ref(null);

const loadProduct = async () => {
  const id = route.params.id;
  product.value = await fetchProduct(id);
};

onMounted(() => {
  loadProduct();
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-detail {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.9); /* Transparent background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; /* Position relative for positioning the link */
}

.product-detail img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1c1717;
}

.rating-reviews {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.rating {
  display: flex;
  align-items: center;
  margin-right: 20px; /* Space between rating and reviews */
}

.rating-icon {
  font-size: 1.5rem; /* Adjust size of the star emoji */
  color: #ffd902; /* Star color */
  margin-right: 0.5rem;
}

.rating-value {
  font-size: 1rem;
  color: #333;
  font-weight: bold;
}

.reviews {
  display: flex;
  align-items: center;
}

.reviews-label {
  font-size: 1rem;
  color: #333;
  margin-right: 0.5rem;
  font-weight: bold;
}

.reviews-value {
  font-size: 1rem;
  color: #333;
  font-weight: bold;
}

.back-link {
  display: block;
  text-decoration: none;
  padding: 10px 20px;
  color: #353b3e;
  font-weight: bold;
  border: 2px solid #71797e; /* Border color matching the link color */
  border-radius: 4px;
  background: white; /* Ensures the link background matches the box */
  transition: 0.3s, color 0.3s;
  position: absolute;
  bottom: 2%; /* Position the link at the bottom of the box */
  left: 50%;
  transform: translateX(-50%);
}

.back-link:hover {
  background: rgb(186, 223, 244); /* Light grey background on hover */
  color: #000; /* Change text color on hover */
}

.product-category {
  display: inline-block;
  background-color: #e0f7fa;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}
</style>
