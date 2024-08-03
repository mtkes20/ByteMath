// resources.ts
export interface TranslationContent {
    title: string;
    content: string;
}

export interface Translations {
    [key: string]: {
        introductionToLogicalOperators: TranslationContent;
        basicLogicalOperators: TranslationContent;
        advancedLogicalOperators: TranslationContent;
        truthTables: TranslationContent;
    }
};


export const translations: Translations = {
    en: {
        introductionToLogicalOperators: {
            title: "Introduction: Logical Operators",
            content: `

            `
        },
        basicLogicalOperators: {
            title: "Basic Logical Operators",
            content: `
           
            `
        },
        advancedLogicalOperators: {
            title: "Advanced Logical Operators",
            content: `
           
            `
        },
        truthTables: {
            title: "Truth Tables",
            content: `
           
            `
        },
    },
    ka: {
        introductionToLogicalOperators: {
            title: "შესავალი: ლოგიკური ოპერატორები",
            content: `
                
            `
        },
        basicLogicalOperators: {
            title: "ძირითადი ლოგიკური ოპერატორები",
            content: `
           
            `
        },
        advancedLogicalOperators: {
            title: "გაფართოებული ლოგიკური ოპერატორები",
            content: `
           
            `
        },
        truthTables: {
            title: "სიმართლის ცხრილები",
            content: `
           
            `
        },
    }
};
