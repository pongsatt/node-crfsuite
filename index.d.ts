export interface Tagger {
    tag(xseq: Array<string[]>): string[];
    open(model_filename: string): boolean;
}
export interface Options {
    [key: string]: string;
}
export interface Trainer {
    append(xseq: Array<string[]>, yseq: string[]): void;
    train(model_filename: string): void;
    SetParams(options: Options): void;
}

export declare const Trainer: () => Trainer;
export declare const Tagger: () => Tagger;
