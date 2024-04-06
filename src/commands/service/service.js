'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { default as enableService } from "@arikaim/arikaim/commands/service/enable.js";
import { default as disableService } from "@arikaim/arikaim/commands/service/disable.js";
import { default as installService } from "@arikaim/arikaim/commands/service/install.js";

const group = (new Command()).command('service');

group.addCommand(enableService);
group.addCommand(disableService);
group.addCommand(installService);

export default group;
