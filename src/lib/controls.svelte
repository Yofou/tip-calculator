<script lang="ts">
	import InputNumberSet from './input-number-label.svelte';
	import InputNumber from './input-number.svelte';
	import { tipPerctenage, bill, numOfPeople } from '$lib/inputs';

	const changeSelect = (value: number) => () => ($tipPerctenage.value = value);
</script>

<form
	id="controls"
	class="grid grid-cols-1 grid-rows-[repeat(3,max-content)] gap-10"
	on:submit|preventDefault
>
	<InputNumberSet field={bill} src="/dollar.svg" step={0.1} errorMSG="Can't be zero or below"
		>Bill</InputNumberSet
	>

	<fieldset class="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-[14px] gap-y-4">
		<div class="flex justify-between col-span-2 md:col-span-3 items-center">
			<label for="tip" class="text-label text-white-900">Select Tip %</label>
			{#if $tipPerctenage.invalid}
				<label for="tip" class="text-red text-label !text-sm">Tip must be between 0% - 100%</label>
			{/if}
		</div>
		<button
			type="button"
			class:button-select={$tipPerctenage.value === 5}
			on:click={changeSelect(5)}>5%</button
		>
		<button
			type="button"
			class:button-select={$tipPerctenage.value === 10}
			on:click={changeSelect(10)}>10%</button
		>
		<button
			type="button"
			class:button-select={$tipPerctenage.value === 15}
			on:click={changeSelect(15)}>15%</button
		>
		<button
			type="button"
			class:button-select={$tipPerctenage.value === 25}
			on:click={changeSelect(25)}>25%</button
		>
		<button
			type="button"
			class:button-select={$tipPerctenage.value === 50}
			on:click={changeSelect(50)}>50%</button
		>
		<InputNumber id="tip" min={0} max={100} field={tipPerctenage} />
	</fieldset>

	<InputNumberSet field={numOfPeople} min={1} src="/person.svg" errorMSG="Can't be zero or below"
		>Number of People</InputNumberSet
	>
</form>

<style>
	button {
		@apply bg-blue-900 rounded-[5px] text-white-full min-h-[48px] text-inputs transition-colors;
	}

	button:hover {
		@apply bg-blue-300 text-blue-900;
	}

	.button-select {
		@apply bg-blue-600 text-blue-900;
	}
</style>
