## Mystery App

### Run this project: 
1. `npm install`
2. `npm run start`

### Wanna contribute? 
Tihs project is currently closed to outside contributions. Feel free to check back later!

### settings.json:
These VSCode settings will make Prettier your default formatter and will cause prettier and import sorting to run on save. Make sure you install the <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</a> and <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint</a> extensions. 
```
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.codeActionsOnSave.rules": [
    "import/first",
    "import/newline-after-import",
    "import/no-duplicates",
    "simple-import-sort/imports",
    "simple-import-sort/exports"
  ]
  ```
