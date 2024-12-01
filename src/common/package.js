'use strict';
/**
 * Arikaim 
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import Path from '@arikaim/cli/common/path.js';
import { File } from '@arikaim/cli/common/file.js';
import { readdirSync,statSync } from 'fs';

export default class ArikaimPackage {
  
    static getPackagePath(name, packageType) {
        packageType = (isEmpty(packageType) == true) ? 'template' : packageType;
        switch (packageType) {
            case 'template':
                return Path.template(name);
              
            case 'service':
                return Path.service(name);
               
            case 'library':
                return Path.library(name);  
        }

        return null;
    }

    static readPackageFiles(name, path, packageType) {
        var packagePath = ArikaimPackage.getPackagePath(name,packageType);
        if (packagePath == null) {
            return null;
        }

        packagePath = packagePath + path + Path.sep;

        var files = readdirSync(packagePath).filter(function (file) {
            return (statSync(packagePath + file).isDirectory() == false);
        });

        return files;
    }
    
    static loadPackageDescriptor(name, packageType) {
        var path = ArikaimPackage.getPackagePath(name,packageType);

        try {
            return File.readJSONFile(path + 'arikaim-package.json');  
        } catch (error) {
            writeLn(error);
            return null;
        }
    }

    static writePackageDescriptor(name, data, packageType) {
        var path = ArikaimPackage.getPackagePath(name,packageType);
        
        try {
            return File.writeJSONFile(path + 'arikaim-package.json',data);  
        } catch (error) {
            writeLn(error);
            return false;
        }

    }
}
