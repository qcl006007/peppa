#!/usr/bin/env sh
# 发生错误时停止
set -e
git init
git add -A
git commit -m 'init'
git config --local user.name "{name}"
git config --local user.email {email}
# 如果部署到 https://{USERNAME}.github.io
# git push -f git@github.com:{USERNAME}/{USERNAME}.github.io.git master:{branch-name}
# 如果部署到 https://{USERNAME}.github.io/{REPO}
git push -f git@github.com:{USERNAME}/{REPO}.git master
cd -