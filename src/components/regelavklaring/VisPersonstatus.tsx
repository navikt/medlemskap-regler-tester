import React from "react";
import {Personstatus} from "../../model/regelavklaring";
import './Regelavklaring.css'

interface Props {
    personstatus: Personstatus[];
}

function VisPersonstatus(props: Props) {
    const statsborgerskapItems = props.personstatus.map((sb, index) => {
        return (
            <tr className={index % 2 === 0 ? 'whiteLine' : 'grayLine'} key={index}>
                <td>{sb.personstatus}</td>
                <td>{sb.fom}</td>
                <td>{sb.tom}</td>
                <td>TODO</td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Personstatus</h2>
            <table>
                <thead>
                    <tr>
                        <td>Status</td>
                        <td>Gyldig fom</td>
                        <td>Gyldig tom</td>
                        <td>Slett?</td>
                    </tr>
                </thead>
                <tbody>
                    {statsborgerskapItems}
                </tbody>
            </table>
        </div>
    );
}

export default VisPersonstatus;
