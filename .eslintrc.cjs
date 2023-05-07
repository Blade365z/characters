module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "no-relative-import-paths"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        'no-console': 1,
        'react/button-has-type': 1,
        "no-relative-import-paths/no-relative-import-paths": [
            "error",
            { "allowSameFolder": true }
        ]
    }
}
