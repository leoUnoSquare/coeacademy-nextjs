# Playlist Pulse

## Introduction
Playlist Pulse is an innovative web platform that enables users to share, discover, and engage with music playlists. It features user authentication, playlist sharing, voting systems, comments, user profiles, and responsive design, providing a comprehensive music community experience.

## Prerequisites
Before starting, ensure you have the following installed:
- npm >=9.6.7
- node >=18.17.0

or
- nvm

### GitHub - Unosquare
- Ensure you have a GitHub account and are a member of the Unosquare organization.

## Setup
### GitHub - Unosquare
1. Fork the project https://github.com/Unosquare-CoE-JavaScript/coeacademy-nextjs
2. Switch to the 'day-1' branch:

```
git checkout day-1
```

### Install the project dependencies:
## VSCode Extensions
Install the following extensions in VSCode to enhance your development experience:
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)



## NPM packages
### Yarn
```
npm install -g yarn
```
```
yarn set version 3.6.4
```

### Starting the project
```
npx create-next-app@latest
```


### Install dependencies
```
yarn add -D @next/eslint-plugin-next @typescript-eslint/eslint-plugin eslint-config-next eslint-config-prettier eslint-plugin-prettier husky
```

### .prettierrc
```
{
    "endOfLine": "lf",
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "tabWidth": 2,
    "trailingComma": "none",
    "printWidth": 130
  }
```

### .eslintrc.json
```
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "next",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "array-callback-return": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/img-redundant-alt": "error",
    "no-console": "error",
    "no-unused-vars": "error",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-key": "error",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],    
    "camelcase": "error"
  }
}
```


### Husky setup
Adding prepare script in package.json
```
npm pkg set scripts.prepare="husky install"
npm run prepare
```
Adding a hook
```
npx husky add .husky/pre-commit "yarn lint"
git add .husky/pre-commit
```
Now try to make a commit

### Setup vscode
- create a .vscode folder at the root
- create .vscode/settings.json file
paste the following
```
{
    "workbench.colorCustomizations": {
        "activityBar.background": "#120956",
        "titleBar.activeBackground": "#190d78",
        "titleBar.activeForeground": "#FFFBFE"
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
      ],
      "javascript.updateImportsOnFileMove.enabled": "always",
      "javascript.validate.enable": false,
      "prettier.endOfLine": "auto",
      "prettier.semi": false,
      "eslint.format.enable": true,
      "eslint.lintTask.enable": true,
      "cSpell.enableFiletypes": [
        "!javascript"
      ],
      "cSpell.language": "es,en,es-ES",
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true,
        "source.sortMembers": true
      },
}
```
### More packages and helpful tools
https://github.com/unicodeveloper/awesome-nextjs

https://unjs.io/packages?utm_source=unjs.io&utm_medium=home-carousel