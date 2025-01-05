/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import mjml2html from 'mjml'
import { Command } from 'commander';
import path from 'path';
import { readFileSync, existsSync, writeFileSync } from 'fs';

async function compileEmail(env,options) {
    writeLn('\Complie mjml file \n');
    var fileName = process.cwd().split("/").slice(-1);
    var currentPath = process.cwd() + path.sep
    var inputFile = fileName[0] + '.mjml';
    var outputFile = fileName[0] + '.html';

    writeLn('Path: ' + currentPath);
    writeLn('Input file: ' + inputFile);

    if (existsSync(currentPath + inputFile) == false) {
        writeLn('Input file not exist','red');
        return false;
    }
  
    try {
        const data = readFileSync(currentPath + inputFile,"utf-8");
        const output = await mjml2html(data);
    
        writeFileSync(currentPath + outputFile,output.html,'utf8');
    } catch (err) {
        writeLn(err,'red');
        return false;
    }
  
    writeLn('Outtput file: ' + outputFile);
    writeLn('\nSuccessfully\n','green');
}


export default new Command()
    .name('compile')
    .description('Compile mjml email code')
    .action(compileEmail);
