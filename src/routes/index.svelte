<script>
	import Controls from '$lib/controls.svelte';
	import View from '$lib/view.svelte';
</script>

<header>
	<img class="w-[86px] h-[53px] mt-[50px] md:mt-[163px]" src="/SPLITTER.svg" alt="splitter" />
</header>

<main
	class="w-full min-h-[481px] bg-white-full rounded-t-[25px] md:rounded-[25px] mt-[40px] md:mt-[87px] px-6 py-8 md:p-8 md:pl-12 grid grid-cols-1 grid-flow-row md:grid-cols-[minmax(0,379px),minmax(0,413px)] gap-12 shadow-main"
>
	<Controls />
	<View />
</main>
