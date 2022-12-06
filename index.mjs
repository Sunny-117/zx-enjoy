#!/usr/bin/env zx
// 1. 获取repo列表
// esm
const data = await fetch('https://api.github.com/users/boyfeiyu/repos')
const urls = await data.json()
const repos = urls.filter(info => !info.fork).map(info => info.git_url)
console.log(repos)
// 2. 拉取
await $`rm - rf backups`
await $`mkdir backups`
cd("./backups")

Promise.all(repos.map((url) => {
    return $`git clone ${url}`
}))