<script lang="ts">
	import { v4 } from 'uuid';
	import type FieldType from './field-type';
	import InputNumber from './input-number.svelte';

	export let field: FieldType;
	export let src: string;
	export let alt = '';
	export let step = 1;
	export let min = 0;
	export let max: number | undefined = undefined;
	export let errorMSG: string;

	const id = v4();
</script>

<fieldset class="grid gap-[6px]">
	<div class="w-full flex justify-between">
		<label class="text-label text-white-900" for={id}>
			<slot />
		</label>

		{#if $field.invalid}
			<label class="text-label text-red !text-sm" for={id}>{errorMSG}</label>
		{/if}
	</div>

	<div class="grid grid-cols-[minmax(0,max-content),minmax(0,1fr)] grid-rows-1">
		<InputNumber
			class="row-start-1 row-end-2 col-start-1 col-end-3"
			{id}
			{field}
			{min}
			{max}
			{step}
		/>
		<img
			class="row-start-1 row-end-2 col-start-1 col-end-2 place-self-center ml-5 select-none pointer-events-none"
			draggable="false"
			{src}
			{alt}
		/>
	</div>
</fieldset>
