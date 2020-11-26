// ----- Types ----- //

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
