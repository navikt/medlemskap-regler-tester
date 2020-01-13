import React from "react";
import {Evaluering} from "../model/evaluering";
import '../App.css';

interface Props {
    evaluering?: Evaluering
}

function VisEvaluering(props: Props) {
    if (!props.evaluering) {
        return (
            <div className={'evaluering box'}>
                Legg til noe data og trykk evaluer!
            </div>
        );
    }

    const json = JSON.stringify(props.evaluering, null, 4);

    return (
        <pre>
            {json}
        </pre>
    );
}

export default VisEvaluering;
