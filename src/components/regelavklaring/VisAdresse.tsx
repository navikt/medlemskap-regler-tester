import React from "react";
import {Adresse} from "../../model/regelavklaring";
import './Regelavklaring.css'

interface Props {
    adresse: Adresse[];
    adressetype: string;
}

function VisAdresse(props: Props) {
    const statsborgerskapItems = props.adresse.map((sb, index) => {
        return (
            <tr className={index % 2 === 0 ? 'whiteLine' : 'grayLine'} key={index}>
                <td>{sb.landkode}</td>
                <td>{sb.fom}</td>
                <td>{sb.tom}</td>
                <td>TODO</td>
            </tr>
        );
    });

    return (
        <div>
            <h2>{props.adressetype}</h2>
            <table>
                <thead>
                    <tr>
                        <td>Landkode</td>
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

export default VisAdresse;
