import { execSync } from 'child_process';
import pkg from '../package.json';

let command = 'pnpm publish --git-checks false';
if (pkg.version.includes('beta')) {
  command += ' --tag beta';
}

execSync(command, { stdio: 'inherit' });
