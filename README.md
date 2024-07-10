
# npm init

# npm i --save-dev @babel/cli @babel/core @babel/preset-env

// se puede ejecutar babel de 2 formas,
# npx babel entrada.js --out-file salida.js --presets=@babel/preset-env

o agregandolo en el package json cambiando el nombre del script por

"scripts": {
    "babel": "babel entrada.js --out-file salida.js --presets=@babel/preset-env"
  },

para despues correrlo con 
# npm run babel

// debemos agregar webpack, también su cli
#npm i --save-dev webpack webpack-cli

// a webpack le debemos hacer un archivo de configuración
# webpack.config.js
// para correr el script de webpack se puede en modo producción o modo development

# webpack --mode=production
# webpack --mode=development

// también está de otra forma indicandole en la configuración de webpack
module.exports = {
    entry : './js/app.js',
    output: {
        path: path.resolve(__dirname, 'public.js'),
        filename: "bundle.js"
    },
    mode: "development"
}

// instalar el plugin de babel para webpack
# npm i --save-dev babel-loader

// para crear un servidor con webpack dev server debemos configurarlo

# npm i --save-dev webpack-dev-server
// para correrlo como comando también
# npx webpack serve

// también podría hacerse de otra forma desde el cli 

# npm install --save-dev webpack-cli webpack-dev-server

ejecutar el servidor de desarrollo en cuestión usando el cli 
pasando los parámetros desde la línea de comandos:
# npx webpack serve --static-directory / --compress --port 9000

Este comando usa las siguientes opciones:

--static-directory /: Especifica el directorio estático raíz (equivalente a static.directory en la configuración del servidor).
--compress: Habilita la compresión gzip.
--port 9000: Especifica el puerto en el que se ejecutará el servidor.

 Si quieres pasar la configuración de entrada y salida también desde la línea de comandos, puedes hacer algo como esto:

# npx webpack serve --entry ./js/app.js --output-path ./public/js --output-filename bundle.js --static-directory / --compress --port 9000


// para agregar hot reload debemos antes ejecutar el servidor, y luego correr en otra consola el script de 
"watch": "webpack --watch"

// surge que en este punto toca tener 2 scripts corriendo para hacer el hot reload, pero ¿y si queremos un script que haga eso?
# npm i --save-dev concurrently
// se cambia el script de dev por 
# "dev": "concurrently --kill-others \"npm run watch\" \"npm webpack-dev-server\"",
para ejecutar los 2 scripts al mismo tiempo, y eliminará los que estén activos para no generar problemas

//para agregar eslint

# npm i --save-dev eslint
para ejecutarlo es con npx

# npx eslint --init

si hacemos una configuración en eslint así:√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · javascript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint@9.x, globals, @eslint/js
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
☕️Installing...

en este punto tenemos a webpack corriendo en node, osea, usa modulos, y le especificamos que use imports y exports al ser javascript, por lo tanto deberíamos en este punto cambiarlo en el settings.json de el
IDE presionando ctrl + shift + p y seleccionar settings.json


y cambiar el json por esto que ignorará el archivo de webpack que usa node:

   "eslint.options":{
        "ignorePattern": "webpack.config.js"
    }
 quedaría así   
 {
    "workbench.colorTheme": "Flatland Monokai",
    "window.confirmSaveUntitledWorkspace": false,
    "CodeGPT.apiKey": "Ollama",
    "CodeGPT.Autocomplete.enabled": true,
    "workbench.iconTheme": "vscode-icons",
    "extensions.ignoreRecommendations": true,
    "eslint.options":{
        "ignorePattern": "webpack.config.js"
    }
}

y para usarlo sería

# npx eslint (nombrearchivo.js) 

para ejecutar tambien en toda la carpeta sería:
#npx eslint .

para ejecutar eslint sería
# npx eslint --init

(no sale en el video la opcion de to check syntax, find problems, and enforce code style, así que le he puesto las dependencias estas npx install-peerdeps --dev eslint-config-airbnb)

me rindo con eslint, no sirve para nada y hay muchos archivos conflictivos
