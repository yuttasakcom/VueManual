## Vue Manual
> คู่มือการใช้งาน VuesJs(2.4.4) ฉบับ YoProgrammer

## Table of Contents
  - [Vue Instance](#vue-instance)
    - [Vue Component](#vue-component)
  - Directives
    - v-if
    - v-for

## Vue Instance
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://unpkg.com/vue"></script>
</head>
<body>
  <div id="app">{{msg}}</div>
  <script>
    new Vue({
      el: '#app',
      data: {
        msg: 'Hello VueJs!'
      }
    });
  </script>
</body>
</html>
```

## Vue Component
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://unpkg.com/vue"></script>
</head>
<body>
  <div id="app">
    <component></component>
  </div>
  <script>

    Vue.component('component', {
      template: `
        <div>
          <div>{{count}}</div>
          <div><button @click="inc">increment++</button></div>
        </div>`,
      data: () => ({
        count: 0,
      }),
      methods: {
        inc() {
          this.count++;
        }
      }
    });

    new Vue({
      el: '#app'
    });
  </script>
</body>
</html>
```