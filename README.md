
# Mapex

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<p align="center">
 <img src="https://user-images.githubusercontent.com/81740200/130244487-7d6e22a0-d016-42a2-85ec-041cf4fa59bf.png" />
</p>

Mapex for "Mon Assistant Personnalisé cross plateforme" (My Personalized Assistant cross platform) is a Progressive Web Application (PWA) for interviewer work organisation.

Mapex is built with [React](https://reactjs.org/). It was initialized with a custom template of Create React App : [PWA Template](https://www.npmjs.com/package/cra-template-pwa) and is designed thanks to [Material UI](https://material-ui.com/).

[Storybook](https://inseefrlab.github.io/Mapex/) is available online.

# Getting started

Clone this project and navigate to the `mapex` directory

```bash
git clone git@github.com:ddecrulle/Mapex.git
cd mapex
```

You can then install dependencies using either Yarn or NPM

```bash
yarn

or

npm install
```

## Environment values

The projet contains 2 environment values. The first is the url of the back-end : [Pearl](https://github.com/InseeFr/Pearl-Jam-Back-Office)

The second is a Google API Key. We use Google Geolocation API to get the latitude and longitude with the adress.

In development mode, you can create a file `.env.development.local` and add values like in the `.env` file.

## Scripts

### Development

To run the project locally

```bash
yarn start
```

Project will be served locally at http://localhost:3000.

### Test

To run unit tests with jest

```bash
yarn test
```

### Build

To build the app

```bash
yarn build
```

### Storybook

To run the storybook locally

```bash
yarn storybook
```
