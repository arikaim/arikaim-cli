'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c)  Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { readFileSync } from 'fs';
import Mustache from 'mustache';


export function loadTemplate(fileName, vars) {
    var templateCode = readFileSync(fileName,'utf8');   

    return renderTemplate(templateCode,vars);
}

export function renderTemplate(templateCode, vars) {
    return Mustache.render(templateCode,vars);
}