;(function () {
  const $ = (sel, root = document) => root.querySelector(sel)
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel))

  // 1) i18n 文案与项目（按语言）
  const i18n = {
    zh: {
      htmlLang: 'zh-CN',
      siteTitle: '你的名字 · 个人主页',
      metaDescription: '你的名字的个人主页与项目作品集，包含项目经验、技能与联系方式。',
      name: '你的名字',
      nav: { about: '关于我', projects: '项目', skills: '技能', contact: '联系' },
      hero: { eyebrow: '你好，我是', subtitle: '全栈开发 / 前端工程师 / 你的定位', resume: '下载简历', contact: '联系我' },
      about: {
        title: '关于我',
        p: '一到两段简介：你的专业背景、擅长领域、核心优势与职业目标。可提及技术栈、做过的代表性工作与影响力。',
        highlights: [
          '✨ 擅长：React / TypeScript / Node.js / Next.js',
          '🚀 关注：性能优化、工程化、可访问性与优秀的用户体验',
          '🤝 价值观：结果导向、清晰沟通、持续学习'
        ]
      },
      projects: {
        title: '项目',
        desc: '挑选3–6个代表性项目，体现技术深度与业务价值。',
        list: [
          {
            title: '项目一：电商前端性能优化',
            description: '面向高并发秒杀场景进行性能与可用性优化，FCP 降低 38%，转化率提升 6.3%。技术栈：React, TypeScript, SWR。',
            tags: ['React', 'TypeScript', 'SWR', 'Performance'],
            imageText: 'ECOM',
            links: { demo: 'https://example.com/demo1', github: 'https://github.com/your-id/project-1' }
          },
          {
            title: '项目二：内部可视化平台',
            description: '搭建数据大屏与可视化组件库，支持动态仪表盘配置与拖拽，节省 40% 需求交付时间。',
            tags: ['Next.js', 'ECharts', 'Node.js', 'Design System'],
            imageText: 'VIS',
            links: { demo: 'https://example.com/demo2', github: 'https://github.com/your-id/project-2' }
          },
          {
            title: '项目三：低代码表单引擎',
            description: '实现表单 DSL 与渲染引擎，覆盖 20+ 业务场景，沉淀可复用规则与校验体系。',
            tags: ['Monorepo', 'Vite', 'Zod', 'Low-code'],
            imageText: 'FORM',
            links: { demo: 'https://example.com/demo3', github: 'https://github.com/your-id/project-3' }
          }
        ]
      },
      skills: { title: '技能' },
      contact: {
        title: '联系',
        desc: '欢迎通过以下方式联系我，获取简历或进一步交流：',
        location: '📍 城市：上海 / 远程'
      },
      footer: { rights: '保留所有权利。' },
      langToggleLabel: '切换语言',
      langButton: 'EN'
    },
    en: {
      htmlLang: 'en',
      siteTitle: 'Your Name · Portfolio',
      metaDescription: 'Personal portfolio of Your Name: projects, experience, skills and contact.',
      name: 'Your Name',
      nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
      hero: { eyebrow: 'Hi, I am', subtitle: 'Full‑stack / Frontend Engineer / Your Positioning', resume: 'Download CV', contact: 'Contact Me' },
      about: {
        title: 'About',
        p: 'One to two paragraphs: background, strengths, core advantages and career goals. Mention tech stack, representative work and impact.',
        highlights: [
          '✨ Focus: React / TypeScript / Node.js / Next.js',
          '🚀 Interests: performance, engineering, accessibility and UX',
          '🤝 Values: results, clear communication, continuous learning'
        ]
      },
      projects: {
        title: 'Projects',
        desc: 'Showcase 3–6 representative projects demonstrating technical depth and business impact.',
        list: [
          {
            title: 'E‑commerce Frontend Performance',
            description: 'Optimized for flash‑sale traffic; FCP -38%, conversion +6.3%. Stack: React, TypeScript, SWR.',
            tags: ['React', 'TypeScript', 'SWR', 'Performance'],
            imageText: 'ECOM',
            links: { demo: 'https://example.com/demo1', github: 'https://github.com/your-id/project-1' }
          },
          {
            title: 'Internal Visualization Platform',
            description: 'Built data dashboards and component library; drag‑and‑drop and dynamic layout; ~40% delivery time saved.',
            tags: ['Next.js', 'ECharts', 'Node.js', 'Design System'],
            imageText: 'VIS',
            links: { demo: 'https://example.com/demo2', github: 'https://github.com/your-id/project-2' }
          },
          {
            title: 'Low‑code Form Engine',
            description: 'Created form DSL and renderer; covered 20+ scenarios with reusable rules and validations.',
            tags: ['Monorepo', 'Vite', 'Zod', 'Low-code'],
            imageText: 'FORM',
            links: { demo: 'https://example.com/demo3', github: 'https://github.com/your-id/project-3' }
          }
        ]
      },
      skills: { title: 'Skills' },
      contact: {
        title: 'Contact',
        desc: 'Feel free to reach out for my CV or opportunities:',
        location: '📍 Location: Shanghai / Remote'
      },
      footer: { rights: 'All rights reserved.' },
      langToggleLabel: 'Toggle language',
      langButton: '中'
    }
  }

  const state = { lang: 'zh' }

  // 2) 渲染项目卡片（按语言）
  function renderProjects() {
    const grid = $('#projects-grid')
    if (!grid) return
    const list = i18n[state.lang].projects.list
    grid.innerHTML = ''
    list.forEach((p) => {
      const card = document.createElement('article')
      card.className = 'card'
      card.innerHTML = `
        <div class="thumb">${escapeHtml(p.imageText || 'PROJECT')}</div>
        <div class="content">
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.description)}</p>
        </div>
        <div class="tags">
          ${p.tags.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="actions">
          ${p.links?.demo ? `<a class="btn btn-outline" href="${encodeURI(p.links.demo)}" target="_blank" rel="noopener">Demo</a>` : ''}
          ${p.links?.github ? `<a class="btn" href="${encodeURI(p.links.github)}" target="_blank" rel="noopener">GitHub</a>` : ''}
        </div>
      `
      grid.appendChild(card)
    })
  }

  // 3) 滚动导航高亮
  function setupScrollSpy() {
    const sections = ['about', 'projects', 'skills', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const navLinks = $$('.nav a')
    const linkById = Object.fromEntries(
      navLinks
        .map((a) => [a.getAttribute('href'), a])
        .filter(([href]) => href && href.startsWith('#'))
        .map(([href, a]) => [href.slice(1), a])
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove('active'))
            const active = linkById[id]
            if (active) active.classList.add('active')
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((sec) => observer.observe(sec))
  }

  // 4) 主题切换
  function setupTheme() {
    const root = document.documentElement
    const key = 'pref-theme'
    const btn = $('#theme-toggle')

    function apply(theme) {
      root.setAttribute('data-theme', theme)
      try {
        localStorage.setItem(key, theme)
      } catch {}
      if (btn) btn.textContent = theme === 'dark' ? '🌙' : '🌞'
    }

    // 优先使用存储，其次跟随系统
    let theme = 'dark'
    try {
      theme = localStorage.getItem(key) || theme
    } catch {}
    if (!theme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme = prefersDark ? 'dark' : 'light'
    }
    apply(theme)

    if (btn) {
      btn.addEventListener('click', () => {
        apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
      })
    }
  }

  // 5) 语言切换与渲染
  function setupLanguage() {
    const key = 'pref-lang'
    const btn = $('#lang-toggle')
    const root = document.documentElement

    function apply(lang) {
      state.lang = lang
      // 文档级别
      root.setAttribute('lang', i18n[lang].htmlLang)
      document.title = i18n[lang].siteTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', i18n[lang].metaDescription)
      if (btn) {
        btn.textContent = i18n[lang].langButton
        btn.setAttribute('aria-label', i18n[lang].langToggleLabel)
      }

      // Header / Nav
      const logo = $('.logo')
      if (logo) logo.textContent = i18n[lang].name
      const navLinks = $$('.nav a')
      if (navLinks.length >= 4) {
        navLinks[0].textContent = i18n[lang].nav.about
        navLinks[1].textContent = i18n[lang].nav.projects
        navLinks[2].textContent = i18n[lang].nav.skills
        navLinks[3].textContent = i18n[lang].nav.contact
      }

      // Hero
      const eyebrow = $('.hero .eyebrow')
      const h1 = $('.hero h1')
      const subtitle = $('.hero .subtitle')
      const heroBtns = $$('.hero-actions .btn')
      if (eyebrow) eyebrow.textContent = i18n[lang].hero.eyebrow
      if (h1) h1.textContent = i18n[lang].name
      if (subtitle) subtitle.textContent = i18n[lang].hero.subtitle
      if (heroBtns.length >= 2) {
        heroBtns[0].textContent = i18n[lang].hero.resume
        heroBtns[1].textContent = i18n[lang].hero.contact
      }

      // About
      const aboutTitle = $('#about h2')
      const aboutP = $('#about p')
      const aboutLis = $$('#about .highlights li')
      if (aboutTitle) aboutTitle.textContent = i18n[lang].about.title
      if (aboutP) aboutP.textContent = i18n[lang].about.p
      if (aboutLis.length >= 3) {
        aboutLis[0].textContent = i18n[lang].about.highlights[0]
        aboutLis[1].textContent = i18n[lang].about.highlights[1]
        aboutLis[2].textContent = i18n[lang].about.highlights[2]
      }

      // Projects
      const projectsTitle = $('#projects .section-head h2')
      const projectsDesc = $('#projects .section-head .section-desc')
      if (projectsTitle) projectsTitle.textContent = i18n[lang].projects.title
      if (projectsDesc) projectsDesc.textContent = i18n[lang].projects.desc
      renderProjects()

      // Skills
      const skillsTitle = $('#skills h2')
      if (skillsTitle) skillsTitle.textContent = i18n[lang].skills.title

      // Contact
      const contactTitle = $('#contact h2')
      const contactDesc = $('#contact p')
      const contactLis = $$('#contact .contact-list li')
      if (contactTitle) contactTitle.textContent = i18n[lang].contact.title
      if (contactDesc) contactDesc.textContent = i18n[lang].contact.desc
      if (contactLis.length >= 5) {
        contactLis[4].textContent = i18n[lang].contact.location
      }

      // Footer
      const footerP = $('.site-footer p')
      if (footerP) {
        footerP.innerHTML = `© <span id="year"></span> ${escapeHtml(i18n[lang].name)}. ${escapeHtml(i18n[lang].footer.rights)}`
        setupYear() // 重新设置年份
      }

      try {
        localStorage.setItem(key, lang)
      } catch {}
    }

    // 初始化语言：优先本地存储
    let lang = 'zh'
    try {
      lang = localStorage.getItem(key) || lang
    } catch {}
    apply(lang)

    if (btn) {
      btn.addEventListener('click', () => {
        apply(state.lang === 'zh' ? 'en' : 'zh')
      })
    }
  }

  // 6) 年份
  function setupYear() {
    const y = $('#year')
    if (y) y.textContent = new Date().getFullYear().toString()
  }

  // 工具：简单转义
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupTheme()
    setupLanguage()
    setupScrollSpy()
    setupYear()
  })
})()