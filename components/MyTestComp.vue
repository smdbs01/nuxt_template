<script setup lang="ts">
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div class="flex items-center gap-4 rounded-md border border-muted px-4 py-2">
    <Button @click="increment"> Click me </Button>
    <span>
      {{ count }}
    </span>
  </div>
</template>
