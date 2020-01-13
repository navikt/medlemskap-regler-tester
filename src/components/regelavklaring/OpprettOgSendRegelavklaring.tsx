import React from "react";
import {
    Adresse,
    Periode,
    Personhistorikk,
    Personstatus,
    Regelavklaring,
    Statsborgerskap
} from "../../model/regelavklaring";
import {Evaluering} from "../../model/evaluering";
import {Field, Form, FormikErrors, FormikProps, withFormik} from "formik";
import '../../App.css';
import VisStatsborgerskap from "./VisStatsborgerskap";
import VisPersonstatus from "./VisPersonstatus";
import VisAdresse from "./VisAdresse";

interface FunctionProps {
    settEvaluering: (evaluering: Evaluering) => void;
}

interface DisplayProps {
    statsborgerskap: Statsborgerskap[];
    personstatuser: Personstatus[];
    bostedsadresser: Adresse[];
    postadresser: Adresse[];
    midlertidigeAdresser: Adresse[];
}

type Props = FunctionProps & DisplayProps;

interface FormProps {
    soknadstidspunkt: string;
    soknadsperiodeFom: string;
    soknadsperiodeTom: string;
}

const InnerForm = (props: DisplayProps & FormikProps<FormProps>) => {
    const {touched, errors, isSubmitting, statsborgerskap, personstatuser, bostedsadresser, postadresser, midlertidigeAdresser} = props;
    return (
        <>
            <div>
                <VisStatsborgerskap statsborgerskap={statsborgerskap} />
                <VisPersonstatus personstatus={personstatuser} />
                <VisAdresse adresse={bostedsadresser} adressetype={'Bostedsadresser'} />
                <VisAdresse adresse={postadresser} adressetype={'Postadresser'} />
                <VisAdresse adresse={midlertidigeAdresser} adressetype={'Midlertidige adresser'} />
            </div>
            <Form>
                <h1>Regelavklaring</h1>
                <Field name="soknadstidspunkt"/>
                {touched.soknadstidspunkt && errors.soknadstidspunkt && <div>{errors.soknadstidspunkt}</div>}

                <Field name="soknadsperiodeFom"/>
                {touched.soknadsperiodeFom && errors.soknadsperiodeFom && <div>{errors.soknadsperiodeFom}</div>}

                <Field name="soknadsperiodeTom"/>
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

            const personhistorikk: Personhistorikk = {
                statsborgerskap: props.statsborgerskap,
                personstatuser: props.personstatuser,
                bostedsadresser: props.bostedsadresser,
                postadresser: props.postadresser,
                midlertidigAdresser: props.midlertidigeAdresser
            };

            const regelavklaring: Regelavklaring = {
                soknadstidspunkt: value.soknadstidspunkt,
                soknadsperiode: soknadsperiode,
                personhistorikk: personhistorikk
            };

            fetch('http://localhost:7070/', {
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
            <RegelavklaringForm
                statsborgerskap={props.statsborgerskap}
                personstatuser={props.personstatuser}
                bostedsadresser={props.bostedsadresser}
                postadresser={props.postadresser}
                midlertidigeAdresser={props.midlertidigeAdresser}
            />
        </div>
    )
}

export default OpprettOgSendRegelavklaring;
