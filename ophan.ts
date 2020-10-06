// ----- Types ----- //

/**
 * an individual A/B test, structured for Ophan
 */
type OphanABEvent = {
    variantName: string;
    complete: string | boolean;
    campaignCodes?: Array<string>;
};

/**
 * the actual payload we send to Ophan: an object of OphanABEvents with test IDs as keys
 */
type OphanABPayload = {
    abTestRegister: { [testId: string]: OphanABEvent };
};

type OphanProduct =
    | "CONTRIBUTION"
    | "RECURRING_CONTRIBUTION"
    | "MEMBERSHIP_SUPPORTER"
    | "MEMBERSHIP_PATRON"
    | "MEMBERSHIP_PARTNER"
    | "DIGITAL_SUBSCRIPTION"
    | "PRINT_SUBSCRIPTION";

type OphanAction =
    | "INSERT"
    | "VIEW"
    | "EXPAND"
    | "LIKE"
    | "DISLIKE"
    | "SUBSCRIBE"
    | "ANSWER"
    | "VOTE"
    | "CLICK";

type OphanComponentType =
    | "READERS_QUESTIONS_ATOM"
    | "QANDA_ATOM"
    | "PROFILE_ATOM"
    | "GUIDE_ATOM"
    | "TIMELINE_ATOM"
    | "NEWSLETTER_SUBSCRIPTION"
    | "SURVEYS_QUESTIONS"
    | "ACQUISITIONS_EPIC"
    | "ACQUISITIONS_ENGAGEMENT_BANNER"
    | "ACQUISITIONS_THANK_YOU_EPIC"
    | "ACQUISITIONS_HEADER"
    | "ACQUISITIONS_FOOTER"
    | "ACQUISITIONS_INTERACTIVE_SLICE"
    | "ACQUISITIONS_NUGGET"
    | "ACQUISITIONS_STANDFIRST"
    | "ACQUISITIONS_THRASHER"
    | "ACQUISITIONS_EDITORIAL_LINK"
    | "ACQUISITIONS_SUBSCRIPTIONS_BANNER"
    | "ACQUISITIONS_OTHER"
    | "SIGN_IN_GATE"
    | "RETENTION_ENGAGEMENT_BANNER";

type OphanComponent = {
    componentType: OphanComponentType;
    id?: string;
    products?: Array<OphanProduct>;
    campaignCode?: string;
    labels?: Array<string>;
};

type OphanComponentEvent = {
    component: OphanComponent;
    action: OphanAction;
    value?: string;
    id?: string;
    abTest?: {
        name: string;
        variant: string;
    };
};

type TestMeta = {
    abTestName: string;
    abTestVariant: string;
    campaignCode: string;
    campaignId?: string;
    componentType: OphanComponentType;
    products?: OphanProduct[];
};

export {
    OphanABEvent,
    OphanABPayload,
    OphanAction,
    OphanComponent,
    OphanComponentEvent,
    OphanComponentType,
    OphanProduct,
    TestMeta,
};
