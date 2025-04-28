'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c)  Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import path from 'path';

export default class Path {

    static get sep() {
        return path.sep;
    }

    static getServerPath() {
        return Path.root(false) + 'node_modules/@arikaim/server/dist/server.js';
    }

    static getRelative(absolutePath) {
        return absolutePath.replace(Path.root(),'');
    }

    static root(relative) {
        return (relative == true) ? path.sep : process.cwd() + path.sep;
    }

    static arikaim(relative) {
        return Path.root(relative) + 'arikaim' + path.sep;
    }

    static storage(relative) {
        return Path.arikaim(relative) + 'storage' + path.sep;
    }

    static publicStorage(relative) {
        return Path.storage(relative) + 'public' + path.sep;
    }

    static base(relative) {
        return Path.root(relative) + 'src' + path.sep;
    }

    static config(relative) {
        return Path.arikaim(relative) + 'config' + path.sep;
    }

    static view(relative) {
        return Path.arikaim(relative) + 'view' + path.sep; 
    }

    static templates(relative) {
        return Path.view(relative) + 'templates' + path.sep + 'nodejs' + path.sep; 
    }

    static libraries(relative) {
        return Path.view(relative) + 'library' + path.sep
    }

    static template(name, relative) {
        return Path.templates(relative) + name + path.sep;
    }

    static library(name, relative) {
        return Path.libraries(relative) + name + path.sep; 
    }

    static components(relative) {
        return Path.view(relative) + 'components' + path.sep; 
    }

    static services(relative) {
        return Path.arikaim(relative) + 'services' + path.sep;     
    }

    static service(name, relative) {
        return Path.services(relative) + name + path.sep;       
    }
    
    static dbModels(serviceName) {
        return Path.service(serviceName) + 'models' + path.sep;
    }

    static dbModel(serviceName, modelName) {
        return Path.dbModels(serviceName) + modelName + '.js';
    }

    static jobs(serviceName) {
        return Path.service(serviceName) + 'jobs' + path.sep;       
    }
}
