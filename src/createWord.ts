import * as yaml from 'yaml';
import * as fs from 'fs';
import * as path from 'path';
import { Entry, PartsOfSpeech } from './Entry';
import { arrayConvert } from './arrayConvert';

export function createWord(entry:string,hanji:string='',part:string='n',force?:boolean){
    let word:Entry = {entry,defs:[]};
    let filename = path.join('.','entries',entry+'.yaml');
    if((!force)&&fs.existsSync(filename)){
        word = yaml.parse(fs.readFileSync(filename).toString());
    }
    if(word.defs instanceof Array){
        word.defs.push({
            hanji:arrayConvert(hanji.split(',')),
            translation:'',
            part:arrayConvert(part.split(',') as PartsOfSpeech[]),
        });
    }else{
        word.defs = [word.defs];
        word.defs.push({
            hanji:arrayConvert(hanji.split(',')),
            translation:'',
            part:arrayConvert(part.split(',') as PartsOfSpeech[]),
        });
    }
    word.defs = arrayConvert(word.defs);
    fs.writeFileSync(filename,yaml.stringify(word));
}

let force:boolean = false;
if(process.argv[process.argv.length-1]=='--force'){
    process.argv.pop();
    force=true;
}
createWord(process.argv[2],process.argv[3],process.argv[4],force);