// ----- Types ----- //

const enum Pillar {
    News = 0,
    Opinion = 1,
    Sport = 2,
    Culture = 3,
    Lifestyle = 4,
}

const enum Special {
    SpecialReport = 5,
}

type Theme = Pillar | Special;

const enum Design {
    Article,
    Media,
    Review,
    Analysis,
    Comment,
    Feature,
    Live,
    Recipe,
    MatchReport,
    Interview,
    GuardianView,
    Quiz,
    AdvertisementFeature,
    Interactive
}

const enum Display {
    Standard,
    Immersive,
    Showcase,
    NumberedList,
    Column
}

interface Format {
    theme: Theme;
    design: Design;
    display: Display;
}


// ----- Exports ----- //

export {
    Theme,
    Pillar,
    Special,
    Design,
    Display,
};

export type { Format };
