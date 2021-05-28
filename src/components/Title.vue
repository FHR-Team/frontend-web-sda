<template>
  <div></div>
</template>

<script>
export default {
    name: "Title",
    props: ['title'],
    watch: {
        title: {
            immediate: true,
            handler() {
                document.title = this.title + ' - Portal Siodoarjo'
            }
        }
    }
}
</script>

<style>

</style>