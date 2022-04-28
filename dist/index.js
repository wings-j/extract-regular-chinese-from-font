#!/usr/bin/env node
import { promises as Fs } from 'fs';
import Path from 'path';
import SubsetFont from 'subset-font';
const cwd = process.cwd();
const filename = process.argv[1];
const input = process.argv[2];
const output = process.argv[3];
if (input && output) {
    let regular = await Fs.readFile(Path.resolve(filename, '../../data/regular.txt'), 'utf-8');
    let source = Buffer.from(await Fs.readFile(Path.resolve(cwd, input)));
    let result = await SubsetFont(source, regular, {
        targetFormat: 'sfnt'
    });
    await Fs.writeFile(Path.resolve(cwd, output), result);
}
else {
    console.error('Parameters "input" or "output" missing');
}
