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
        booleanAlgebra: TranslationContent;
        applicationsOfLogicalOperators: TranslationContent;
        practicalExamples: TranslationContent;
    }
};


export const translations: Translations = {
    en: {
        introductionToLogicalOperators: {
            title: "Introduction: Logical Operators",
            content: `
                <p>Logical operators are fundamental components in programming and computer science. They are used to perform logical operations on boolean values, often within conditional statements or loops. Understanding these operators is crucial for writing efficient and accurate code.</p>
                <p>The basic logical operators include AND, OR, and NOT, which are used to combine or invert boolean values. In addition to these, there are also advanced logical operators such as NAND, NOR, XOR, and XNOR, which are used in more complex logical operations.</p>
                <p>By learning about logical operators, you will be able to:</p>
                <ul>
                    <li>Understand and construct truth tables.</li>
                    <li>Simplify and evaluate boolean expressions.</li>
                    <li>Apply logical operators in conditional statements and loops.</li>
                    <li>Use bitwise logical operators for low-level data manipulation.</li>
                </ul>
                <p>Let's begin our journey into the world of logical operators and explore their applications in programming and beyond.</p>
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
        booleanAlgebra: {
            title: "Boolean Algebra",
            content: `
           
            `
        },
        applicationsOfLogicalOperators: {
            title: "Applications of Logical Operators",
            content: `
           
            `
        },
        practicalExamples: {
            title: "Practical Examples",
            content: `
           
            `
        }
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
        booleanAlgebra: {
            title: "ბულის ალგებრა",
            content: `
           
            `
        },
        applicationsOfLogicalOperators: {
            title: "ლოგიკური ოპერატორების გამოყენებები",
            content: `
           
            `
        },
        practicalExamples: {
            title: "პრაქტიკული მაგალითები",
            content: `
           
            `
        }
    }
};
