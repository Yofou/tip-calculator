<script lang="ts">
	export let value: number;

	const formatter = Intl.NumberFormat('en-US', {
		currency: 'USD',
		style: 'currency',
		maximumFractionDigits: 2
	});
</script>

<div class="grid grid-cols-2 overflow-hidden items-center">
	<h1 class="text-label text-white-full">
		<slot /><br />
		<span class="text-under text-[#7F9D9F]">/ person</span>
	</h1>

	<p class="text-blue-600 text-money !text-[2rem] md:!text-xl justify-self-end">{formatter.format(value)}</p>
</div>
