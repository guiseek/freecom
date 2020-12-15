# Freecom

### Clone

`git clone https://github.com/guiseek/freecom.git`

### Open

`code freecom/freecom.code-workspace`

### Install

`npm install`

### Run

`npm start`

### Structure

```sh
# Samples
apps
└── docs
    └── samples
        ├── peer-client
        ├── peer-client-e2e
        └── signaling
```

```sh
# Libraries
libs
├── peer
│   ├── client # Client side
│   ├── Core   # Common
│   └── player # Client side
└── signaling  # Server side
```

### Stack

|                                                                               |                                                                           |                                                                             |                                                                             |                                                                          |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Angular](apps/docs/samples/peer-client/src/assets/images/logos/angular.svg) | ![NestJS](apps/docs/samples/peer-client/src/assets/images/logos/nest.svg) | ![TypeScript](apps/docs/samples/peer-client/src/assets/images/logos/ts.svg) | ![JavaScript](apps/docs/samples/peer-client/src/assets/images/logos/js.svg) | ![HTML5](apps/docs/samples/peer-client/src/assets/images/logos/html.svg) |

---

## Flow

![Flow](apps/docs/samples/peer-client/src/assets/images/diagrams/flow.svg)

---

## Playbook apps & libs

```sh
# Core
nx generate @nrwl/workspace:library --name=core --directory=peer --importPath=@freecom/peer-core

# PeerClient
nx generate @nrwl/angular:library --name=client --style=scss --directory=peer --buildable --importPath=@freecom/peer-client --linter=eslint --prefix=peer --publishable --tags=side:client,type:feature --no-interactive

# PeerClient, docs & samples
nx generate @nrwl/angular:application --name=peer-client --style=scss --directory=docs/samples --linter=eslint --prefix=sample --routing --tags=side:client,type:app --no-interactive

# Signaling
nx generate @nrwl/nest:library --name=signaling --buildable --importPath=@freecom/signaling --publishable --tags=side:server,type:feature --target=es2019 --no-interactive

# Signaling, docs & samples
nx generate @nrwl/nest:application --name=signaling --directory=docs/samples --frontendProject=docs-samples-peer-client --tags=side:server,type:app --no-interactive

# Player
nx generate @nrwl/angular:library --name=player --style=scss --directory=peer --buildable --importPath=@freecom/peer-player --linter=eslint --prefix=peer --publishable --tags=side:client,type:feature,scope:peer --no-interactive

# API Gateway
nx generate @nrwl/nest:application --name=gateway --directory=api --tags=side:server,type:app,scope:api --no-interactive

## Api Gateway User
nx generate @nestjs/schematics:resource --name=users --sourceRoot=apps/api/gateway/src --type=ws --no-interactive

### Class validator & class transformer
npm i --save class-validator class-transformer

### NestJS Config
npm i --save @nestjs/config

### NestJS Mapped types
npm i --save @nestjs/mapped-types

### Mongoose
npm install --save @nestjs/mongoose mongoose
```

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@freecom/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
