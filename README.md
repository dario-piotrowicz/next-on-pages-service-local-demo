# next-on-pages Service bindings local demo

> [!WARNING]
> This demo is no longer relevant and has been superseded by:<br>
> https://github.com/dario-piotrowicz/next-on-pages-stable-next-dev-test-demo

The app contains a single route that shows the usage of a service binding in local mode.

## Steps to run the app

Install dependencies:
```
$ npm i
```

Then you need to run the worker in a terminal (so that it can be accessed from the next/next-on-pages app):
```
$ cd worker
$ npm run dev
```

Then in a separate terminal run the app using `next dev` (with [next-dev](https://github.com/cloudflare/next-on-pages/pull/486) implemented using Miniflare's magic proxy):
```
$ cd next-app
$ npm run dev
```

To instead run the application using `wrangler`, start by building the worker:
```
$ cd next-app
$ npm run pages:build
```
(or `pages:build:watch` for building in watch mode)
and then run:
```
$ npm run pages:dev
```
