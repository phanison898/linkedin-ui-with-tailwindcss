### How to emulate LinkedIn's website UI using react and tailwindcss

#### 1.Pre-requisites (install if not already)
- node.js
- create-react-app
- vs code

#### 2. Lets start and create a react project
1. Open windows cmd and navigate your working directory

```Bash
c:\users\phanison\Documents\2024\workspace\coding\react\>
```

2. Type below react project creation command
```Bash
c:\users\phanison\Documents\2024\workspace\coding\react\> npx create-react-app linkedin-ui-with-tailwind --template blank
```
3. CD (change directory) to linkedin-ui-with-tailwind folder which created as a result of step no.2
```Bash
c:\users\phanison\Documents\2024\workspace\coding\react\> cd linkedin-ui-with-tailwind

c:\users\phanison\Documents\2024\workspace\coding\react\linkedin-ui-with-tailwind\>
```
4. Open vs code by running below command
```Bash
c:\users\phanison\Documents\2024\workspace\coding\react\linkedin-ui-with-tailwind\> code .
```
5. In vs code hit Ctrl+` button and it'll open internam power shell window. In that type below command in order to setup tailwindcss
```Bash
c:\users\phanison\Documents\2024\workspace\coding\react\linkedin-ui-with-tailwind\> npm i -D tailwindcss

c:\users\phanison\Documents\2024\workspace\coding\react\linkedin-ui-with-tailwind\> npx tailwindcss init
```
6. Above **npx tailwindcss init** commands creates tailwind.config.js file. Add below lines
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

7. Install other required packages one after other
```Bash
c:\users\phanison\Documents\2024\workspace\coding\react\linkedin-ui-with-tailwind\> npm i -D @emotion/react @emotion/styled prettier-plugin-tailwind

c:\users\phanison\Documents\2024\workspace\coding\react\linkedin-ui-with-tailwind\> npm i @mui/icons-material
```
8. Hurray!!!! We are just created and setup a react-tailwind project. Now lets start coding..

#### 3. Deploy the code to git-pages