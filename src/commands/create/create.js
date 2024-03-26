'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { default as createProjectFolders } from "@arikaim/arikaim/commands/create/project.js";
import { default as createService } from "@arikaim/arikaim/commands/create/service.js";

const command = new Command();
var group = command.command('create');

group.addCommand(createProjectFolders);
group.addCommand(createService);

export default group;
