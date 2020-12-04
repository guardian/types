// ----- Types ----- //

export type { Pillar, Special, Theme, Design, Display, Format } from './format';

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

export type { Role } from './role';

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
