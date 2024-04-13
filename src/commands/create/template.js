'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { writeFileSync } from 'fs';
import Path from "@arikaim/arikaim/common/path.js";
import { createFolder } from "@arikaim/arikaim/common/console.js";
import { renderTemplate, requireText } from "@arikaim/arikaim/common/template.js";


function writeTemplateCssFile(fileName, templateName) {
    var includeIcss = requireText('@arikaim/arikaim/templates/template/' + fileName,require);
    writeFileSync(Path.template(templateName) + 'css' + Path.sep + fileName,includeIcss,'utf8');
}

function createService(args,options) {
    var name = args;

    writeLn('Create template','green');
    writeLn(name);

    createFolder(Path.template(name));
    createFolder(Path.template(name) + 'components');
    createFolder(Path.template(name) + 'css');
    createFolder(Path.template(name) + 'pages');
    createFolder(Path.template(name) + 'themes');
    createFolder(Path.template(name) + 'images');

    var code = renderTemplate('@arikaim/arikaim/templates/template/arikaim-package.json',{
        name: name,
        title: 'Template'
    });
    writeFileSync(Path.template(name) + 'arikaim-package.json',code,'utf8');
    // css files
    writeTemplateCssFile('include.css',name);
    writeTemplateCssFile('style.css',name);
    writeTemplateCssFile('preflight.css',name);
    // index.html
    var indexHtml = requireText('@arikaim/arikaim/templates/template/index.html.txt',require);
    writeFileSync(Path.template(name) + 'pages' + Path.sep + 'index.html',indexHtml,'utf8');
}

export default new Command()
    .name('template')
    .description('Create template')
    .argument('name','Template name')
    .action(createService);
