# Mapex

Mapex for "Mon Assistant Personnalisé cross plateforme" (My Personalized Assistant cross platform) is a Progressive Web Application (PWA) for interviewer work organisation. 

Mapex is built with [React](https://reactjs.org/). It was initialized with a custom template of Create React App : [PWA Template](https://www.npmjs.com/package/cra-template-pwa) and is designed thanks to [Material UI](https://material-ui.com/).

# Install 
Clone this project and navigate to the `mapex` directory

```bash
git clone git@github.com:ddecrulle/Mapex.git
cd mapex
 ```
You can then install dependencies using either Yarn or NPM
```bash
yarn install

or 

npm install
```

# Development
## Run
To run the project locally 
```bash
yarn start 

or 

npm run start
```
This will run the project and serve it locally at http://localhost:3000.

## Test
To run unit tests with jest

```bash
yarn test 

or 

npm run test
```
## Build

To build the app 

```bash
yarn build 

or 

npm run build
```

# Configuration

If you need, the configuration of the application can be modified in the public/configuration.json file 

```javascript
{
    "PEARL_API_URL": "https://pearljam-bo-demo.dev.insee.io",
    "_PEARL_API_URL_COMMENT_": "url of Pearl API"
}
    
```

# License
