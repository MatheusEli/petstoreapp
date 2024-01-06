/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetCreateFormInputValues = {
    age?: number;
    name?: string;
    breed?: string;
    about?: string;
    image?: string;
    color?: string;
    _version?: number;
    _lastChangedAt?: string;
    _deleted?: boolean;
};
export declare type PetCreateFormValidationValues = {
    age?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    breed?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    _version?: ValidationFunction<number>;
    _lastChangedAt?: ValidationFunction<string>;
    _deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetCreateFormOverridesProps = {
    PetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    breed?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    _version?: PrimitiveOverrideProps<TextFieldProps>;
    _lastChangedAt?: PrimitiveOverrideProps<TextFieldProps>;
    _deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PetCreateFormProps = React.PropsWithChildren<{
    overrides?: PetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PetCreateFormInputValues) => PetCreateFormInputValues;
    onSuccess?: (fields: PetCreateFormInputValues) => void;
    onError?: (fields: PetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PetCreateFormInputValues) => PetCreateFormInputValues;
    onValidate?: PetCreateFormValidationValues;
} & React.CSSProperties>;
export default function PetCreateForm(props: PetCreateFormProps): React.ReactElement;
