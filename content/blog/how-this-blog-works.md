---
date: 2021-01-19T09:41:08.254Z
title: How this blog works
description: Do you want to setup your own blog and don't know how to do it? Do
  you want to know how this blog works? What technologies uses? How do I manage
  my content? How does the newsletter works? Read on!
tags:
  - programming
related_posts:
  - cd blog && git init
  - Write more
draft: true
---
Introduction

Blog parts:

* Frontend - Gatsby.js
* Automatic deployments && Hosting - Netlify 
* Personal Domain - Google domains && Netlify
* CMS - Netlify CMS
* Newsletter - MailChimp
* Analytics - Google Analytics

I've wanted to have my own little garage in the Internet for sometime, but it wasn't until a few months ago that I actually got into building it. As a developer I didn't want to use WordPress or any similar sites, I wanted to build something of my own, but at the same time it had to be as convenient to use and easy to build (almost), and as cheap. So basically, what were my prerequisites?

* **Easy to build** - I didn't want to spend too much time developing to have a working site. My goal was to have somewhere to start posting as soon as possible
* **Hosting** - where would I host it? Ideally for free right? This would also include future deployments upon changes
* **Convenient** - An easy way of adding new posts and at the same time secure
* **Have my personal domain** - Regardless of how you do it, you can always use your personal domain. Nonetheless this was a must-have for me so I'll put it here
* **Bonus 1** - don't let the  people interest in you miss out! Newsletter wasn't an initial prerequisite but it is indeed a nice-to-have.
* **Bonus 2** - Analytics! Who and from where are the people reading your blog?

I could write a very long post explaining how I built the entire thing but it would be too lengthy and not modular at all. Some of the parts in my build could easily be interchangeable for some other, so I will give a brief overview of my a*rchitecture* and in future posts I will explain in more detail how to set up each of the parts.

### Easy to build - Gatsby.js

There are many options out there - and if you are a React.js developer as myself - I could have easily gone with *create-react-app* but instead I chose Gatsby. 

Why I chose Gatsby?

* **[Built-in functionalities](https://www.netlify.com/blog/2020/06/25/gatsby-101-features-benefits-and-trade-offs/)** - excellent performance out of the box
* **[Plugins](https://www.gatsbyjs.com/plugins)** - Makes your life *way* easier reducing development time and integrating services, such as Google Analytics, CMS, MailChimp (which I will later explain)
* **[Themes](https://www.gatsbyjs.com/docs/themes/)** - or as I understand them, templates. Although I have drastically changed it, this site uses a [starter blog](https://github.com/thomaswang/gatsby-personal-starter-blog) template. Extremely useful if you have never worked with Gatsby before and you are interested in adding content right away.