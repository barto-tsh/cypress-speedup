#!/usr/bin/env zx
import { $, argv, chalk } from 'zx';

import { watch } from 'chokidar';

const CY_INTEGRATION_DIR = argv['tests-dir'] ?? `./cypress/integration`;
const TEST_FILES_PATTERN = argv['files-pattern'] ?? '.*?(?=\.spec).*?\.ts';
let isRunning = false;

const wrapTopLevelAwait = async (fn: (...args: unknown[]) => unknown, ...args: unknown[]) => {
  await fn(...args);
};

const runTests = async (_specs: string[]) => {
  if (isRunning) return;

  isRunning = true;
  try {
    await $`cypress run --spec ${_specs.join(',')} --headless --browser chrome`;
  } catch (e) {
  }
  isRunning = false;
};

const getChangedSpecs = async () => {
  console.log(chalk.bgYellow(`\nChecking for changed specs...`));
  $.verbose = false;
  const changedFiles = await $`git diff --name-only HEAD`;
  $.verbose = true;
  const onlySpecFiles = changedFiles.stdout
    .split('\n')
    .filter(file => file.match(TEST_FILES_PATTERN))
    .map(file => `./${file}`);
  if (onlySpecFiles.length > 0) {
    return onlySpecFiles;
  } else {
    console.log(`\nNo changes found in *.spec.ts since last commit`);
    return [];
  }
};

let watcher = watch(CY_INTEGRATION_DIR, { persistent: true });
const getChangedFilesAndRunTest = async () => {
  if (isRunning) return;

  const specs = await getChangedSpecs();
  if (specs.length > 0) {
    console.log(chalk.bgGreen('Running tests for:'));
    console.log(JSON.stringify(specs, null, 2));
    await runTests(specs);
  }
  console.log(chalk.bgCyan(`\nWatching for changes...`));
};

watcher.on(`change`, async () => await getChangedFilesAndRunTest());

wrapTopLevelAwait(getChangedFilesAndRunTest);

console.log(chalk.bgCyan(`\nWatching for changes...`));
