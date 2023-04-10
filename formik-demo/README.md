# Create a Sign Up From Using Formik + Tailwind

## Create react app
```
% npx create-react-app formik-demo
% cd formik-demo
```

## Add Formik and Tailwindcss In Dependencies
edit package.json, add formik and tailwindcss in dependencies
```
"dependencies": {
    ...
    "formik": "2.2.9",
    "tailwindcss": "3.3.1"
},
```

Then install them in the project
```
% npm install
```

## Setup Tailwind CSS
This will setup tailwind.config.js
```
npx tailwindcss init
```

Edit tailwind.config.js as below
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Edit src/input.css as
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run the Tailwind CLI, output.css needs to be inside src for react to consume
```
npx tailwindcss -i ./src/input.css -o ./src/assets/css/output.css --watch
```
This command continuously updates output.css so that it contains only the referred css classes in the code.

## Use Tailwind CSS
Like in App.js, import output.css
```
import './assets/css/output.css';

...
      <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
...
```

## Start the App
```
% npm start
```
