import React from "react";
import {Form, FormikErrors, FormikProps, withFormik} from "formik";
import {Personstatus} from "../../model/regelavklaring";
import './Personhistorikk.css';
import {LabeledTextField} from "../common/LabeledTextField";

interface Props {
    leggTilPersonstatus: (personstatus: Personstatus) => void;
}

interface PersonstatusFormProps {
}

const InnerForm = (props: FormikProps<Personstatus>)=> {
    return (
        <Form>
            <h3>Ny personstatus</h3>

            <LabeledTextField label={'Personstatus'} name={'personstatus'} type={'text'} />
            <div className={'fomtom'}>
                <LabeledTextField label={'Fom'} name={'fom'} type={'text'} />
                <LabeledTextField label={'Tom'} name={'tom'} type={'text'} />
            </div>
            <button type="submit" disabled={props.isSubmitting}>
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

