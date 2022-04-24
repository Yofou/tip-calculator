<script lang="ts">
	import { style } from 'svelte-forms';
	import type FieldType from './field-type';

	export let id: string | undefined;
	export let field: FieldType;
	export let step = 1;
	export let min = 0;
	export let max: number | undefined = undefined;
</script>

<input
	class="{$$props.class} text-inputs text-right text-blue-900 appearance-none rounded-[5px] bg-white-300 px-5 py-[6px] focus:outline focus:outline-2 focus:outline-blue-600"
	type="number"
	bind:value={$field.value}
	use:style={{ field, invalid: 'error' }}
	{id}
	{min}
	{max}
	{step}
/>

<style>
	input {
		-moz-appearance: textfield;
	}

	:global(input.error) {
		@apply outline outline-2;
		outline-color: theme('colors.red') !important;
	}
</style>
