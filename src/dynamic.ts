export interface Conditional {
    condition: string;
    value: string;
}

export interface DynamicProp {
    [key: string]: Array<{ [key: string]: string }>;
}
