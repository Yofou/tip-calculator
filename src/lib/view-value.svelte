<script lang="ts">
	export let value: number;

	$: isLargeNumber = value > 1000

	const formatter = Intl.NumberFormat('en-US', {
		currency: 'USD',
		style: 'currency',
		maximumFractionDigits: 2
	});
</script>

<div class="grid grid-cols-[max-content,1fr] overflow-hidden items-center">
	<h1 class="text-label text-white-full">
		<slot /><br />
		<span class="text-under text-[#7F9D9F]">/ person</span>
	</h1>

	<div class="justify-self-end w-max">
		<p class="text-blue-600 text-money !text-[2rem] {isLargeNumber ? 'md:!text-[2rem]' : 'md:!text-xl'} transition-all">{formatter.format(value)}</p>
	</div>
</div>
