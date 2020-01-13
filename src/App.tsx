import React, {useState} from 'react';
import './App.css';
import {Evaluering} from "./model/evaluering";
import VisEvaluering from "./components/VisEvaluering";
import OpprettOgSendRegelavklaring from "./components/regelavklaring/OpprettOgSendRegelavklaring";
import {Adresse, Personstatus, Statsborgerskap} from "./model/regelavklaring";
import ByggPersonhistorikk from "./components/personhistorikk/ByggPersonhistorikk";

const App: React.FC = () => {
  const [evaluering, settEvaluering] = useState<Evaluering>();
  const [statsborgerskapListe, settStatsborgerskapListe] = useState<Statsborgerskap[]>([]);
  const [personstatusListe, settPersonstatusListe] = useState<Personstatus[]>([]);
  const [bostedsliste, settBostedsliste] = useState<Adresse[]>([]);
  const [postadresseliste, settPostadresseliste] = useState<Adresse[]>([]);
  const [midlertidigAdresseListe, settMidlertidigAdresseListe] = useState<Adresse[]>([]);

  const leggTilStatsborgerskap = (sb: Statsborgerskap) => settStatsborgerskapListe(statsborgerskapListe.concat(sb));
  const leggTilPersonstatus = (ps: Personstatus) => settPersonstatusListe(personstatusListe.concat(ps));
  const leggTilBosted = (adr: Adresse) => settBostedsliste(bostedsliste.concat(adr));
  const leggTilPostadresse = (adr: Adresse) => settPostadresseliste(postadresseliste.concat(adr));
  const leggTilMidlertidigAdresse = (adr: Adresse) => settMidlertidigAdresseListe(midlertidigAdresseListe.concat(adr));

  return (
    <div className="App">
        <ByggPersonhistorikk
            leggTilStatsborgerskap={leggTilStatsborgerskap}
            leggTilPersonstatus={leggTilPersonstatus}
            leggTilBostedsadresse={leggTilBosted}
            leggTilPostadresse={leggTilPostadresse}
            leggTilMidlertidigAdresse={leggTilMidlertidigAdresse}
        />
        <OpprettOgSendRegelavklaring
            settEvaluering={settEvaluering}
            statsborgerskap={statsborgerskapListe}
            personstatuser={personstatusListe}
            bostedsadresser={bostedsliste}
            postadresser={postadresseliste}
            midlertidigeAdresser={midlertidigAdresseListe}
        />
        <VisEvaluering evaluering={evaluering} />
    </div>
  );
};

export default App;
