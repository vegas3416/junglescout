# picasso-react

**picasso-react** is a starter project built by Design Technology (#design-tech-help) as a base project for creating prototypes that incorporates tools built in our [picasso framework](https://code.corp.indeed.com/design-tech/picasso).

This boilerplate includes:
* React 16
* Webpack 4
* Babel
* Sass
* design-tech-tools (publish, deverserver)
* eslint-plugin-indeed
* ICL 10

## Requirements

You’ll need to have **Node >= 6** on your local development machine to run the app. Recommendation is to install [NVM](https://github.com/creationix/nvm) on your machine to manage different versions of node.


## Installation

### Quick start

```sh
npm install
```

Running `npm install` is required when you first bootstrap the app or any time there are updates to the package.json file.


### App configuration

Before you can publish your app, you will need to register your app in [Picasso](https://picasso.sandbox.qa.indeed.net/). Registered apps on **Picasso** allows for prototypes to be deployed to S3 using the picasso publish endpoints and can be accessible either on QA ([design-tech.sandbox.qa.indeed.net](https://design-tech.sandbox.qa.indeed.net/)) or production ([prototypes.indeed.com](https://prototypes.indeed.com/)).

Registered apps will have a **Project ID** generated for the app. The Project ID will be added to your project's `package.json` file under `"dtpublish": { ... }`.

package.json example:
```json
// rest of package.json
...
"dtpublish": {
    "distPath": "dist",
    "publishBranch": "master",
    "projectId": {
        "qa": "QA_PROJECT_ID",
        "prod": "PROD_PROJECT_ID"
    }
}
```

## Usage

### Run your project

```sh
npm start
```
http://localhost:8080/ should open automatically for you after running the script.  This uses default `webpack-dev-server` with hot reloading.


### Run your project with a proxy

```sh
npm run start:proxy
```
http://localhost:3001/ should open automatically for you after running `npm run start:proxy`.  Your project will run using `dtdevserver`, which is a custom built replacement for webpack-dev-server which includes proxies for common Indeed APIs. Hot reloading does not work in this mode.


### Publish your project

Run one of the following commands to publish the files in your dist folder to the CDN for distribution by design-tech servers.

```sh
npm run upload:qa
```
Internal: https://design-tech.sandbox.qa.indeed.net/apps/PROJECT_ID/

```sh
npm run upload:prod
```
Public: https://prototypes.indeed.com/app/PROJECT_ID/

To make your public link accessible, you will need to set your _Production_ project **Access** to **Public** and generate a login token on our [Picasso Login Tokens Page](https://picasso.sandbox.indeed.net/authtokens).

