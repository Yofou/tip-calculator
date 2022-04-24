import type { Field } from 'svelte-forms/types';
import type { Writable } from 'svelte/store';

type FieldType = Omit<Writable<Field<number>>, 'set'> & {
	validate: () => Promise<Field<number>>;
	reset: () => void;
	clear: () => void;
	set(this: void, value: Field<number> | number): void;
};

export default FieldType;
