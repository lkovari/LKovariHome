import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const ng = join(root, 'node_modules/@angular/cli/bin/ng.js');

if (!existsSync(ng)) {
  console.error('Angular CLI not found. Run pnpm install first.');
  process.exit(1);
}

const coreMigrations = [
  'change-detection-eager',
  'http-xhr-backend',
  'strict-templates-default',
  'can-match-snapshot-required',
  'incremental-hydration',
  'strict-safe-navigation-narrow',
  'model-output',
  'safe-optional-chaining',
];

const cliMigrations = [
  'add-istanbul-instrumenter',
  'update-workspace-config',
];

function runMigration(packageName, migrationName) {
  const args = ['update', `${packageName}@22`, '--name', migrationName, '--allow-dirty'];
  console.log(`\n> node ${ng} ${args.join(' ')}\n`);

  const result = spawnSync(process.execPath, [ng, ...args], {
    cwd: root,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

for (const name of coreMigrations) {
  runMigration('@angular/core', name);
}

for (const name of cliMigrations) {
  runMigration('@angular/cli', name);
}

console.log('\nAll Angular v22 migrations completed.\n');
