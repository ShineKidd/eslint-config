import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

execSync('pnpm dlx bumpp', { stdio: 'inherit' });

execSync('pnpm changelog', { stdio: 'inherit' });

const pkg = fs.readFileSync(path.resolve(__dirname, '../package.json'), { encoding: 'utf-8' });
const { version } = JSON.parse(pkg);

execSync('git add .', { stdio: 'inherit' });
execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' });
execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' });
