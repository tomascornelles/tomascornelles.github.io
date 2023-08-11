<template>
  <link rel="icon" :href="href">
</template>

<script setup>
  const props = defineProps({
    customIcon: String
  });

  const icons = {
    6: '🌈',
    10: '🎃',
    12: '🎄',
    default: '🔴',
  }

  const month = (() => {
    const today = new Date();
    return today.getMonth() + 1;
  })()

  const favicon = icons[month] || icons['default'];

  const href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${props.customIcon || favicon}</text></svg>`;
</script>
