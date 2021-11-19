#!/usr/bin/env zx

import chokidar from 'chokidar';

const CY_INTEGRATION_DIR = `./cypress/integration`;
let isRunning = false;

const runTests = async (_specs) => {
  if (isRunning) return;

  isRunning = true;
  try {
    await $`cypress run --spec ${_specs.join(',')} --headless --browser chrome`;
  } catch (e) {
  }
  isRunning = false;
};

const getChangedSpecs = async () => {
  console.log(`\nChecking for changed specs...`);
  const changedFiles = await $`git diff --name-only HEAD`;
  const onlySpecFiles = changedFiles.stdout
    .split('\n')
    .filter(file => file.match(`.*?(?=\\.spec).*?\\.ts`))
    .map(file => `./${file}`);
  if (onlySpecFiles.length > 0) {
    return onlySpecFiles;
  } else {
    console.log(`\nno changes found in *.spec.ts since last commit`);
    return [];
  }
};

let specs = await getChangedSpecs();
let watcher = chokidar.watch(CY_INTEGRATION_DIR, { persistent: true });

const getChangedFilesAndRunTest = async () => {
  if (isRunning) return;

  specs = await getChangedSpecs();
  if (specs.length > 0) {
    console.log(`Running tests for: ${JSON.stringify(specs, null, 2)}`);
    await runTests(specs);
  }
  console.log(`\nWatching for changes...`);
};

watcher.on(`change`, async () => await getChangedFilesAndRunTest());

if (specs.length > 0) {
  await runTests(specs);
}

console.log(`\nWatching for changes...`);
