export const profile = {
  name: '王忠仁',
  title: '软件工程本科在读 · 全栈开发',
  tagline: '我喜欢把想法做成真正能用的产品 —— 从需求设计、前后端开发到部署上线，独立完成全流程。',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Fluxwang', icon: 'github' },
    { label: 'Email', href: 'mailto:fluxwang@gmail.com', icon: 'mail' },
    { label: '个人网站', href: 'https://bugworld.dev', icon: 'globe' },
  ],
}

export const navItems = [
  { id: 'about', label: '关于' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '技能' },
]

export const about = [
  '我就读于广州软件学院软件与人工智能学院，软件工程本科（全日制），预计 2027 年 6 月毕业。已通过 CET-4，能够顺畅阅读英文文档和网页。',
  '没有工作经验，所以我用项目说话：目前独立完成并上线了三个公开可访问的项目，覆盖 AI 应用、全栈开发和容器化部署。习惯从真实痛点出发，把"粘贴链接 → 自动出结果"这样的完整闭环做出来。',
  '日常大量使用 AI 工具链辅助开发，对自己的代码质量要求较高。喜欢折腾 —— 会焊接电路板，有自己的服务器和备案域名。',
]

export const projects = [
  {
    title: 'BeanBot · 智能记账机器人',
    period: '2026.04 — 至今',
    href: 'https://github.com/Fluxwang/BeanBot',
    description:
      '为解决 Beancount 纯文本记账门槛高、手工录入繁琐的痛点，开发的基于自然语言的智能记账机器人。采用分层架构（Gateway → Service → Controller）组织代码，职责边界清晰；基于 mtime 实现账本热重载，避免频繁全量解析；集成 Embedding API 构建 RAG 管道，将历史交易条目向量化存储于 SQLite，实现基于语义相似度的账户自动推断。用户可用自然语言指令添加交易、查询账目、克隆历史条目。',
    tags: ['LLM', 'RAG', 'Embedding API', 'SQLite', 'Beancount'],
  },
  {
    title: 'TikTok 达人营销智能分析工具',
    period: '2026.05 — 至今',
    href: 'https://tk.bugworld.dev',
    description:
      '为跨境电商运营者打造的 TikTok 带货视频分析工具，实现"粘贴链接 → 自动出双语字幕 → AI 多维度分析报告"全流程自动化。通过 MediaRecorder 捕获整段音频一次性发送至 Whisper，分别请求源语言转录与中文翻译，合并生成带时间戳的双语字幕；串联全量转录文本与结构化 Prompt，输出概念、视频结构、爆点话术、达人建议、追问 AI 五维分析。所有第三方 API 均通过 Next.js API Routes 服务端代理转发，密钥零暴露。相比人工完成同等工作效率提升超 80%。',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Whisper API', 'LLM'],
  },
  {
    title: '优衣库价格追踪系统',
    period: '2025.10 — 2026.02',
    href: 'https://untrack.bugworld.dev',
    description:
      '为解决用户无法及时获知 UNIQLO 商品价格变动和库存更新的痛点，独立开发的全栈商品追踪应用。参考 HTTP ETag 协商缓存的思路，对抓取到的商品关键字段拼接后计算 MD5 摘要作为自定义变更标识，避免无意义数据重复落库；新旧快照逐字段对比，生成 JSON 结构化差异写入 ChangeEvent 表；集成 NextAuth（Credentials Provider + JWT Session），密码通过 bcrypt 哈希存储；编写多阶段 Dockerfile 实现容器化，一键部署到生产环境。',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'NextAuth.js', 'Prisma', 'Docker'],
  },
]

export const skills = [
  {
    category: 'AI 工具链',
    items: ['Claude Code', 'Codex', 'Copilot CLI', 'Figma'],
    note: '熟练使用 AI 工具快速上线项目',
  },
  {
    category: '开发环境',
    items: ['Linux', 'Vim', 'Git'],
    note: '熟悉 Linux 项目部署、Git 版本控制与团队协作',
  },
  {
    category: '独立交付',
    items: ['Docker', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    note: '从需求设计、数据建模到部署上线的全流程独立交付能力',
  },
]
