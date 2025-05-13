# React Router v7 SSR Scaffold

一个现代化的 React 脚手架，集成了以下技术栈：

- **React Router v7**：ssr 路由与数据加载
- **TailwindCSS**：原子化 CSS 框架
- **TanStack Query**：高效数据请求与缓存
- **Axios**：HTTP 网络请求
- **Jotai**：轻量级状态管理
- **shadcn/ui**：现代 UI 组件库

## 快速开始

1. 安装依赖：

   ```bash
   npm install
   ```

2. 启动开发服务器：

   ```bash
   npm run dev
   ```

3. 生产环境构建：

   ```bash
   npm run build
   ```

4. 预览生产构建：

   ```bash
   npm run preview
   ```

5. 部署（Cloudflare Workers）：

   ```bash
   npm run deploy
   ```

## 目录结构

- `app/`：应用源码（页面、组件、样式等）
- `public/`：静态资源
- `build/`：构建产物

## 说明

- 已内置 TypeScript 支持
- TailwindCSS 已配置好
- 推荐使用 VSCode + Prettier 进行开发

---

如需自定义或扩展功能，请参考各依赖库的官方文档。
