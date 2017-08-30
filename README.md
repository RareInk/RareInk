# RareInk

> Open Source for the RareInk SPA

## The Stack

- [Angular](https://angular.io/) (4.x)
- [Express](https://expressjs.com/) (4.x - with compression)
- [Webpack](https://webpack.js.org/) (via `@angular/cli`)

## Concepts

- Redux (`@ngrx/store` - with server calls)
- [Smart & dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- AOT (Ahead-of-Time compilation)
- Advanced routing (lazy loading, router outlets, etc.)

## Install/Development

```bash
# First, we'll have to clone the project.
git clone https://github.com/eryhM/RareInk.git
cd RareInk

# Generate your secret key in the config file.
cp .env.example .env

# Install dependencies & perform initial build.
# NOTE: This command will fail if you haven't generated the config file above.
npm install

# start server
npm start

# All good! Now open your browser.
# Client: http://localhost:4200
# Express API: http://localhost:4300
```

Don't forget to update your `.env` file and update the `APP_SECRET` variable! Run the `node` command-line and generate a secret key, for example:

```js
require('crypto').randomBytes(64, (err, buf) => { console.log(buf.toString('base64')) });
```

## Other Tools

To improve the development experience, install the Redux DevTools Chrome extension:

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Build/Production

```bash
# Run this to compile the server and client
npm run build

# Once finished deploy the `dist/` folder to your app server.
#
# Folder structure:
#
# `/dist/server` <-- Express backend
# `/dist/client` <-- Angular client

```
