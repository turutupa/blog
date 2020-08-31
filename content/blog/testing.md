---
path: testing
date: 2020-08-17T14:01:59.789Z
title: Testing styles & code block
description: Testing text styles such as bold, italic, headers, bullet points
  etc. Also trying out styles for code blocks.
---
This would be **A TEST** on different *styles* I can add to my blog and see how they look like

#### This is header 4

I think header 4 looks niiiice to introduce topics

> Write your code as if the person who is going to review is a psychopath that knows where you live

* list 1
* list 2

`npm i cf-create-app`

Powered by [gatsby-remark-highlight-code](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/#install)

```
// This is some code block

const curry = fn = {
  const arity = fn.length;

  return function $curry(...args){
    if(args.length <= arity){
      return $curry.bind(null, ...args);
    }

    return fn.apply(null, args);
  }
}
```

And that's how you curry a function baby