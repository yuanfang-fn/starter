module.exports = {
    "env": {
        "browser": true,
        "require":true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
      "react/prefer-stateless-function":0,
    }
};