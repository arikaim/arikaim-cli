'use strict';
/**
 * Arikaim Services
 *
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license.html
 * 
*/

import { loadConfig } from '@arikaim/server/system/config.js';
import db from '@arikaim/server/db/db.js';

export async function dbConnect() {
    var config = await loadConfig();
    await db.connect(config.database);
}