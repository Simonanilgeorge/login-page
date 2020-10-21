export class CompanyDto {
    coCode: string;
    multiLanguageYn: string = "N";
    primaryLangauge: string | null="en";
    secondryLangauge: String | null;
    coName: string;
    coShName: string;
    add1: string | null;
    add2: string | null;
    add3: string | null;
    add4: string | null;
    email: string | null;
    website: string | null;
    yrSDt: Date | null;
    yrEDt: Date | null;
    baseCurCode: string | null;
    rateDecPts: number | null;
    modiCloseDate: Date;
    moduleType: string = "RC";

}
export interface Currency {
    value: string;
    label: string;
}
export interface Language {
    value: string;
    label: string;
}

