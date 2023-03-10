<script setup>
import { ref } from "vue";
const props = defineProps({
	msg: String,
	start: Number,
});

const count = ref(props.start);
</script>

<template>
	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
	</div>
</template>

<style lang="scss" scoped>
.card {
  background: #888;
  button {background: blue;color: white;}
}
</style>
