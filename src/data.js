export const profile = {
  name: "王忠仁",
  tagline:
    "我喜欢把想法做成真正能用的产品 —— 从需求设计、前后端开发到部署上线，独立完成全流程。",
  socials: [
    { label: "GitHub", href: "https://github.com/Fluxwang", icon: "github" },
    { label: "Email", href: "mailto:fluxwang@gmail.com", icon: "mail" },
    { label: "个人网站", href: "https://wangzhr.top", icon: "globe" },
  ],
};

export const navItems = [
  { id: "about", label: "关于" },
  { id: "projects", label: "项目" },
  { id: "skills", label: "技能" },
];

export const about = [
  // '没有工作经验，所以我用项目说话：目前独立完成并上线了三个公开可访问的项目，覆盖 AI 应用、全栈开发和容器化部署。习惯从真实痛点出发，把"粘贴链接 → 自动出结果"这样的完整闭环做出来。',
  "日常大量使用 AI 工具辅助开发，对自己的代码质量要求较高。",
  '我相信 AI Agent 正在重新定义"一个人能做多少事"这条边界——这半年从 Opencode 到 Claude Code，从 Figma 到 Claude Design，我把能上手的工具都拿真实项目跑了一遍。工具会一直变，但拿真实场景验证它、知道什么时候该信它、什么时候不该信它——这件事本身不会过时。潮水退去后留下的，从来不是被工具取代的执行力，而是判断、品味、推过的逻辑。',
];

export const projects = [
  {
    id: "echosage",
    title: "EchoSage · 直播翻译与 TikTok 视频分析",
    period: "持续迭代 · 已有用户使用",
    href: "https://github.com/Fluxwang/EchoSage",
    description:
      "围绕用户观看外语直播、理解与分析 TikTok 达人内容的需求，开发并持续迭代 Chrome 扩展，已有用户实际使用。整合标签页音频捕获、流式语音识别与端侧翻译，以悬浮双语字幕呈现直播内容；为 TikTok 视频提供字幕翻译、内容总结和脚本生成工作区。通过 Manifest V3 Service Worker 协调会话，使用离屏文档处理音频，并加入静音断连和会话时长限制，控制转写费用。",
    tags: ["Chrome MV3", "JavaScript", "AssemblyAI", "Gemini Nano", "Web Audio"],
  },
  {
    id: "ledgersage",
    title: "LedgerSage · 对话式记账应用",
    period: "持续迭代",
    href: "https://github.com/Fluxwang/LedgerSage",
    description:
      "为减少 Beancount 手工录入成本，开发从 React 对话界面到 FastAPI 后端的记账应用，支持自然语言记账、账目查询、预算和统计报表。使用 LangGraph 编排意图识别、交易提取与多轮追问，信息不足时先补充确认；写入前展示可编辑的分录预览，确认后提交到账本。每位用户拥有独立账本，以 Beancount 文件作为账务数据来源，用 Git 记录写入并支持撤销，查询与报表采用确定性计算。",
    tags: ["Python", "FastAPI", "LangGraph", "React", "Beancount", "SQLite"],
  },
  {
    id: "uniqlo-tracker",
    title: "UniTrack · 优衣库商品追踪",
    period: "2025.10 — 2026.02",
    href: "https://github.com/Fluxwang/UniTrack",
    description:
      "为方便查看优衣库商品价格和库存变化，开发集用户登录、商品跟踪与管理面板于一体的全栈应用。用户通过商品链接或编码添加跟踪项，后端抓取商品数据并保存历史快照，通过新旧快照的差异检测记录价格和库存更新。使用 Next.js App Router 实现页面与 API，结合 Prisma 管理数据、NextAuth 处理登录，并为变化检测逻辑编写单元测试。",
    tags: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Vitest"],
  },
  {
    id: "file-upload",
    title: "R2Drop · 私有文件管理",
    period: "2025.10 — 2025.12",
    href: "https://github.com/Fluxwang/R2Drop",
    description:
      "开发基于 Cloudflare R2 的私有文件管理应用，覆盖注册登录、拖拽上传、上传进度、文件列表及批量下载与删除。服务端生成预签名 URL，由浏览器直接上传到对象存储，减少文件流量经过应用服务器的带宽开销。使用 NextAuth 管理会话、Prisma 与 PostgreSQL 保存用户信息；文件 API 同时校验登录状态与对象归属，限制用户只能访问自己的文件。",
    tags: ["Next.js", "TypeScript", "Cloudflare R2", "NextAuth", "PostgreSQL", "Prisma"],
  },
];

export const skills = [
  {
    category: "AI 工具链",
    items: ["Claude Code", "Codex", "OpenCode", "Figma"],
    note: "熟练使用 AI 工具快速上线项目",
  },
  {
    category: "开发环境",
    items: ["Linux", "Vim", "Git"],
    note: "熟悉 Linux 项目部署、Git 版本控制与团队协作",
  },
  {
    category: "独立交付",
    items: ["Docker", "FastAPI", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    note: "从需求设计、数据建模到部署上线的全流程独立交付能力",
  },
  {
    category: "编程语言",
    items: ["Python", "JavaScript", "Go"],
    // note: "",
  },
];
