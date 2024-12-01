
import { mkdirSync } from 'fs';
import Path from "@arikaim/cli/common/path.js";

export function createFolder(path) {
    mkdirSync(path,{ recursive: true });
    writeLn('Created folder','green');
    writeLn(Path.getRelative(path));
}