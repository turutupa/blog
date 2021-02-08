---
date: 2021-01-19T09:41:08.254Z
title: How this blog works
description: Do you want to setup your own blog and don't know how to do it? Do
  you want to know how this blog works? What technologies uses? How do I manage
  my content? How does the newsletter works? Read on!
tags:
  - programming
  - blog
related_posts:
  - cd blog && git init
  - Write more
draft: false
---
Like so many other people, I wanted to have my own little space in the Internet, but it wasn't until a few months ago that I actually got into building it. As a developer, I didn't want to use WordPress or any similar apps, I wanted to build something of my own. But at the same time, it had to be as convenient to use and easy to build (of course it took me way more hours), and as cheap. So long story short, what were my prerequisites? 

*\* I could write a very long post explaining how I built the entire thing and detailing every single part but it would be too lengthy. So instead I decided to list the different parts I used to make it work. This will give you an overview of what you will require if you are planning on creating your own blog or if you want to contrast yours with mine.*

* **Easy to build** - I didn't want to spend too much time developing to have a working site. My goal was to have somewhere to start posting as soon as possible. 

  **Solution:** Gatsby.js

  There are many options out there - specially if you are a React.js developer as myself - but in the end I chose Gatsby. 

  Why I chose Gatsby?

  * **[Built-in functionalities](https://www.netlify.com/blog/2020/06/25/gatsby-101-features-benefits-and-trade-offs/)** - excellent performance out of the box
  * **[Plugins](https://www.gatsbyjs.com/plugins)** - reduces immensely development time and integrating services, such as Google Analytics, CMS, MailChimp etc. 

    The important part here for me was the Netlify CMS, this will allow you to write new blog posts and Netlify will *push* them to your GitHub repo, instead of requiring a database. If you don't know what exactly Netlify is you can read it in the next section *Hosting.* Learn how to connect Netlify to your Gatsby app [here](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify-cms/). 
  * **[Themes](https://www.gatsbyjs.com/docs/themes/)** - or as I understand them, templates. Although I have drastically changed it, this site uses a [starter blog](https://github.com/thomaswang/gatsby-personal-starter-blog) template. Extremely useful if you have never worked with Gatsby before and you are interested in adding content right away. With this theme you can start blogging since day 1.
* **Hosting** - where would I host it? Ideally for free right? This would also include future deployments upon changes

  Netlify! Simply bind your blog repo to Netlify and each time you commit to a change to a pre-selected branch (normally master or main) Netlify will re-deploy your application with your latest changes. This is super useful not only for latest updates on your blog, but more specifically for each time your Netlify CMS pushes a new blog post.
* **Have my personal domain** - Regardless of the hosting service you might use, you can always use your personal domain. Nonetheless this was a must-have for me so I'll put it here as a requirement. 

  And again, Netlify makes it SUPER easy to simply hook up [your personal domain](https://docs.netlify.com/domains-https/custom-domains/) to your app plus it offers [free SSL certificates](https://docs.netlify.com/domains-https/https-ssl/). So what is not to love? 
* **Bonus 1** - don't let the  people interest in you miss out! Newsletter wasn't an initial prerequisite but it is indeed a nice-to-have.

  For this part Gatsby made it easy again for me. You will need a MailChimp account and follow [this tutorial](https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/) to add the MailChimp service to your application and more importantly, a RSS Feed also [provided by a Gatsby plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed-mdx/?=feed).

  Create a RSS Feed, then after creating a MailChimp account you will have to create a new campaign in MailChimp. Look for *Share blog updates* and simply make it point to your RSS URL. You can select how often the email will be triggered with your new post updates and additionally it will *only* be sent if you did indeed write new posts, or else won't send anything (I will write a more detailed explanation in another post).
* **Bonus 2** - Analytics! Who and from where are the people reading your blog?

  For this part you'll have to log in into your google analytics account to create a new project and additionally use the [google analytics plugin for Gatsby.js](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/). The only part which can be tricky is, if you do not create properly the analytics project you will *not* be able to see your tracking id, which is required in your google analytics Gatsby.js plugin. This happened to me too. Please pay attention to this [detail](https://support.google.com/analytics/answer/9539598?hl=en#:~:text=If%20you%20can't%20find,of%20a%20Universal%20Analytics%20property.&text=In%20the%20Property%20column%2C%20click,left%20portion%20of%20the%20panel.).

Some of the parts were trickier than expected so I will try to write more posts on some of them, specially the MailChimp part which I think it is quite fun!

If you may have any questions or suggestions please don't hesitate to contact me, specially if you are starting your own blog and you are a bit stuck.

Cheers!