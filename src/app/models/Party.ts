import { Nutzer } from "./Nutzer";

export interface Party{
    id?:string;
    name:string;
    tag:string;
    ort:string;
    zukunft:boolean;
    beschreibung:string;
    teilnehmer: Nutzer[];
}