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
		<button type="button" class="cnt_btn" @click="count++">
			count is {{ count }}
		</button>
	</div>
</template>

<style lang="scss" src="../assets/styles.scss" scoped>

</style>
