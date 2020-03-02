// ----- Imports ----- //

import { Format, Pillar, Design } from './Format';


// ----- Types ----- //

const enum ColourScheme {
    News,
    Opinion,
    Sport,
    Culture,
    Lifestyle,
    Labs,
    SpecialReport,
}


// ----- Functions ----- //

function fromFormat({ pillar, design }: Format): ColourScheme {
    if (design === Design.Comment && pillar === Pillar.News) {
        return ColourScheme.Opinion;
    }

    if (pillar === Pillar.Opinion) {
        return ColourScheme.Opinion;
    }

    if (pillar === Pillar.Sport) {
        return ColourScheme.Sport;
    }

    if (pillar === Pillar.Culture) {
        return ColourScheme.Culture;
    }

    if (pillar === Pillar.Lifestyle) {
        return ColourScheme.Lifestyle;
    }

    return ColourScheme.News;
}


// ----- Exports ----- //

export {
    ColourScheme,
    fromFormat,
}
