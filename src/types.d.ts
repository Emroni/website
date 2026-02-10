type ShortDate = `${number}/20${number}`;
type DateRange = [ShortDate, ShortDate];

declare namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_GA_ID: string;
    }
}
