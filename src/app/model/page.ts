export interface Page {
    content?: Array<any>;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    size?: number;
    sort?: object;
    totalElements?: number;
    totalPages?: number;
}