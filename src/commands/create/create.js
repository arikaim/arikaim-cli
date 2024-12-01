'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { default as createProjectFolders } from "@arikaim/cli/commands/create/project.js";
import { default as createService } from "@arikaim/cli/commands/create/service.js";
import { default as createTemplate } from "@arikaim/cli/commands/create/template.js";

const command = new Command();
var group = command.command('create');

group.addCommand(createProjectFolders);
group.addCommand(createService);
group.addCommand(createTemplate);

export default group;
