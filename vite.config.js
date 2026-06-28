import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mars3dPlugin } from 'vite-plugin-mars3d'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mars3dPlugin()],
  server: {
    allowedHosts: [
      'glj.ljkjkf.com',
      'heyi.ljkjkf.com',
      'gjeqadmin.ljkjkf.com',
      'gjeqadmin.hljsjtgj.com',
      'dibang.lklq.com',
      'tongjiang.ljkjkf.com',
      'nkdq.ljkjkf.com',
      'nk6j.ljkjkf.com'
    ]
  }
})

// my-web-project/                # 项目根目录
// ├── public/                    # 静态资源目录（不参与打包构建，直接复制到最终输出目录）
// │   ├── index.html             # 主页面入口 HTML
// │   ├── favicon.ico            # 网站图标
// │   └── robots.txt             # 搜索引擎爬虫规则
// │
// ├── config/                    # 项目构建配置（如 Webpack/Vite 的额外配置）
// ├── dist/ (或 build/)          # 打包构建后生成的生产环境代码（自动生成的）
// ├── node_modules/              # 项目依赖的第三方库（npm install 自动生成）
// ├── .env.development           # 开发环境变量配置
// ├── .env.production            # 生产环境变量配置
// ├── .gitignore                 # Git 忽略提交配置
// ├── package.json               # 项目依赖包及脚本命令配置
// └── README.md                  # 项目说明文档