
export interface Command {
    id: string;
    command: string;
    description_ru: string;
    description_ua: string;
    operator_id: string;
}

export interface Operator {
    id: string;
    name: string;
    description_en: string;
    description_ua: string;
    description_ru: string;
    updated: string;
    commands: Command[];
}

export interface ResponeOperators {
    success: number;
    operators: Operator[];
}