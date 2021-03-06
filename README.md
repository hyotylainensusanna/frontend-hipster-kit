# frontend-hipster-kit

This is a React Template to get you up and running with the following
stack quickly:

### Tech stack (React)

* [react](https://facebook.github.io/react/), component based UI library
* [react-router v4](https://github.com/ReactTraining/react-router/tree/v4), keep UI in sync with the URL
* [material-ui](http://www.material-ui.com/), React components that implement Google's Material Design
* [react-intl](https://github.com/yahoo/react-intl), internationalisation support

### Tech stack (Redux)

* [redux](http://redux.js.org/), predictable container for app state
* [redux-thunk](https://github.com/gaearon/redux-thunk), async support for redux actions
* [redux-api](https://github.com/lexich/redux-api), store REST API responses and status in redux
* [redux-act](https://github.com/pauldijou/redux-act), use actions themselves as references inside reducers

### Tech stack (misc)

* [offline-plugin](https://github.com/NekR/offline-plugin), cache webpack output assets clientside
* [lodash](https://lodash.com/), various useful JavaScript utils

### Tools

* [babel](https://babeljs.io/), transpile ES6 and React's JSX syntax into ES5
* [webpack v2](https://webpack.github.io/), bundle everything together
* [eslint](http://eslint.org/), make sure your code is remotely sane (**TODO: rules**)
* [jest](https://facebook.github.io/jest/), painless JavaScript testing

### TODO

* Sync redux store with browser history
* Changing languages
* Redirect non-existing routes to /
* Do not restore redux-api store state

## Setup

[yarn](https://github.com/yarnpkg/yarn) 0.18+ must be present on your machine.

### Install dependencies
```
yarn
```

### Start

Run webpack-dev-server, get ready to code with hot reloading
```
yarn start
```

## Share

Share your localhost running app to anyone with an internet connection
```
yarn ngrok
```

### Build

Bundle your app. It will create `index.html`, `main.[hash].js`, `vendor.[hash].js` and `manifest.[hash].js`
```
yarn build
```

### Run your build
```
yarn prod
```

### Deploy

#### [Surge.sh](http://surge.sh)
```
surge ./dist -d subdomain.surge.sh
```

#### [Github Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
```
mv dist docs
git push upstream master
```

Then go to your repository, Settings -> Options -> Github Pages and select /docs folder

## Debugging

If you have not already done so, move to **Chrome** and install [react-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) & [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Thanks

* Thanks to [didierfranc](https://github.com/didierfranc),
  this template is based on his
  [redux-react-starter](https://github.com/didierfranc/redux-react-starter)
  template
