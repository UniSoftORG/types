import {DynamicProp} from "./dynamic";
import ComponentData from "./component";

export type PropTypes = {
    string: string;
    text: string;
    number: number;
    image: string;
    boolean: boolean;
}

export interface PropConfig<T = any, ChildType = any> {
    fileProps?: any[];
    editableProps?: Array<keyof T>;
    translatableProps?: Array<keyof T>;
    propsTypes?: string[];
    defaultProps?: T;
    propOptions?: any;
    incrementalProps?: Array<keyof T>;
    dynamicAttributes?: DynamicProp[];
    dynamicProps?: DynamicProp[];
    propReceivedFrom?: object;
}

export type DetermineRendererProps = {
    componentData: ComponentData;
    parentType: string;
    parentUuid: string;
    parentProps?: any;
    index?: string | number;
};
