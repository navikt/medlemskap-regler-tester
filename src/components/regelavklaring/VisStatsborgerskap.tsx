import React from "react";
import {Statsborgerskap} from "../../model/regelavklaring";
import './Regelavklaring.css'

interface Props {
    statsborgerskap: Statsborgerskap[];
}

function VisStatsborgerskap(props: Props) {
    const statsborgerskapItems = props.statsborgerskap.map((sb, index) => {
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
            <h2>Statsborgerskap</h2>
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

export default VisStatsborgerskap;
