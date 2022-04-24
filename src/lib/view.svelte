<script>
	import ViewValue from './view-value.svelte';
	import { bill, numOfPeople, tipPerctenage } from './inputs';

	$: hasError = $bill.invalid || $numOfPeople.invalid || $tipPerctenage.invalid;
	$: tipAmount = hasError ? 0 : ($bill.value * ($tipPerctenage.value / 100)) / $numOfPeople.value
	$: total = hasError ? 0 :  ($bill.value / $numOfPeople.value) + tipAmount

	const onReset = () => {
		bill.reset()
		numOfPeople.reset()
		tipPerctenage.reset()
	}
</script>

<section
	class="grid grid-cols-1 grid-rows-[repeat(2,max-content),1fr] w-full h-full gap-y-[22px] md:gap-y-[41px] bg-blue-900 rounded-[15px] p-10"
>
	<h1 class="sr-only">Control View</h1>

	<ViewValue value={tipAmount}>Tip Amount</ViewValue>
	<ViewValue value={total}>Total</ViewValue>

	<fieldset form="controls" class="self-end mt-8">
		<button
			type="button"
			disabled={hasError}
			class="text-reset bg-blue-600 hover:bg-blue-300 disabled:bg-opacity-25 disabled:opacity-25 rounded-[5px] w-full min-h-[48px] uppercase transition-colors"
   			on:click={onReset}
		>
			reset
		</button>
	</fieldset>
</section>
