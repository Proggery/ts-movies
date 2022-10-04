yarn create react-app ./ --template typescript
yarn create vite
cd (vite folder)
yarn
yarn run dev (check app)
cd ..
npx degit TheSwordBreaker/vite-reactts-eslint-prettier#main (folder)
cd (folder)
yarn add eslint-plugin-react-hooks --dev

 file -> .eslintrc
{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ]
}

<!-- IMPORTS SORT -->
yarn add --dev @trivago/prettier-plugin-sort-imports
"importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
"importOrderSeparation": false,
