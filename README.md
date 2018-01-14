# Vue Manual

## Table of Contents

* [Reactive](#reactive)
* [Declarative Rendering](#declarative-rendering)
* [Data & Methods](#data-and-methods)
* Directives
  * Binding to Attributes
  * Listening to Events
  * Directives Modifiers
    * Directives Keys Modifiers

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
console.log(user.score)
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
