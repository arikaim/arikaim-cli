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


export function renderTemplate(fileName, vars) {
    var templateCode = require(fileName);   

    if (isObject(templateCode) == true) {
        templateCode = JSON.stringify(templateCode,null,'\t');
    }

    return renderCode(templateCode,vars);
}

export function renderCode(templateCode, vars) {
    return Mustache.render(templateCode,vars);
}

export function requireText(name, require) {
    return readFileSync(require.resolve(name)).toString();
};