---
date: 2021-05-26T15:17:47.004Z
title: VSCode switching between split panes
description: Switching between split panes in Visual Studio Code Vim style.
  Easy, convenient, and if you're using the CAPs Lock remap you gonna want to
  copy this into your VSCode shortcuts.
tags:
  - programming
  - vscode
  - vim
related_posts:
  - Remap CAPS Lock to Escape and Control
draft: false
---
I am becoming a huge fan of using only on the keyboard for my coding workflow. This is no innovation. It's been done for decades. Nonetheless, take this as my small contribution into a mouse-less world. This small snippet will add some ease on your day to day tasks and if you are a vim/tmux guy it will feel completely natural to you.

### What does it do?

When you split the vscode window into two or more panes, it will let do focus/move to the next pane. It uses *hjkl* as you can see in the snippet below, but you can change that to *ijkl* if you are not used to vim shortcuts.

### How to install

To add this snippet press F1 or ctrl + shift + p and search for *Preferences: Open keyboard shortcuts (JSON)*. If you haven't added any snippets yet, paste the snippet as it is, or else copy and paste only the elements (without the opening and ending brackets \[]).  You're set!

```json
[
    {
        "key": "ctrl+h",
        "command": "workbench.action.navigateLeft"
    },
    {
        "key": "ctrl+l",
        "command": "workbench.action.navigateRight"
    },
    {
        "key": "ctrl+k",
        "command": "workbench.action.navigateUp"
    },
    {
        "key": "ctrl+j",
        "command": "workbench.action.navigateDown"
    }
]
```

Happy hacking :)