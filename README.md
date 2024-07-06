
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

// para crear un servidor con webpack dev server

# npm i --save-dev webpack-dev-server

