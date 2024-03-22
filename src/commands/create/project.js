'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { mkdirSync } from 'fs';
import Path from "@arikaim/arikaim/common/path.js";


function createFolder(path) {
    mkdirSync(path,{ recursive: true });
    writeLn('Created folder','green');
    writeLn(path);
}

function createProjectFolders(env,options) {
    // create config dir
    createFolder(Path.getConfigPath());
    // create view path
    createFolder(Path.viewPath);
    // create templates path
    createFolder(Path.templatesPath);
    // create libraries path
    createFolder(Path.librariesPath);
    // create sevices path
    createFolder(Path.getServicesPath());
    // create storage path
    createFolder(Path.storagePath);
    // create storage public path
    createFolder(Path.storagePublicPath);

    writeLn('Done\n','green');
}

export default new Command()
    .name('project')
    .description('Create project folders')
    .action(createProjectFolders);