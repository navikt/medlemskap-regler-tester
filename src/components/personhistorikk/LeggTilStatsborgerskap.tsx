import React from "react";
import {Form, FormikErrors, FormikProps, withFormik} from "formik";
import {Statsborgerskap} from "../../model/regelavklaring";
import './Personhistorikk.css';
import {LabeledTextField} from "../common/LabeledTextField";

interface Props {
    leggTilStatsborgerskap: (statsborgerskap: Statsborgerskap) => void;
}

interface StatsborgerskapFormProps {
}

const InnerForm = (props: FormikProps<Statsborgerskap>)=> {
    return (
        <Form>
            <h3>Nytt statsborgerskap</h3>

            <LabeledTextField label={"Landkode"} name={"landkode"} type={"text"} />
            <LabeledTextField label={"Fom"} name={"fom"} type={"text"} />
            <LabeledTextField label={"Tom"} name={"tom"} type={"text"} />

            <button type="submit" disabled={props.isSubmitting}>
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
        <div className={'box'}>
            <StatsborgerskapForm />
        </div>
    );
}

export default LeggTilStatsborgerskap;

