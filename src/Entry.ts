export type PartsOfSpeech = 'n'|'pron'|'proper-n'|'num'|'v'|'prep'|'adj'|'adv'|'det'|'aux'|'pre'|'suf'

export interface Def{
    part: PartsOfSpeech[]|PartsOfSpeech;
    translation: string[]|string;
    hanji?: string[]|string;
    example?: string[]|string;
    note?: string[]|string;
}
export interface Entry{
    entry: string;
    defs: Def|(Def[]);
}