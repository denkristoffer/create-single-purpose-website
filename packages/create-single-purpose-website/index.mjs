#!/usr/bin/env node

import { spawn } from "node:child_process";

async function main() {
  spawn(
    "npx",
    [
      "create-next-app",
      "--example",
      "https://github.com/denkristoffer/create-single-purpose-website/tree/main/packages/single-purpose-website-template",
    ],
    { stdio: ["inherit", "inherit", "inherit"] }
  );
}

main();
