'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { default as createConfig } from "@arikaim/arikaim/commands/config/create.js";

const command = new Command();
var group = command.command('config');

group.addCommand(createConfig);

export default group;
