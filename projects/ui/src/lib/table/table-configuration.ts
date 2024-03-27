import { Customer } from "./customer";

export interface TableConfiguration {
    columns : string[],
    rows : Customer[];
}