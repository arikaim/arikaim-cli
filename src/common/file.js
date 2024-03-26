'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c)  Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { readFileSync, existsSync, writeFileSync } from 'fs';


export class File {

    static readJSONFile(fileName) {
        var data = readFileSync(fileName,'utf8');   
        if (isJSON(data) == false) {
            return false;
        }
        return JSON.parse(data);
    }

    static writeJSONFile(fileName, data) {
        try {
            writeFileSync(fileName,JSON.stringify(data,null,2),'utf8');
            return existsSync(fileName);
        } catch (error) {
            console.error('An error has occurred creating config file',error);
        }
    }
}
