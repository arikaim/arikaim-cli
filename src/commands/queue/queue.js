'use strict';
/**
 * Arikaim
 * 
 * @link        http://www.arikaim.com
 * @copyright   Copyright (c) Intersoft Ltd <info@arikaim.com>
 * @license     http://www.arikaim.com/license
*/

import { Command } from 'commander';
import startWroker from "@arikaim/cli/commands/queue/start.js";


const group = (new Command()).command('queue');

group.addCommand(startWroker);

export default group;
