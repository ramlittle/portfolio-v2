# portfolio-v2
my web portfolio version 2, created in plain js

# Vercel Runtime  deployment error fix (January 2, 2025)
details:
Errors received
Node.js Version "18.x" is discontinued and must be upgraded. Please set Node.js Version to 24.x in your Project Settings to use Node.js 24.

1. updated node version on my computer to 24, did not fix the error
2. tried to find the version switcher on vercel because all changes have been commited to git but it cannot be found. Perhaps vercel is trying to force users to upgrade to pro version to see the node version switcher
3. THE FIX: added package.json with this content, commited and push and it worked.
{
  "engines": {
    "node": "24.x"
  }
}
Note: Even though i am only using plain html, css, javascript on this project, vercel is looking for the package json file on the deployed project so, adding it worked.