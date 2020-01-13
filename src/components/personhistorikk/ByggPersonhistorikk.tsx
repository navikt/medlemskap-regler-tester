import React from "react";
import {Adresse, Personstatus, Statsborgerskap} from "../../model/regelavklaring";
import LeggTilStatsborgerskap from "./LeggTilStatsborgerskap";
import LeggTilPersonstatus from "./LeggTilPersonstatus";
import LeggTilAdresse from "./LeggTilAdresse";
import './Personhistorikk.css';

interface Props {
    leggTilStatsborgerskap: (sb: Statsborgerskap) => void;
    leggTilPersonstatus: (ps: Personstatus) => void;
    leggTilBostedsadresse: (adr: Adresse) => void;
    leggTilPostadresse: (adr: Adresse) => void;
    leggTilMidlertidigAdresse: (adr: Adresse) => void;
}

function ByggPersonhistorikk(props: Props) {
    return (
        <div className={'mainPanel'}>
            <LeggTilStatsborgerskap leggTilStatsborgerskap={props.leggTilStatsborgerskap} />
            <LeggTilPersonstatus leggTilPersonstatus={props.leggTilPersonstatus} />
            <LeggTilAdresse leggTilAdresse={props.leggTilBostedsadresse} typeAdresse={'bostedsadresse'} />
            <LeggTilAdresse leggTilAdresse={props.leggTilPostadresse} typeAdresse={'postadresse'} />
            <LeggTilAdresse leggTilAdresse={props.leggTilMidlertidigAdresse} typeAdresse={'midlertidig adresse'} />
        </div>
    );
}

export default ByggPersonhistorikk;
