# 王忠仁 · 个人作品集

设计灵感来自 [brittanychiang.com](https://brittanychiang.com)，使用 **Vite + React + Tailwind CSS** 构建。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build   # 产物输出到 dist/（纯静态文件）
```

## 修改内容

所有文案集中在 [`src/data.js`](src/data.js)（个人简介、项目、技能、社交链接），改内容不需要动组件。

## 部署到 Cloudflare Pages

1. 把本目录 push 到 GitHub 仓库：
   ```bash
   git init && git add . && git commit -m "feat: personal portfolio"
   git remote add origin <你的仓库地址>
   git push -u origin main
   ```
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → 连接 GitHub 仓库
3. 构建配置：
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. 部署完成后可在 **Custom domains** 绑定自己的域名（如 `bugworld.dev` 的子域）
