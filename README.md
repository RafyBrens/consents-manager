# Consents manager


## Scripts

Inside the project directory, you can run:

- `yarn start`. Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

- `yarn test`. Launches the test runner in the interactive watch mode.

- `yarn build`. Builds the app for production to the `build` folder.

- `yarn eject`. Exposes content of `react-script` package

- `yarn lint`. Lints project files according to eslint rules.

- `yarn fix`. Same as `yarn lint`, but also fixes errors, when possible. 

Due to CRA template limitation no `devDependencies`.
See Dan abramov comment about it: https://twitter.com/dan_abramov/status/1098234219506085889

## Redux configuration

You can use [Redux devtools browser extension](http://extension.remotedev.io/). 

## Git hooks

`husky` will run `eslint --fix` e very time you commit something, preventing committing badly formatted code. Before each push tests will run in the same way. Settings in `.linstagedrc` and `.huskyrc` config files.

## Testing

Snapshot testing done with `enzyme`.

Tests use `redux-mock-store`

## Eslint configuration
Extended CRA eslint rules, Added `prettier` to force consistent formatting and `eslint-plugin-fp` to avoid accidental mutations.
It's important to mention that `prettier` may give you the impression that there is a lot of code (number of lines) when there is actually some few event handlers, since it tries to make lines shorter, but during development, you will certainly find easy and comfortable to make changes to existing code, which at end, is a great added value. 

```js

"rules": {
    // Allow jsx tags inside .js files.
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    // Allow modules with named exports only.
    "import/prefer-default-export": 0,
    // Force {foo: 'bar'} object literal syntax.
    "object-curly-spacing": ["error", "never"],
    // Throw warning instead of error.
    "arrow-body-style": ["warn", "as-needed"],
    // Make prettier code formatting suggestions more verbose.
    "prettier/prettier": ["warn"],
    // Allow using (props) => <Component /> and ({propName}) => <Component /> syntax.
    "react/destructuring-assignment": "off",
    // No delete operator.
    "fp/no-delete": "warn",
    // Warning when Object.assign(a, b) used, since it mutates first argument. Object.assign({}, a, b) is ok.
    "fp/no-mutating-assign": "warn",
    // Warning when mutating method (pop, push, reverse, shift, sort, splice, unshift, etc) is used. Ramda and lodash/fp are allowed (_.pop, R.push)
    "fp/no-mutating-methods": [
      "warn",
      {
        "allowedObjects": ["_", "R"]
      }
    ],
    // Warning when mutating operators (++, --, etc) are used, object = {} also. Proptypes, defaultProps and common.js (module.exports = {}) are ok.
    "fp/no-mutation": [
      "warn",
      {
        "commonjs": true,
        "allowThis": true,
        "exceptions": [{"property": "propTypes"}, {"property": "defaultProps"}]
      }
    ]
  },

```

## Absolute imports

You can use source folder relative paths for imports. `import Component from './../../../../../../src/components/Component'` becomes `import Component from 'components/Component'`. Configuration is inside `jsconfig.json` file.


## Present issues in the project
Warning: [JSS] Could not find the referenced rule "checked" in "makeStyles".
It's an issue in material-ui.
https://github.com/mui-org/material-ui/issues/15511