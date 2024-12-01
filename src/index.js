'use strict';

import { cli } from '@arikaim/cli/cli.js'

cli.parse();

if (process.argv.length < 3) {
    cli.help()
}
