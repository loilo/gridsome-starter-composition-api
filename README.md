# Vue Composition API Starter for Gridsome

This is the [default Gridsome starter](https://github.com/gridsome/gridsome-starter-default) with some tiny adjustments to allow usage of some Vue 3 goodies in Vue 2, such as [Vue's Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) and the [`<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) syntax.

To achieve this, it uses:

- [`gridsome-plugin-composition-api`](https://github.com/vsimko/gridsome-plugin-composition-api), a Gridsome plugin which imports and initializes the [Vue 2 Composition API plugin](https://github.com/vuejs/composition-api#readme)
- [`unplugin-vue2-script-setup`](https://github.com/antfu/unplugin-vue2-script-setup#readme), a webpack plugin which compiles `<script setup>` to a Vue 2 component.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install this starter

1. `gridsome create my-gridsome-site https://github.com/loilo/gridsome-starter-composition-api.git`
2. `cd my-gridsome-site` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌
