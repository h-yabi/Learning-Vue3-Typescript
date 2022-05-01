<script setup lang="ts">
import Card from './Card.vue';
</script>

<template>
  <div class="container">
    <Card class="menu-card">
      <span>Badge</span>
      <div class="badges">
        <span>VIP</span>
        <span>NORMAL</span>
      </div>
    </Card>
    <Card class="reservation-card">
      <span>Badge</span>
      <div class="badges">
        <span>VIP</span>
        <span>NORMAL</span>
      </div>
    </Card>
    <Card class="reservation-card">
      <span>Badge</span>
      <div class="badges">
        <span>VIP</span>
        <span>NORMAL</span>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 80px;
  margin: 24px;
  background-color: #ccc;
}
.reservation-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 80px;
  margin-bottom: 8px;
  background-color: rgb(255, 212, 147);
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgb(211, 211, 211);
}
</style>
