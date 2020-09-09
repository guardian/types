// ----- Types ----- //

enum Pillar {
    News,
    Opinion,
    Sport,
    Culture,
    Lifestyle,
}

enum Design {
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

enum Display {
    Standard,
    Immersive,
    Showcase,
    NumberedList,
    Column
}

interface Format {
    pillar: Pillar;
    design: Design;
    display: Display;
}


// ----- Exports ----- //

export {
    Pillar,
    Design,
    Display,
};

export type { Format };
