# Vue Manual

## Table of Contents

* [Why Vue](#why-vue)
* [What Vue offers](#what-vue-offers)
* [Using vuejs](#using-vuejs)
* [Addtional Tools & Plugins](#addtional-tools-&-plugins)
* [Reactive](#reactive)
* [Declarative Rendering](#declarative-rendering)
* [Component Lifecycle](#component-lifecycle)
* [Data & Methods](#data-and-methods)
* Directives
  * Binding to Attributes
  * Listening to Events
  * Directives Modifiers
    * Directives Keys Modifiers

## Why Vue

* Easy to learn
* Easy to use
* Easy to maintain
* Fast

## What Vue offers

* Reactive Interfaces
* Declarative Rendering
* Data Binding
* Directives
* Template Logic
* Components & Nesting
* Event Handling
* Computed Properties
* CSS Transition & Animation
* Custom Filters

## Using vuejs

* Include the <script> tag in an html file
* Install via npm & create webpack config
* Use the vue-cli tool along with webpack
* Install using the Bower client side package manager
* Using in the Laravel via laravel-mix

## Addtional Tools & Plugins

* vue-router - Official router deeply integrated with Vue.js core
* vue-resource - Handle web requests
* vue-async-data - Async data loading
* vue-validator - Form validation plugin
* vue-dev-tools - Chrome devtools extension
* vue-touch - Touch gestures using Hammer.js
* vuex - Vuex is a state management pattern + library

## Reactive

```javascript
function createReactiveObject(obj) {
  const keys = Object.keys(obj);
  obj.$data = Object.assign({}, obj);
  keys.forEach(key => {
    Object.defineProperty(obj, key, {
      get: reactiveGetter.bind(obj, key),
      set: reactiveSetter.bind(obj, key)
    });
  });
}

function reactiveSetter(property, value) {
  this.$data[property] = value;
  console.log(`${property} changed to ${value}`);
}

function reactiveGetter(property) {
  console.log(`get ${property}`);
  return this.$data[property];
}

let user = {
  name: "",
  score: 0
};

createReactiveObject(user);

user.name = "Changed";
```

## Declarative Rendering

### html

```html
<div id="app">
  Mustache: {{ message }}
</div>
```

### javascript

```javascript
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
});
```

# Component Lifecycle

```
- creation
  * beforeCreate
  - Initialize State
  * created
===== Complie Template =====
- mounting
  * beforeMount
  - Create Virtual Dom
  * mounted
===== Listen for Data Changes =====
- updating
  * beforeUpdate
  - Re-Render Virtual DOM and patch
  * updated
===== When vm.$destroy() is called =====
- detroy
  * beforeDestroy
  - Teardown Virtual DOM
  * destroyed
```

## Data and methods

### html

```html
<div id="app">
  <input type="text" v-on:input="changedName">
  <p>{{name}}</p>
</div>
```

### javascript

```javascript
new Vue({
  el: "#app",
  data: {
    name: ""
  },
  methods: {
    changedName(event) {
      this.name = event.target.value;
    }
  }
});
```
