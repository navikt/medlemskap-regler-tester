export interface Evaluering {
    resultat: string;
    begrunnelse: string;
    beskrivelse: string;
    identifikator: string;
    operator: string;
    children: Evaluering[];
}
