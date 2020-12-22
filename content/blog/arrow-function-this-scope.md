---
date: 2020-12-22T15:00:32.537Z
title: Arrow function 'this' scope
description: Reminder for myself, I always get the 'this' scope between regular
  function and arrow functions mixed up
tags:
  - javascript
---
This is just a reminder to myself on how the *this scope* works in arrow functions and regular functions. For some reason, I always remember them the other way round. 

Succinct definition:

> ES6 arrow functions can’t be bound to a 'this' keyword, so it will lexically go up a scope, and use the value of 'this' in the scope in which it was defined.

If the definition may seem too fancy, there is no better way than a practical example to see the difference in action.

```
const arrowFunctionExample = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};

arrowFunctionExample.counter() // output = 42

const regularFunctionExample = {
  id: 42,
  counter: function counter() {
    setTimeout( function(){
      console.log(this.id);
    }, 1000);
  }
};

regularFunctionExample.counter() // output = undefined
```

It is as simple as that!

*\*\* For beginners: arrow functions are especially useful to access object properties as in the example or for more readable situations; for example when using 'map', 'reduce' or any other built-in higher order function.*