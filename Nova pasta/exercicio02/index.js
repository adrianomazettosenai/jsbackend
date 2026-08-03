const { execSync } = require('child_process');

const nodeVersion = process.version;
const npmVersion = execSync('npm --version').toString().trim();

console.log('Node version:', nodeVersion);
console.log('NPM version:', npmVersion);
