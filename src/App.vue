<script setup>
import HelloWorld from "./components/HelloWorld.vue";
const startPoint = 5;
</script>

<template>
	<div class="test">Test This</div>
	<HelloWorld msg="Vite + Vue" :start="startPoint" />
</template>

<style scoped>
.test {color: aquamarine}
</style>
