---
date: 2021-05-26T15:17:47.004Z
title: VSCode Switching between Split Panes
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
I am becoming a huge fan of relying only on the keyboard for my workflow. This is no innovation. It's been done for decades. Nonetheless, take this as my small contribution into a mouse-less world. This small snippet will add some ease on your day to day tasks and if you are a vim/tmux guy it will feel completely natural to you.

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

 Simply stick this in your vscode shortcuts extension and you are good to go!



Happy hacking :)