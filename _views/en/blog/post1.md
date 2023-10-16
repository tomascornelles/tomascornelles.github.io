---
title: Un titulo cualquiera
image: https://picsum.photos/800/300
tags: test
---

In Git, <span role="link">the</span> git reset **command** is *used* ***to*** reset the state of the *repository* to a `specific` point. There are different ways to use git reset depending on what you want to achieve. Here are a few common scenarios:

    Discard Uncommitted Changes:

    If you have made changes to your files but haven't committed them yet and you want to discard those changes, you can use git reset with the --hard option:

    bash

git reset --hard

This will reset your working directory to match the state of the last commit, discarding all your uncommitted changes.

- unstage
- lista
- normal

1. otra
1. lista
1. numerada

Unstage Changes:

If you have staged changes but want to unstage them (move them back to the working directory), you can use git reset without the --hard option:

bash

git reset

This will unstage the changes, but your working directory will still have the modified files.

Move HEAD to a Previous Commit:

If you want to move the HEAD pointer to a previous commit, effectively undoing the commits after that point, you can provide the commit hash to git reset:

bash

git reset <commit_hash>

This will keep your changes in the working directory, but the commits after <commit_hash> will be removed.

Mixed Reset:

If you want to keep the changes in your working directory but reset the commit history to a specific point, you can use the --mixed option:

bash

    git reset --mixed <commit_hash>

    This will unstage any changes you have staged and move the HEAD pointer to <commit_hash>, effectively "uncommitting" the commits after that point.

Always be cautious when using git reset, especially with the --hard option, as it can result in permanent data loss if used improperly. It's recommended to create backups or use branches before performing operations that alter your commit history or working directory.
