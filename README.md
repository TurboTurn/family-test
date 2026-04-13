# 你被原生家庭影响了多深？

一个可以在小红书/抖音传播的测试类 H5。

## 功能
- 10道题，4种结果类型
- 结果页含影响分布雷达图
- 移动端优化，截图即可分享

## 本地预览
直接在浏览器打开 `index.html` 即可。

## 部署到 Vercel（免费公网链接）

### 方式一：GitHub + Vercel 自动部署
1. 在 GitHub 新建一个仓库（public 或 private 均可）
2. 把这个文件夹的内容推上去
3. 打开 [vercel.com](https://vercel.com)，用 GitHub 登录
4. 点 **Add New Project**，选择这个仓库
5. 保持默认配置，点 **Deploy**
6. 部署完成后得到 `xxx.vercel.app` 链接

### 方式二：Vercel CLI 一键部署
```bash
npm i -g vercel
cd family-test
vercel --prod
```
按提示登录，完成后直接给你公网链接。

## 文件结构
```
family-test/
├── index.html   # 页面结构
├── style.css    # 样式
├── app.js       # 题目数据 + 逻辑
├── vercel.json  # Vercel 部署配置
└── README.md
```
