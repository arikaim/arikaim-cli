'use strict';
/**
 * Arikaim 
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import Path from '@arikaim/arikaim/common/path.js';
import { File } from '@arikaim/arikaim/common/file.js';

export default class ArikaimPackage {
  
    static loadPackageDescriptor(name, packageType) {
        var path;
        packageType = (isEmpty(packageType) == true) ? 'template' : packageType;

        switch (packageType) {
            case 'template':
                path = Path.template(name);
                break;
            case 'service':
                path = Path.service(name);
                break;
            case 'library':
                path = Path.library(name);
                break;           
        }

        try {
            return File.readJSONFile(path + 'arikaim-package.json');  
        } catch (error) {
            writeLn(error);
            return null;
        }
    }
}
