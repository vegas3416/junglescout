# picasso-react

**picasso-react** is a starter project built by Design Technology (#design-tech-help) as a base project for creating prototypes that incorporates tools built in our [picasso framework](https://code.corp.indeed.com/design-tech/picasso).

This boilerplate includes:

- React 16
- Webpack 4
- Babel
- Sass
- design-tech-tools (publish, deverserver)
- eslint-plugin-indeed
- ICL 10

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

## Call Outs

-Check back later but I think there should be a little better consistency on how they are laid out. Some variances on where the button lies within the view found from analytics to candidates.

- Tile configuration needs some re-work for how it looks when going down to smaller screens (not a necessity at the moment but for future development)
