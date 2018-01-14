# Vue Manual

## Table of Contents

* [Declarative Rendering](#declarative-rendering)

## Declarative Rendering

### html

```html
<div id="app">
  {{ message }}
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
