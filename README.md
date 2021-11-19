# Linkshare

A web app created using React framework. It's main purpose is to share interesting links with other users. All of the entries are tagged with keywords so you can easilly filter them by selecting the most trending or simply by searching.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and modified by TSH team.

## Installation

1. Clone the repository

    ```
    git clone https://bitbucket.org/thesoftwarehouse/bc-linkshare-damian-zapalski.git
    ```

2. Copy `.env.dist` file to `.env` and ajdust settings inside the file

    ```
    cp .env.dist .env 
    ```

3. Install dependencies

    ```
    npm install
    ```

You're all set!


## Running the project

```
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Running the tests

```
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Environment Variables

These are the variables that can be passed via `.env` file or directly via environment variables:
    
    
* `REACT_APP_API_URL` - The URL address to contact the API (e.g. http://example.com/api)
* `REACT_APP_DEFAULT_LOCALE` - Default app language


### Building the app

```
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.