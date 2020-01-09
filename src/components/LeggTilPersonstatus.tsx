import React from "react";
import {Field, Form, FormikErrors, FormikProps, withFormik} from "formik";
import {Personstatus} from "../model/regelavklaring";
import '../App.css';

interface Props {
    leggTilPersonstatus: (personstatus: Personstatus) => void;
}

interface PersonstatusFormProps {
}

const InnerForm = (props: FormikProps<Personstatus>)=> {
    const {touched, errors, isSubmitting} = props;
    return (
        <Form>
            <h1>Ny personstatus</h1>
            <Field name="personstatus" />
            {touched.personstatus && errors.personstatus && <div>{errors.personstatus}</div>}

            <Field name="fom" />
            {touched.fom && errors.fom && <div>{errors.fom}</div>}

            <Field name="tom" />
            {touched.tom && errors.tom && <div>{errors.tom}</div>}

            <button type="submit" disabled={isSubmitting}>
                Legg til
            </button>
        </Form>
    );
};

function LeggTilPersonstatus(props: Props) {
    const PersonstatusForm = withFormik<PersonstatusFormProps, Personstatus>({
        validate: (values: Personstatus) => {
            let errors: FormikErrors<Personstatus> = {};
            if (!values.personstatus) {
                errors.personstatus = "Obligatorisk"
            }
            return errors;
        },

        handleSubmit: value => {
            props.leggTilPersonstatus(value);
        }
    })(InnerForm);

    return (
        <div className={'personstatus box'}>
            <PersonstatusForm />
        </div>
    );
}

export default LeggTilPersonstatus;

