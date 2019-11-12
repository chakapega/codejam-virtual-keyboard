module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "always"
            }
          ],
        "arrow-parens": ["error", "as-needed"],
        "max-len": ["error", { "code": 120 }]
    }
};
