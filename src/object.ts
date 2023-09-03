export type MapOption<ValueType = any, BeforeType = any, AfterType = any> = {
    key: string;
    value: ValueType;
    beforeValue?: BeforeType;
    afterValue?: AfterType;
} | string;

export type FlexibleObj<ObjectType = any, KeyType extends string = string> = {
    [key in KeyType]: ObjectType;
};

export interface Nested<T> {
    [key: string]: T | Nested<T> | undefined;
}

export interface FilterOptions<KeyType extends string = string> {
    initialProperties?: KeyType[];
    additionalProperties?: KeyType[];
    parentKey?: KeyType;
}

export type ExtractConfig<KeyType extends string = string> = KeyType | { [key in KeyType]: any | "getAllProps" | KeyType[] };

export interface ExtractOptions<KeyType extends string = string> {
    additionalProps?: KeyType[];
    recursiveKey?: string
}
