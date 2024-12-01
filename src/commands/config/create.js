'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { default as Path } from "@arikaim/cli/common/path.js";
import { renderTemplate } from "@arikaim/cli/common/template.js";
import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { Command } from 'commander';

var template = require('@arikaim/cli/templates/config.json');

function createConfig(env,options) {
   
    var fileName = Path.config(fileName) + 'services-config.json';
    if (existsSync(fileName) == true) {
        console.error('Config file exists: \n' + fileName);
        return false;
    } 
    
    // create dir
    mkdirSync(Path.config(),{ recursive: true });

    var json = renderTemplate(JSON.stringify(template,null,2),{
        host: '127.0.0.0',
        port: 3000
    });

    try {
        writeFileSync(fileName,json,{ flag: 'w+' });

        writeLn('Config file created','green');
        writeLn(fileName);

        return existsSync(fileName);

    } catch (error) {
        console.error('An error has occurred creating config file',error);
    }
}

export default new Command()
    .name('create')
    .description('Create default config file')
    .action(createConfig);
