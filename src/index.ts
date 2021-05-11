// ----- Types ----- //

export type {Country, CountryCode} from './countries'

export type { Theme, Format } from './format';
export { Pillar, Special, Design, Display } from './format';

export type {
	OphanABEvent,
	OphanABPayload,
	OphanAction,
	OphanComponent,
	OphanComponentEvent,
	OphanComponentType,
	OphanProduct,
	TestMeta,
} from './ophan';

export { Role } from './role';

export type { Option } from './option';
export {
	OptionKind,
	some,
	none,
	fromNullable,
	withDefault,
	map,
	map2,
	andThen,
} from './option';

export type { Result } from './result';
export {
	ResultKind,
	ok,
	err,
	fromUnsafe,
	partition,
	either,
	mapError,
	toOption,
	map as resultMap,
	andThen as resultAndThen,
} from './result';
