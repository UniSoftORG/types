import {ComponentType, FC, ReactNode} from "react";
import {Conditional, DynamicProp} from "./dynamic";
import {PropConfig} from "./prop";

export default interface ComponentData<Type = any, ChildType = any> {
    [key: string]: any;
    name?: string;
    uuid: string;
    type: 'Element' | 'Translation' | 'Component' | 'Image' | string;
    element?: string;
    component?: ReactNode | FC<Type> | ComponentType<Type>;
    props?: Type;
    receiveProps?: Array<{ parentProps?: string[] } | keyof Type | any>;
    attrs?: Record<string, any>;
    mapProp?: keyof Type;
    data?: any;
    dynamicProps?: DynamicProp[];
    propConfig?: PropConfig<Type, ChildType>;
    conditionalClasses?: { className: Conditional[] }[];
    style?: Record<string, any>;
    canHaveChildren?: boolean;
    childrenTypes?: Array<FC<ChildType> | ReactNode | ComponentData<Type, Partial<ChildType>>>;
    children?: any;
    // children?: ComponentData<Type, ChildType>[] | React.ReactElement<{parentprops?: any}>[] | React.ReactElement<{parentprops?: any}>;
}
