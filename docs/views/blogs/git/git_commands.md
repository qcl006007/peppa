---
title: Git 常见命令
sidebar: 'auto'
date: 2021-04-01
tags:
 - git devops
categories:
 - git
---

## Git 基础认知

## Git 提交历史管理

### merge

merge 是用于merge其中一个分支的提交到另一个分支，常见的操作方法：
```
git checkout your_branch

git merge master

#git merge origin/master
```
![](/images/git_01_merge.jpg)

merge 的优势保留了该分支的改动提交记录，历史提交目录，但频繁的merge会导致整个commit历史目录比较混乱。

### rebase

rebase 具有和merge相同的功能，它会把所有的提交压缩成一个patch,然后把patch添加到目标分支里，使之具有结构清晰的提交历史目录。

![](/images/git_01_rebase.jpg)

### merge 与 rebase 的使用场景

1. git merge：

- 记录下合并动作，很多时候这种合并动作是垃圾信息
- 不会修改原 commit ID
- 冲突只解决一次
- 分支看着不大整洁，但是能看出合并的先后顺序
- 记录了真实的 commit 情况，包括每个分支的详情

2. git rebase

- 改变当前分支 branch out 的位置
- 得到更简洁的项目历史
- 每个 commit 都需要解决冲突
- 修改所有 commit ID

随着团队增长，通过 merge 策略很难管理和追踪到每个提交。为了提交历史更清晰、更易于理解，使用 rebase 是一个明智、高效的选择。

下面是针对不同环境的建议，可以最大限度地发挥 rebase 的优势：

本地开发：如果你没有和别人协同工作，你应该使用 rebasing 而不是 merging ，这样历史记录会很清晰。如果你已经从仓库拉取了你的个人 fork，并且不准备和别的开发者一起工作，在分支 push 前 rebase 也是可以的。

你的代码准备好了被 review ：你创建了 pull request。别人正在 review 你的代码，可能把它拉到了本地 review 。如果这样，你最好别 rebase 你的代码。你应该创建一个 “rework” 提交来更新你的 feature 分支。它会让 pull request 的可塑性更强，也能避免历史突然丢失。

review 已经完成并且已经准备好了合并到目标分支。恭喜！你就要删除你的 feature 分支了。由于别的开发者不需要拉取、合并这些更改，这是你清理记录的好机会。你可以改写记录，折叠原始提交、“pr rework”  提交和 "merge" 提交，使之成为一整个清晰的提交。作为可选，你还可以给这些提交创建一个明确的 merge ，这样做实际上很有用。它会记录 feature 并入 master 的时间。

## 参考

* [git rebase 和 merge 的区别](https://mp.weixin.qq.com/s/dAM5aGIa7VErvIJUgImdqg)