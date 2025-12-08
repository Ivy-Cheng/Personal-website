# 个人网站（静态版）

一个零依赖、可直接部署的静态个人主页。包含关于我、项目、技能与联系方式，内置明暗主题切换与移动端适配。

## 快速开始

1. 打开 `index.html` 即可本地预览（双击或拖到浏览器）。
2. 如需本地服务器（可选）：使用任意静态服务器，例如：
   - Python: `python3 -m http.server 8000`
   - Node: `npx serve .`

## 目录结构

```
website/
├─ index.html        # 页面结构
├─ styles.css        # 样式与主题
├─ script.js         # 数据渲染、交互逻辑
└─ assets/           # 资源（头像、封面、简历）
   ├─ images/
   │  └─ .gitkeep
   └─ README.txt
```

## 自定义步骤

1) 基本信息  
- 在 `index.html` 中修改标题、描述、导航名称、社交链接与文案（搜索“你的名字”）。  
- 替换头像：放置图片到 `assets/images/avatar.png`，建议 `512x512`、PNG。  
- 替换封面（分享图）：放置 `assets/images/og-cover.png`。  
- 替换简历：放置 `assets/resume.pdf` 并保证按钮链接指向该文件。

2) 项目卡片  
- 编辑 `script.js` 顶部的 `projects` 数组：`title`、`description`、`tags`、`links`。  
- 如需项目缩略图：可将 `imageText` 改为图片标签，或扩展为 `imageUrl` 并在卡片位置渲染 `<img>`。

3) 主题与样式  
- 默认读取本地存储 `pref-theme`，按钮可在明暗主题间切换。  
- 自定义主色与圆角：在 `styles.css` 顶部的 `:root` 变量中调整。  

## 部署

- GitHub Pages  
  1. 将本仓库推送到 GitHub。  
  2. 进入仓库 Settings → Pages，选择分支（main）与根目录。  
  3. 保存后等待几分钟，访问生成的 URL。  

- Netlify / Vercel  
  1. 新建站点，选择该目录作为静态站点根目录。  
  2. 直接部署即可（无需构建命令）。  

## 可访问性与 SEO

- 语义化标签：`<header> <main> <section> <footer>` 等。  
- 可替换的 `alt` 文本与 meta 描述。  
- 适配移动端并支持平滑滚动与键盘可达。  

## 许可证

你可以自由使用与修改本模板用于个人用途。若在开源仓库中使用，标注来源将不胜感激。  


