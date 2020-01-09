import React from "react";
import {Field, Form, FormikErrors, FormikProps, withFormik} from "formik";
import {Statsborgerskap} from "../model/regelavklaring";
import '../App.css';

interface Props {
    leggTilStatsborgerskap: (statsborgerskap: Statsborgerskap) => void;
}

interface StatsborgerskapFormProps {
}

const InnerForm = (props: FormikProps<Statsborgerskap>)=> {
    const {touched, errors, isSubmitting} = props;
    return (
        <Form>
            <h1>Nytt statsborgerskap</h1>

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

function LeggTilStatsborgerskap(props: Props) {
    const StatsborgerskapForm = withFormik<StatsborgerskapFormProps, Statsborgerskap>({
        validate: (values: Statsborgerskap) => {
            let errors: FormikErrors<Statsborgerskap> = {};
            if (!values.landkode) {
                errors.landkode = "Obligatorisk"
            }
            return errors;
        },

        handleSubmit: value => {
            props.leggTilStatsborgerskap(value);
        }
    })(InnerForm);

    return (
        <div className={'statsborgerskap box'}>
            <StatsborgerskapForm />
        </div>
    );
}

export default LeggTilStatsborgerskap;

