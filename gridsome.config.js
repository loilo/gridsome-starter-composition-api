// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-composition-api'
    }
  ],
  configureWebpack: {
    plugins: [require('unplugin-vue2-script-setup/webpack')()],
    module: {
      rules: [
        // Recognize .mjs files as JavaScript
        // This is needed in case you want to use @vueuse/core,
        // which uses .mjs files
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
    resolve: {
      alias: {
        // Force usage of Vue's ESM build
        // This is necessary if you want to use anything that is built
        // on top of vue-demi (e.g. @vueuse/core) because by default,
        // Gridsome uses a different build than vue-demi, which will lead
        // to two separate instances of Vue being used.
        vue: require.resolve('vue/dist/vue.runtime.esm.js'),
      }
    }
  }
}
