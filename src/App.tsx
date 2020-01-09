import React, {useState} from 'react';
import './App.css';
import {Evaluering} from "./model/evaluering";
import VisEvaluering from "./components/VisEvaluering";
import OpprettOgSendRegelavklaring from "./components/OpprettOgSendRegelavklaring";
import {Personhistorikk, Statsborgerskap} from "./model/regelavklaring";
import LeggTilStatsborgerskap from "./components/LeggTilStatsborgerskap";
import LeggTilPersonstatus from "./components/LeggTilPersonstatus";
import LeggTilAdresse from "./components/LeggTilAdresse";

const App: React.FC = () => {
  const [evaluering, settEvaluering] = useState<Evaluering>();
  const personhistorikk: Personhistorikk = {
      statsborgerskap: [],
      personstatuser: [],
      bostedsadresser: [],
      postadresser: [],
      midlertidigAdresser: []
  };

  return (
    <div className="App">
        <LeggTilStatsborgerskap leggTilStatsborgerskap={(sb: Statsborgerskap) => {personhistorikk.statsborgerskap.push(sb)}}/>
        <LeggTilPersonstatus leggTilPersonstatus={() => {}}/>
        <LeggTilAdresse leggTilAdresse={() => {}} typeAdresse={'bostedsadresse'}/>
        <LeggTilAdresse leggTilAdresse={() => {}} typeAdresse={'postadresse'}/>
        <LeggTilAdresse leggTilAdresse={() => {}} typeAdresse={'midlertidig adresse'}/>
        <OpprettOgSendRegelavklaring settEvaluering={settEvaluering} personhistorikk={personhistorikk} />
        <VisEvaluering evaluering={evaluering} />
    </div>
  );
};

export default App;
