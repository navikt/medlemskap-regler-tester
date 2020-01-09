import React from "react";
import {Periode, Personhistorikk, Regelavklaring} from "../model/regelavklaring";
import {Evaluering} from "../model/evaluering";
import {Field, Form, FormikErrors, FormikProps, useField, withFormik} from "formik";
import '../App.css';

interface FunctionProps {
    settEvaluering: (evaluering: Evaluering) => void;
}

interface DisplayProps {
    personhistorikk: Personhistorikk;
}

type Props = FunctionProps & DisplayProps;

interface FormProps {
    soknadstidspunkt: string;
    soknadsperiodeFom: string;
    soknadsperiodeTom: string;
}

const InnerForm = (props: DisplayProps & FormikProps<FormProps>) => {
    const {touched, errors, isSubmitting, personhistorikk} = props;
    return (
        <>
            <div>
                {JSON.stringify(personhistorikk)}
            </div>
            <Form>
                <h1>Regelavklaring</h1>
                <Field name="soknadstidspunkt"/>
                {touched.soknadstidspunkt && errors.soknadstidspunkt && <div>{errors.soknadstidspunkt}</div>}

                <Field name="soknadsperiodeFom"/>
                {touched.soknadsperiodeFom && errors.soknadsperiodeFom && <div>{errors.soknadsperiodeFom}</div>}

                <Field name="soknadstidspunkt"/>
                {touched.soknadsperiodeTom && errors.soknadsperiodeTom && <div>{errors.soknadsperiodeTom}</div>}

                <button type="submit" disabled={isSubmitting}>
                    Evaluer!
                </button>
            </Form>
        </>
    );
};

function OpprettOgSendRegelavklaring(props: Props) {
    const RegelavklaringForm = withFormik<DisplayProps, FormProps>({
        validate: (values: FormProps) => {
            let errors: FormikErrors<FormProps> = {};
            if (!values.soknadstidspunkt) {
                errors.soknadstidspunkt = "Obligatorisk";
            }
            return errors;
        },

        handleSubmit: value => {
            const soknadsperiode: Periode = {
                fom: value.soknadsperiodeFom,
                tom: value.soknadsperiodeTom
            };

            const regelavklaring: Regelavklaring = {
                soknadstidspunkt: value.soknadstidspunkt,
                soknadsperiode: soknadsperiode,
                personhistorikk: props.personhistorikk
            };

            fetch('http://localhost:7070', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(regelavklaring),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    props.settEvaluering(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    })(InnerForm);

    return (
        <div className={'regelavklaring box'}>
            <RegelavklaringForm personhistorikk={props.personhistorikk}/>
        </div>
    )
}

export default OpprettOgSendRegelavklaring;
