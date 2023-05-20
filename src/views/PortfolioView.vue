<script setup lang="ts">
import Card from '../components/Card.vue';


const sampleProps = {
  title: "Card 1", 
  subtitle: "This is a card!",
  desc: "lorem ipsum sit dlor amet"
}

</script>

<template>
  <main>
    <h1>Portfolio.</h1>
    <div>
      <Card v-bind="sampleProps" />
      <Card v-bind="sampleProps" />
      <Card v-bind="sampleProps" />
      <Card v-bind="sampleProps" />
    </div>

  </main>
</template>
