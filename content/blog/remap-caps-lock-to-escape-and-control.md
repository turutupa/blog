---
date: 2021-05-17T14:56:32.419Z
title: Remap CAPS Lock to Escape and Control
description: There is not much description required... I've been using vim
  shortcuts lately... I guess you knew that by the title
tags:
  - programming
draft: false
---
So yeah... it finally happend. I have been using Vim shortcuts and I couldn't be happier. The learning curve is obviously intimidating by defnitely worth it! (as every vim user would say). \

I was motivated to finally come down this road due to 2 main reasons

* I own a Anne Pro 2. It is a keyboard that would let you remap any key and fn + "key" to any action you'd like. So I had fn + jkli to move around plus some other keybindings that let me move freely without requiring a mouse. Great experience. Nonetheless, I was Anne Pro 2 dependant. If I didn't have it around OR if I was using the laptop directly, as I would do when travelling, I had to rely on the arrow keys. That was no good for me. I guessed it was time for me to start learning vim shortcuts and be able to code mouseless once and for all. 
* I heard vim shortcuts not only are comfortable (once you get used to them) but can actually make you more efficient. That I am also down for. 

  Additionally, I intend to be a coder for a very long time. Why not implement this skills early on in my career?

Once you are hooked on vim shorcuts you start to wonder how to make it even more efficient and that is how I ended up writing this post.

Currently, my favorite use for the CAPS Lock key action is to substitute it for

* Escape on standalone key press
* Control when applied simultaneously with another key

## How to

Use these simple steps: https://gist.github.com/tanyuan/55bca522bf50363ae4573d4bdcf06e2e , it includes how-to for mac, linux and windows!

I've been searching for long on the internet and this has been by far the easiest way (at least on mac and windows). Karabiner makes it so easy on mac. And AutoHotkey also on windows, but instead of manually configuring the autohotkey script, in the link you'll have the ahk script to download, which will install the key press combination for you!

Enjoy! 

Happy hacking

## EDIT:

I no longer use the trick to have caps lock as control and escape at the same time. Main reason, at least in windows was that I wanted to use that key for gaming as well, and if I used it whilst pressing another key it'd work as control but else, it would work as escape and the menu/settings would pop up. 

I simply change CAPS lock to act as Control now by

* **Windows:** using [Power Toys](https://github.com/microsoft/PowerToys). It is a really cool tool, you should install it regardless of your intentions on remapping keys. It also provides a similar search bar in the middle of the screen as Macs do, window zones and presets and many other cool stuff. 
* **Linux:** using gnome tweaks (if you use gnome) simply select CAPS Lock to act as control in the *Keyboard & Mouse > Additional Layout Options*

Now whenever I want to go into normal mode in vim I use *Control + C* instead of single press on control. It is not as convenient but after I while you don't even notice anymore.