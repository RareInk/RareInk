# RareInk

> Open Source for the RareInk SPA

## The Stack

- Angular 2+ (4.x)
- ExpressJS (4.x - with compression)
- Webpack (via `@angular/cli`)

## Concepts

- Redux (`@ngrx/store` - with server calls)
- [Smart & dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- AOT() Ahead-of-Time compilation)
- Advanced routing (lazy loading, router outlets...)

## Install / Development

```bash
# First, we'll have to clone the project.
git clone https://github.com/eryhM/RareInk.git
cd RareInk

# Install dependencies
npm install

# start server
npm start

# All good! Now open your browser.
# Client: http://localhost:4200
# Express API: http://localhost:4300
```

To improve the development experience, install the Redux DevTools Chrome extension:

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Build / Production

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
