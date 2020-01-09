import React from "react";
import {Field, Form, FormikErrors, FormikProps, withFormik} from "formik";
import {Adresse} from "../model/regelavklaring";
import '../App.css';

interface FunctionProps {
    leggTilAdresse: (adresse: Adresse) => void;
}

interface AdresseFormProps {
    typeAdresse: string;
}

type Props = FunctionProps & AdresseFormProps;

const InnerForm = (props: AdresseFormProps & FormikProps<Adresse>) => {
    const {touched, errors, isSubmitting, typeAdresse} = props;
    return (
        <Form>
            <h1>Ny {typeAdresse}</h1>
            <Field name="adresselinje" />
            {touched.adresselinje && errors.adresselinje && <div>{errors.adresselinje}</div>}

            <Field name="landkode" />
            {touched.landkode && errors.landkode && <div>{errors.landkode}</div>}

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

function LeggTilAdresse(props: Props) {
    const AdresseForm = withFormik<AdresseFormProps, Adresse>({
        validate: (values: Adresse) => {
            let errors: FormikErrors<Adresse> = {};
            if (!values.landkode) {
                errors.landkode = "Obligatorisk"
            }
            return errors;
        },

        handleSubmit: value => {
            props.leggTilAdresse(value)
        }
    })(InnerForm);

    return (
        <div className={'adresse box'}>
            <AdresseForm typeAdresse={props.typeAdresse} />
        </div>
    );
}

export default LeggTilAdresse;

