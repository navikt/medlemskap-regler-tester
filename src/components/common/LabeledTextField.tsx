import {FieldConfig, useField} from "formik";
import React from "react";
import './LabeledTextField.css';

interface TextFieldProps extends FieldConfig {
    label: string;
}

export const LabeledTextField = ({ label, ...props }: TextFieldProps) => {
    const [field, meta] = useField(props);
    return (
        <div className={'textFieldLayout'}>
            {label}
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};
