

[TOC]

# Github Visualization / Github 数据可视化



网站链接: https://ssthouse.github.io/github-visualization/

github链接: https://github.com/ssthouse/github-visualization

## 效果: 一个简单的Github数据展示网页, 目前功能有:

- 输入github username, 展示所有repository
  - 支持鼠标滚轮缩放  &  拖拽
  - 筛选是否为fork的 repository

![Kapture 2018-05-11 at 23.25.56](https://upload-images.jianshu.io/upload_images/815632-eaee660c74a4a534.gif?imageMogr2/auto-orient/strip)

## Tech: 使用到的技术:

- Vue用作 UI 快速搭建 (其实直接用纯html + js也行,  用Vue只是方便快速搭建界面)
- D3.js , 数据可视化的核心库
- 使用github page 作为静态网页的展示, 通过配置webpack, 可以通过将 npm/yarn run build 编译到项目 /doc 目录下, 从而直接部署到github page 
- 从github 的api 以 GraphQL 形式提供
  - 使用的是 personal token ==> 详情参见文档: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/



## Purpose:

- 练习使用 D3.js 进行数据可视化
- For fun

## TODO:

- 展示follwer & following  ==>  并支持展示其 repository viz

