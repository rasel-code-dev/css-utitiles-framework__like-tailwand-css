

## I create tailwand like CSS framework that provided utilites classes.

Although it is not complete,
I added margin, padding, width, height, min-width, max-width, font-size, font-weight, position, top, bottom, left, right, text color, bg color hover color
classes

### implement like this.
```jsx
<div className="card rounded-4 bg-white px-3 text-sm font-500">
  <li className="hover:bg-blue-300 cursor-pointer my-2">Login</li>
  <li className="hover:bg-blue-300 cursor-pointer my-2">Profile</li>
</div>

<button className="bg-primary px-4 py-1.5 rounded-2 text-sm text-white cursor-pointer hover:bg-blue-300">Login</button>
```

### project tree
<ul>
    <li>src
      <ul>
        <li>
          variables
          <ul>
            <li>makeScss.js</li>
            <li>variables.js  // define all variable instead of scss file</li>
          </ul>
        </li>
        <li>
          utilities-classes
          <ul>
            <li>
            variables 
            <ul>
              <li>_colors.scss // generate via nodejs js variable to scss variable, object name to file name </li>             
            </ul>
            </li>   
            <li>index.css   // output file of build utilities css classes css file </li>
            <li>index.scss   // entry file for utilities scss file </li>
          </ul>
          <ul>
            <li>makeScss.js</li>
            <li>variables.js</li>
          </ul>
        </li>
        <li>App.jsx</li>
        <li>main.jsx</li>
        <li>index.css   // linkup utilities-css css file index.css </li>
      </ul>
    </li>
    <li>postcss.config.js</li>
    <li>package.json</li>
    <li>vite.config.js</li>
  </ul>



```shell
  # development mode...
  # to build utilities-classes if you modify or add new utilites classes
  yarn build-utilites 
  
  # preact app running...  
  yarn dev
  
  
  # production mode...
```
```javascript
    // postcss.config.js
    // uncomment plugin to remove unused classes
    const postCssPurge = require('@fullhuman/postcss-purgecss');
    const jsxFile = /\.jsx(\?.+)?$/;
    
    module.exports = {
      plugins: [
        postCssPurge({
          contentFunction: (sourceInputFile) => {
            if (jsxFile.test(sourceInputFile)) {
              return [sourceInputFile.replace(jsxFile, '.jsx')];
            }
            return ['src/**/*.jsx', 'index.html'];
          },
          defaultExtractor(content) {
            return content.match(/[\w-/:]+(?<!:)/g) || [];
          },
        }),
      ],
    };
```
```shell
  yarn build-css # make js variable to scss variable and scss to css utilities classes. 
  yarn build
  yarn preview
```

![preview](./create_tailwand like framework.png)


## Happy Codding

