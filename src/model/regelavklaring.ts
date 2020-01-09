export interface Regelavklaring {
    soknadsperiode: Periode;
    soknadstidspunkt: string;   // Format dd-MM-yyyy
    personhistorikk: Personhistorikk;
}

export interface Periode {
    fom: string;    // Format dd-MM-yyyy
    tom: string;    // Format dd-MM-yyyy
}

export interface Personhistorikk {
    statsborgerskap: Statsborgerskap[];
    personstatuser: Personstatus[];
    bostedsadresser: Adresse[];
    postadresser: Adresse[];
    midlertidigAdresser: Adresse[];
}

export interface Statsborgerskap {
    landkode: string;
    fom?: string;    // Format dd-MM-yyyy
    tom?: string;    // Format dd-MM-yyyy
}

export interface Personstatus {
    personstatus: string;
    fom?: string;    // Format dd-MM-yyyy
    tom?: string;    // Format dd-MM-yyyy
}

export interface Adresse {
    adresselinje: string;
    landkode: string;
    fom?: string;    // Format dd-MM-yyyy
    tom?: string;    // Format dd-MM-yyyy
}
