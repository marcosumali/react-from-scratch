## React From Scratch
This is a proof of concept demonstrating web application using react from scratch and not using react CLI. 

### Published Website
[Tplaza.apps.com](https://tplaza-apps.firebaseapp.com/)

### Tech Stack
1. Front-end:
   * Single Page Framework: React JS using Webpack
   * State Management: Redux-Saga
   * UI Framework: Bootstrap
   * Alerts: Sweetalert2
   
2. Back-end:
   * Database: Google Firestore Realtime Database
   * Hosting: Firebase Hosting

### Steps To Replicate
1. Create a new folder and initiate an npm to create a package file.
```
npm init
```
2. Install required and/or optional development dependencies:
   * Required packages for webpack applications:
     - webpack: module bundler
     - webpack-cli: provides flexible commands for webpack configuration
     - webpack-dev-server: provides live reloading for development
     - babel-core: babel core transpiler to convert files to compatible with older version Javascripts
     - babel-polyfill: provides necessary for a full ES2015+ environment
     - babel-preset-env: babel preset for each environment
     - babel-preset-react: babel preset for all React plugins
     - babel-loader: allows transpiling JavaScript files using Babel and webpack
   * Necessary webpack loaders and plugins:
     - css-loader: loads CSS file with resolved imports and returns CSS code
     - style-loader: add exports of a module as style to DOM
     - file-loader: emits the file into the output folder and returns the (relative) URL
     - url-loader: works like the file loader, but can return a data URL if the file is smaller than a limit
     - html-webpack-plugin: simplifies creation of HTML files to serve your bundles
     - clean-webpack-plugin: to remove/clean your build folder(s)
   * Optional webpack loaders and plugins:
     - mini-css-extract-plugin: extracts CSS into separate files and creates a CSS file per JS file which contains CSS
     - terser-webpack-plugin: minify javascript for production optimization
     - optimize-css-assets-webpack-plugin: minify css for production optimization
3. Install required and/or optional (production and development) dependencies:
   * Required packages for react JS and redux:
     - react: JS library for user interface in React JS
     - react-dom: entry point to the DOM and server renderers for React
     - react-router-dom: routing management
     - redux: state management
     - react-redux
     - redux-thunk / redux-saga
   * Necessary packages for this application:
     - libphonenumber-js: google library for validating and formating phone number
     - firebase
     - react-redux-firebase
     - redux-firestore
     - redux-saga-firebase
     - sweetalert2
4. Create gitignore file to ignore node modules, production folder and env files
5. Create webpack configuration file and provide the following configuration:
   * entry point
   * ouput path and filename
   * plugins
   * resolve extensions for JSX files
   * define rules for modules and loaders
   * optimizations (if necessary)
6. Update script tag on package JSON file for start and build
```
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  },
```
7. Create src folder for our source entry point
8. Inside the src folder, create the following file:
   * index.html: need to provide an element with id of 'App'
   * index.js: create the react render DOM and link it with index html DOM
   * App.js: create the first react application component


