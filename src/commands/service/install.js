'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import Migration from "@arikaim/server/db/migration.js";
import ArikaimPackage from "@arikaim/arikaim/common/package.js";
import Path from "@arikaim/arikaim/common/path.js";
import { dbConnect } from "@arikaim/arikaim/common/db.js";


async function installService(args, options) {
    writeLn('Install service','green');   
    writeLn(args);

    await dbConnect();

    var modelFiles = ArikaimPackage.readPackageFiles(args,'models','service');
    var path = Path.dbModels(args);
    writeLn('Install Migrations','blue');   

    modelFiles.forEach((item) => {       
        writeLn('File ' + path + item);   
        var migration = Migration.createFormFile(path + item,sequelize);
        migration.up();
    });

}

export default new Command()
    .name('install')
    .argument('name','Service name')
    .description('Install service')
    .action(installService);
