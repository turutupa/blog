---
date: 2021-06-29T08:36:44.976Z
title: My development config
description: "Recently I installed linux and had to install my development
  setup. It wasn't until then that I realized how much it has grown. Some of the
  stuff I am using right now is Fedora distro, alacritty terminal, neovim (for
  the most part, intellij for java), tmux, and some extensions/tweaks for linux.
  "
tags:
  - programming
  - linux
draft: false
---
![](../assets/rice-screenshot.jpg "develop-config")

In this post I'll share development my setup, some of the configurations and some of the reasons behind it. This is by no means finished nor the ultimate guide. More like just sharing in case your curious or if you had explored some of the below tools, hopefully I'll shed some light on how you can incorporate them into your workflow.

My config is compounded by

* **Fedora**
* **Linux tweaks**
* **Alacritty**
* **Oh-my-zsh!**
* **Tmux**
* **Neovim**
* **Intellij**

## Fedora

I've used a Mac for the past year or so, and before that I had been using windows. I have also recently spent some time using windows + wsl2 (windows subsystem linux) which worked quite nicely. I enjoyed using both OS and I have been curious about using Linux full time as well, and it's time had come. 

I don't have any particular preference for any distro out there. Some might claim A or B is the best distro... just choose whatever you are most comfortable with. Personally I would use an ubuntu based distro, such as ubuntu itself or Pop_OS! because of the apt package manager. Unfortunately I couldn't. My laptop is kind of new and it had some kernel incompatibilities... I am not an expert on the topic so I simply followed this [guide](https://asus-linux.org/wiki/) and installed fedora. You may choose to install Arch instead. Up to you, I don't have the expertise to recommend one or the other.

If you are wondering what laptop I bought it's the Asus Zephyrus G15. If you have that laptop or another of the rog family follow that guide to install Linux.

Nonetheless, by the time I installed Fedora it had already released Fedora 34 with Gnome 40 and it works super smooth so I am quite happy with it.

## Linux tweaks

These are minor things and fixes, such as extensions and fixes. 

* **Gnome Tweaks** besides minor tweaks, such as enable battery percentage number or changing background, the only important tweak I applied was to change Caps Lock to work as Left Control
* **Gnome Extensions**

  * Disable background logo: disables Fedora logo from the background image
  * [AltTab Mod](https://extensions.gnome.org/extension/4007/alttab-mod/): when using alt + tab you may use hjkl to switch between apps. Extremely comfortable if you are already using vim keybindings or are used to them
  * User themes: I don't use any, I like it as it is
* **Workspaces** I like the alttab mod so much that I wanted to use the same system to move around workspaces. Perhaps in the future I will use i3wm, but for the time being I modified some settings to apply my own keybinding to move around workspaces:

   `$ gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-left "['<Control><Alt>h']"`

  `$ gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-right "['<Control><Alt>l']"`

  What this does is, pressing Alt + Control + either L or H will move to the left or right workspace. This is a comfortable keybinding because as I mentioned earlier I modified my Caps Lock to work as Left Control. So switching between workspaces or apps feels natural. Although the most efficient way of moving around should be switching between apps, not workspaces, but I like to have the option.
* **Bluetooth** I had a small issue with my bluetooth headphones where I would hear static noise while listening to music, If you suffer from the same annoying problem, simply install blueman (either via apt or dnf or whatever your package manager is) and in **/etc/bluetooth/main.conf** go to the last line and add **Disable=headset**

  Don't ask me what does it do. I just follow a stackoverflow post. 

## Alacritty

I went with Alacritty as my main terminal. There is no technical reason for it. They do promote it as fast and gpu-powered terminal, but I didn't choose it for that reason. Any terminal that works for you is totally fine, even the default one - I actually like that one a lot. 

The main reason I chose Alacritty is simply because I wanted to get rid of the title/menu bar and have ***only*** the terminal body on screen. I also configured it so it opens in maximized (cause without title bar I am unable to move it around) and that's it. My entire screen is one big terminal.

Some minor tweaks I also applied are changing the default font to Fira Code Retina (although I must admit I change font quite often - too often... ) and set the normal font to be Medium instead (it is slightly thicker and easier to read). I did install a [theme manager](https://github.com/rajasegar/alacritty-themes) you could call it. It is very comfortable, simply run it and select what theme you want to have applied, it super easy to use. I am currently enthralled by the gruvbox theme,

To change the settings you'll have to edit a yml file at ~/.config/alacritty/alacritty.yml - there are plenty of examples online.

## zsh && Oh-my-zsh!

It is a shell like many others out there. You might be used to using powershell - windows - or bash - linux and mac. I've been using this for a long time and I feel really comfortable with it so I haven't experienced many other shells lately. It even came by default on my old macbook pro so feels like home. I like installing oh-my-zsh for the themes and some of the out-of-the-box functionalities. I run it with the default theme. I like its simplicity. You can also check [powerlevel10k](https://github.com/romkatv/powerlevel10k). I did use that for some time and it is really nice. 

I heard about fish and some others but never got my hands into them. 

I do install some plugins

* **[fzf](https://github.com/junegunn/fzf)** fuzzy finder, it is more useful than it seems at first. Comes with a few keybindings to search files or go through the history of used commands. 
* **vi-mode** it comes alongside with oh-my-zsh. Simply add vi-mode into the plugins list in your **.zshrc** config file
* **[lsd](https://github.com/Peltoche/lsd)** I love this one. Adds icons to folders and makes listing files/directories way more comfortable to the eyes. In order to use it it is recommended to add lsd as an alas in your zshrc config. The default alias for ls is **lsd**. I actually recommend using this one: **alias ls='lsd --group-dirs first'**. It will put the folders first, and THEN the files when listing a directory.

## tmux

I freakin love tmux.

The fist time I used it I didn't have any knowledge whatsoever on vim or its keybindings. Now I can't imagine my workflow without tmux. So what the heck is tmux?

tmux is a terminal mutiplexer. So... what the heck is a terminal multiplexer?

It basically let's you create sessions, in within a session you may have windows, and in each window you can device that window in panes. Even more amazingly... you may "detach" from a session or from all sessions, and as long as you haven't rebooted, you may "attach" again to them and continue where you lef it. 

It's confusing at first but there are plenty videos explaining how it works. It is extremely useful and tidy. The only problem is the default keybindings aren't the best and the theme looks a bit meh... fortunately there is a plug-n-play config for tmux I always use:

* **[oh-my-tmux](https://github.com/gpakosz/.tmux)** install it. You will love it. It basically adds intuitive keybindings, an informative status bar at the bottom among many other things. Take a look at the repo and you'll instantly understand why you should use it if you don't know how to tweak it by yourself.
* Another great plugin is [tmux resurrect](https://github.com/tmux-plugins/tmux-resurrect). Let's you save sessions so you can continue where you left it even after pc reboot. I installed it recently for the first time and it is a must-have plugin for me from now on.
* A good read is [tmux product free-mouse development](<* https://www.amazon.com/tmux-Productive-Development-Brian-Hogan/dp/1934356964>). Spend one or two evenings with it, it'll make some sense on the topic. Super easy read.

## neovim

I have always done wed development so my preferred editor has always been Visual Studio Code. There is no way I'd change that for anything else. As you might have guessed from the paragraph title, I did. 

For some reason I have always been attracted to vim or anything related to a mouseless workflow. I initially started using vim only to quickly edit files on terminal and not much beyond that. That was until I came across some videos from the [Primeagen](https://www.youtube.com/watch?v=bdumjiHabhQ), he has amazing videos related to vim and development. Or even just telling stories which are quite fun. That's when my curiosity for vim really triggered. 

Coincidentally, [I replied to a vim ](https://dev.to/siddharthshyniben/i-m-switching-to-vim-867)related post in dev.to and I got huge amount of people replying to my question related to file navigation in vim - which was one of my roadblocks in moving to vim. One of the people came to me with this AMAZING neovim config with a lot of the stuff we all need to move out of our favorite IDE/editor to vim, stuff such as seeing errors, autobrackets, file navigation or opening files easily, or traditionally tree navigation, themes, syntax highlighting, git blame, etc etc

If you are thinking about moving to vim or trying to use it similarly to vscode, I present to you [lunarvim](https://github.com/ChristianChiarulli/LunarVim)

It is simply amazing. It does require a minimum setup to get syntax highlighting and stuff like that working but it is simply fantastic. I now only use my terminal + tmux + neovim and I can code like the wind. It just feels like home.

### Getting used to vim keybindings

You might be thinking all of this is awesome... so great to have a cool neovim config and whatever... but the reality is, you have no idea about vim keybindings, and they are ANNOYING. It is hard at first, yes. Anyone daring to say otherwise is just lying. In order to make this transition easier here are some tricks and tips

* Don't go full vim at first. It can be really frustrating. I initially just used it to edit files and that made me feel good and motivated to keep using it. 
* **[Vim adventures!](https://vim-adventures.com/)** I don't know how I came across this game but it is absolutely fantastic. I never paid for the full version but perhaps I should have. It is really great to get some muscle memory with the basic movements. Start here.
* **[Learn vim vscode extension](https://marketplace.visualstudio.com/items?itemName=vintharas.learn-vim)** another great one. I barely used this one cause when I came across it I already had some experience. But I wish I had know about this earlier. Good aesthetics and awesome content. And it's free!
* Whenever you feel it is time... you may install **[Vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)** for VSCode. Use vim keybindings in vscode, it will be the first big step into moving to vim. I started here and it was awesome. I still felt comfortable behind my beloved vscode and brave enough to start using vim commands. 

Last step is using lunarvim or any other configs (for example [Lvim](https://github.com/lvim-tech/lvim)) out there in github. There are plenty of them. Some people recommend creating one yourself instead of using some other person's config. I don't feel the same way... I think it is easier to understand a config once you've seen a proper one built. I would not know some many plugins and tweaks if I hadn't seen them in their configs. 

## Intellij

Not much to add here as I have only used it for a few months. I'll update the content on Intellij in the future months when I have more experience. I did replace the default font and theme to MesloLGS and One dark. 

## Conclusion

I'll try to update some of the content here. Please don't hesitate to contact me if you have any questions, I hope you found it useful.

Happy hacking!!