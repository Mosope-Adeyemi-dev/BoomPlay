<template>
  <div class="modal">
    <LoaderButton />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .modal {
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.645);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
  }
</style>
