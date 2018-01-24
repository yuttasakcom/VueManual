# Vue Manual

## Table of Contents

* [What Vue offers](#what-vue-offers)
* [Using vuejs](#using-vuejs)
* [Addtional Tools & Plugins](#addtional-tools-&-plugins)
* [Reactive](#reactive)
* [Declarative Rendering](#declarative-rendering)
* [Data & Methods](#data-and-methods)
* Directives
  * Binding to Attributes
  * Listening to Events
  * Directives Modifiers
    * Directives Keys Modifiers

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
  const keys = Object.keys(obj)
  obj.$data = Object.assign({}, obj)
  keys.forEach(key => {
    Object.defineProperty(obj, key, {
      get: reactiveGetter.bind(obj, key),
      set: reactiveSetter.bind(obj, key)
    })
  })
}

function reactiveSetter(property, value) {
  this.$data[property] = value
  console.log(`${property} changed to ${value}`)
}

function reactiveGetter(property) {
  console.log(`get ${property}`)
  return this.$data[property]
}

let user = {
  name: '',
  score: 0
}

createReactiveObject(user)

user.name = 'Changed'
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
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
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
  el: '#app',
  data: {
    name: ''
  },
  methods: {
    changedName(event) {
      this.name = event.target.value
    }
  }
})
```
