Commands to run playwright

install and check node.js from https://nodejs.org/ 
node -v
npm -v

In selected directory
npm init -y

npm install playwright

If only Chromium used:
npm install -D playwright-chromium

Install TypeScript & Types for Node.js
npm install -D typescript @types/node

npm install -D @playwright/test

Verify Installation
npx playwright --version

If all above installed properly, then run tests:
npx playwright test
