## Install Node

Needs to use the version of Node specified under "image" in .gitlab-ci.yml and in the .nvmrc file (the two should be the same value).

You can either download it directly from the Node website (https://nodejs.org/en/download/releases/), via your OS software manager, or use NVM to install it (https://github.com/nvm-sh/nvm).

## Install dependencies

```node
npm ci
```

## Add Browserstack account details

Add Browserstack user and key details at the bottom of the wdio.conf.js file


## Run test

Run test by using command 'npm run wdio'