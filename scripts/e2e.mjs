#!/usr/bin/env zx

import fs from 'fs';

let isRunning = false;

const runTests = async (_specs) => await $`cypress run --spec ${_specs.join(',')} --headless --browser chrome`;

const getChangedSpecs = async () => {
  const changedFiles = await $`git diff --name-only HEAD`;
  return changedFiles.stdout
    .split('\n')
    .filter(file => file.match('.*?(?=\\.spec).*?\\.ts'))
    .map(file => `./${file}`);
};

let specs = await getChangedSpecs();
let watchers = [];

const getChangedFilesAndRunTest = async () => {
  specs = await getChangedSpecs();
  console.log(`Running tests for ${JSON.stringify(specs, null, 2)}`);
  if (!isRunning) {
    isRunning = true;
    await runTests(specs);
    isRunning = false;
  }
  watchers.forEach(watcher => watcher.close());
  watchers = [];
  for (const spec of specs) {
    watchers.push(fs.watch(spec, async () => await getChangedFilesAndRunTest()));
  }
  console.log(`Watching for changes...`);
};

if (specs.length > 0) {
  await getChangedFilesAndRunTest();
}


