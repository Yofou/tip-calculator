import { field } from 'svelte-forms';
import { required, min, max } from 'svelte-forms/validators';

export const bill = field('bill', 0, [required(), min(0)], {
	checkOnInit: true,
	validateOnChange: true
});
export const numOfPeople = field('numOfPeople', 1, [required(), min(1)], {
	checkOnInit: true,
	validateOnChange: true
});
export const tipPerctenage = field('tip', 5, [required(), min(1), max(100)], {
	checkOnInit: true,
	validateOnChange: true
});
