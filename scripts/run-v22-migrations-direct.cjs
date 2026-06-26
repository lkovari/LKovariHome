const { normalize, virtualFs } = require('@angular-devkit/core');
const { NodeJsSyncHost } = require('@angular-devkit/core/node');
const { HostTree } = require('@angular-devkit/schematics');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

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

function createTree() {
  const host = new virtualFs.ScopedHost(new NodeJsSyncHost(), normalize(root));
  return new HostTree(host);
}

function createContext(name) {
  const logger = {
    info: () => undefined,
    warn: () => undefined,
    error: console.error,
    debug: () => undefined,
    createChild: () => logger,
  };

  return {
    logger,
    schematic: {
      description: name,
      collection: { name: 'migrations' },
    },
  };
}

function persistTree(tree) {
  for (const action of tree.actions) {
    const relativePath = action.path.replace(/^\//, '');
    const fullPath = path.join(root, relativePath);

    if (action.kind === 'o' || action.kind === 'c') {
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, action.content);
      continue;
    }

    if (action.kind === 'd' && fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }
}

async function runCoreMigration(tree, name) {
  console.log(`\n> Running @angular/core:${name}\n`);
  const { migrate } = require(path.join(
    root,
    'node_modules/@angular/core/schematics/bundles',
    `${name}.cjs`,
  ));
  const rule = migrate({});
  await rule(tree, createContext(name));
}

async function runCliMigration(tree, name) {
  console.log(`\n> Running @angular/cli:${name}\n`);
  const factory = require(path.join(
    root,
    'node_modules/@schematics/angular/migrations',
    name,
    'migration.js',
  )).default;
  const rule = factory();
  await rule(tree, createContext(name));
}

async function main() {
  const tree = createTree();

  for (const name of coreMigrations) {
    await runCoreMigration(tree, name);
  }

  for (const name of cliMigrations) {
    await runCliMigration(tree, name);
  }

  persistTree(tree);
  console.log(`\nAll Angular v22 migrations completed (${tree.actions.length} file updates).\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
