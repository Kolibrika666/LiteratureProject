
export type InternetType = {
    site: string;
    title: string;
    lastName?: string;
    firstLetter?: string;
    lastLetter?: string;
    url: string;
    date: Date;
}

export type MonographType = {
    author1: string;
    author2?: string;
    author3?: string;
    title: string;
    number: string;
    city: string;
    publishing: string;
    year: string;
    firstPage: string;
    lastPage: string;
}

export type manualType = {
    author1: string;
    author2?: string;
    author3?: string;
    title: string;
    city: string;
    publishing: string;
    year: string;
    PageSize: string;
    lastPage: string;
}
