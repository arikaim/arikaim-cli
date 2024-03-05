'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import { default as compileEmail } from "@arikaim/arikaim/commands/email/compile-mjml.js";

const command = new Command();
var group = command.command('email');

group.addCommand(compileEmail);

export default group;
