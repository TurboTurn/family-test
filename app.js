// ===== 题目数据 =====
const questions = [
  {
    text: "Q1. 小时候，你家的氛围更接近？",
    options: [
      { text: "父母经常争吵，我习惯了躲在房间里", score: "A" },
      { text: "表面平静，但有很多话不能说", score: "B" },
      { text: "有矛盾但也有温情，说不清好还是不好", score: "C" },
      { text: "家人之间很亲密，但我有时感觉喘不过气", score: "D" },
    ]
  },
  {
    text: "Q2. 当你做一个重要决定时，第一反应是？",
    options: [
      { text: "先想：我爸妈会怎么看这件事", score: "D" },
      { text: "自己想清楚，但会莫名焦虑", score: "A" },
      { text: "做了再说，事后才发现和他们想的一样", score: "B" },
      { text: "听自己的，偶尔参考父母意见", score: "C" },
    ]
  },
  {
    text: "Q3. 在亲密关系里，你容易？",
    options: [
      { text: "过度付出，害怕对方不满意", score: "A" },
      { text: "复制父母的相处模式，虽然自己也讨厌", score: "B" },
      { text: "偶尔有边界问题，但能及时调整", score: "C" },
      { text: "让伴侣或朋友替代父母的角色", score: "D" },
    ]
  },
  {
    text: "Q4. 听到「你越来越像你妈/你爸」，你的感受？",
    options: [
      { text: "某种程度上刺痛了我", score: "A" },
      { text: "我不觉得像，但这句话让我不舒服", score: "B" },
      { text: "有些地方像，我已经接受了", score: "C" },
      { text: "挺骄傲的，他们是我的榜样", score: "D" },
    ]
  },
  {
    text: "Q5. 你怎么处理自己的负面情绪？",
    options: [
      { text: "压下去，不想麻烦别人", score: "B" },
      { text: "会爆发，事后又后悔", score: "A" },
      { text: "找人说或者自己消化，大多数时候还好", score: "C" },
      { text: "需要家人帮我排解，或者回家才能平静", score: "D" },
    ]
  },
  {
    text: "Q6. 你对「家」这个字的第一感受是？",
    options: [
      { text: "温暖但沉重", score: "D" },
      { text: "复杂，说不清楚", score: "A" },
      { text: "需要逃离却又想回去的地方", score: "B" },
      { text: "就是个普通的地方，有好有坏", score: "C" },
    ]
  },
  {
    text: "Q7. 你有没有想过「我绝对不要变成我父母那样」？",
    options: [
      { text: "经常有，这是我努力的动力", score: "A" },
      { text: "说过，但有时候照镜子会吓一跳", score: "B" },
      { text: "偶尔，但没那么强烈", score: "C" },
      { text: "没有，我觉得他们挺好的", score: "D" },
    ]
  },
  {
    text: "Q8. 当父母否定你的时候，你会？",
    options: [
      { text: "生气，但最终还是怀疑自己", score: "A" },
      { text: "表面无所谓，内心会反复回想", score: "B" },
      { text: "不开心，但不会太影响自我判断", score: "C" },
      { text: "很受伤，需要很久才能恢复", score: "D" },
    ]
  },
  {
    text: "Q9. 你觉得现在的性格，原生家庭占了多少影响？",
    options: [
      { text: "超过一半，很多是我不想要的部分", score: "A" },
      { text: "可能很多，但我没认真想过", score: "B" },
      { text: "有影响，但我也重塑了不少", score: "C" },
      { text: "几乎全部，但我觉得挺好的", score: "D" },
    ]
  },
  {
    text: "Q10. 看到「原生家庭」这个词，你第一反应是？",
    options: [
      { text: "有点沉，但想继续了解自己", score: "A" },
      { text: "觉得这词被过度消费了，但还是点进来了", score: "B" },
      { text: "平静，这是人生的一部分", score: "C" },
      { text: "有点防御，感觉在说我父母不好", score: "D" },
    ]
  },
]

// ===== 结果数据 =====
const results = {
  A: {
    badge: "🦋",
    type: "自我重建者",
    quote: "你知道伤口在哪里，也在努力长出新的皮肤。",
    desc: "你有很强的自我觉察能力，能清楚感知到原生家庭带来的影响，也在有意识地试图挣脱那些不属于你的模式。这种清醒本身就很了不起，但也容易带来内耗——你清楚地看见问题，却不总能快速改变它。\n\n好消息是：你已经走在正确的路上了。意识到问题，是改变的第一步，也是最难的一步。",
    tags: ["高度自省", "内耗体质", "成长型人格", "情绪敏感"],
  },
  B: {
    badge: "🪞",
    type: "隐性承袭者",
    quote: "你以为自己已经不像他们了，但镜子里，有时会出现他们的影子。",
    desc: "你可能觉得自己和父母差别很大，甚至刻意在某些方面与他们保持距离。但原生家庭的影响往往不是通过思想传递的，而是通过行为模式、情绪反应、关系选择悄悄渗入的。\n\n你不是在故意复制，只是有些模式还没被看见。当你开始注意到某个反应好像和父母一样时，改变就开始了。",
    tags: ["无意识模仿", "防御型思维", "需要觉察", "潜意识深度"],
  },
  C: {
    badge: "🌿",
    type: "和解共存者",
    quote: "你接受了那个不完美的起点，但你没有停在那里。",
    desc: "你对原生家庭的影响有相对理性的认知——既不否认它的存在，也不被它所定义。你可能经历了一段时间的挣扎或反思，最终找到了一种和自己、和家庭都能相处的方式。\n\n这种平静不是麻木，而是经历后的成熟。你知道自己是什么样的人，也知道自己想成为什么样的人。",
    tags: ["情绪稳定", "边界清晰", "自我接纳", "成熟型人格"],
  },
  D: {
    badge: "🔗",
    type: "深度捆绑者",
    quote: "家是你的港湾，也是你出发的起点——但有时你忘了出发。",
    desc: "家庭在你的情感世界里占据着很重要的位置，父母的看法、情绪和期待深深影响着你的决策和自我感受。这不一定是坏事——家庭连结本身是美好的。\n\n但值得思考的是：有些时候，你的选择是真的来自内心，还是来自对家庭期望的回应？找到自己独立的自我，不会让你和家人更疏远，反而可能让关系更真实。",
    tags: ["家庭依附", "边界模糊", "情感深厚", "需要独立空间"],
  },
}

// ===== 状态 =====
let currentQ = 0
let scores = { A: 0, B: 0, C: 0, D: 0 }
let testCount = 12847

// ===== 工具函数 =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
  document.getElementById(id).classList.add('active')
  window.scrollTo(0, 0)
}

function updateCount() {
  const n = testCount + Math.floor(Math.random() * 5 + 1)
  testCount = n
  const el = document.getElementById('test-count')
  if (el) el.textContent = n.toLocaleString('zh-CN')
}

// ===== 开始测试 =====
function startTest() {
  currentQ = 0
  scores = { A: 0, B: 0, C: 0, D: 0 }
  showPage('page-quiz')
  renderQuestion()
}

// ===== 渲染题目 =====
function renderQuestion() {
  const q = questions[currentQ]
  document.getElementById('question-text').textContent = q.text
  document.getElementById('current-q').textContent = currentQ + 1
  document.getElementById('progress-fill').style.width = ((currentQ + 1) / questions.length * 100) + '%'

  const optionsEl = document.getElementById('options')
  optionsEl.innerHTML = ''

  const shuffled = [...q.options].sort(() => Math.random() - 0.5)

  shuffled.forEach(opt => {
    const btn = document.createElement('button')
    btn.className = 'option-btn'
    btn.textContent = opt.text
    btn.addEventListener('click', () => selectOption(btn, opt.score))
    optionsEl.appendChild(btn)
  })

  // 重置动画
  const qw = document.querySelector('.question-wrap')
  qw.style.animation = 'none'
  void qw.offsetHeight
  qw.style.animation = ''
}

// ===== 选择选项 =====
function selectOption(btn, score) {
  // 防重复点击
  document.querySelectorAll('.option-btn').forEach(b => {
    b.replaceWith(b.cloneNode(true))
  })
  btn.classList.add('selected')

  scores[score]++

  setTimeout(() => {
    currentQ++
    if (currentQ < questions.length) {
      renderQuestion()
    } else {
      showResult()
    }
  }, 380)
}

// ===== 展示结果 =====
function showResult() {
  const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
  const r = results[top]

  document.getElementById('result-badge').textContent = r.badge
  document.getElementById('result-type').textContent = r.type
  document.getElementById('result-quote').textContent = r.quote
  document.getElementById('result-desc').textContent = r.desc

  const tagsEl = document.getElementById('result-tags')
  tagsEl.innerHTML = r.tags.map(t => '<span class="tag">' + t + '</span>').join('')

  renderChart()
  showPage('page-result')
  updateCount()
}

// ===== 渲染分布图 =====
function renderChart() {
  const labels = { A: '自我重建', B: '隐性承袭', C: '和解共存', D: '深度捆绑' }
  const total = Object.values(scores).reduce((a, b) => a + b, 0)
  const chartEl = document.getElementById('chart')
  chartEl.innerHTML = ''

  Object.entries(scores).forEach(([key, val]) => {
    const pct = total > 0 ? Math.round((val / total) * 100) : 0
    const row = document.createElement('div')
    row.className = 'chart-row'
    row.innerHTML =
      '<span class="chart-label">' + labels[key] + '</span>' +
      '<div class="chart-bar-wrap"><div class="chart-bar" style="width:0%" data-pct="' + pct + '"></div></div>' +
      '<span class="chart-val">' + pct + '%</span>'
    chartEl.appendChild(row)
  })

  setTimeout(() => {
    document.querySelectorAll('.chart-bar').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%'
    })
  }, 100)
}

// ===== 生成分享图片 =====
function shareImage() {
  const r = getCurrentResult()
  if (!r) return

  const canvas = document.createElement('canvas')
  const dpr = window.devicePixelRatio || 2
  const W = 750, H = 1080
  canvas.width = W * dpr
  canvas.height = H * dpr
  canvas.style.width = W + 'px'
  canvas.style.height = H + 'px'
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  // 背景渐变
  const grad = ctx.createLinearGradient(0, 0, W, H)
  grad.addColorStop(0, '#ede0ff')
  grad.addColorStop(1, '#e8f4ff')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)

  // 卡片
  ctx.fillStyle = '#fff'
  roundRect(ctx, 40, 60, W - 80, H - 160, 32)
  ctx.fill()

  // emoji
  ctx.font = '80px serif'
  ctx.textAlign = 'center'
  ctx.fillText(r.badge, W / 2, 220)

  // 标题
  ctx.fillStyle = '#5a3d9a'
  ctx.font = 'bold 52px PingFang SC, sans-serif'
  ctx.fillText(r.type, W / 2, 310)

  // 分割线
  ctx.strokeStyle = 'rgba(124,92,191,0.2)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(120, 350)
  ctx.lineTo(W - 120, 350)
  ctx.stroke()

  // quote
  ctx.fillStyle = '#7c5cbf'
  ctx.font = 'italic 30px PingFang SC, sans-serif'
  wrapText(ctx, r.quote, W / 2, 410, W - 160, 46)

  // tags
  const tagY = 560
  const tagColors = ['rgba(124,92,191,0.12)', 'rgba(124,92,191,0.18)', 'rgba(124,92,191,0.1)', 'rgba(124,92,191,0.15)']
  let tagX = 0
  const tagWidths = r.tags.map(t => measureTag(ctx, t))
  const totalW = tagWidths.reduce((a, b) => a + b + 16, 0) - 16
  tagX = (W - totalW) / 2
  r.tags.forEach((tag, i) => {
    const tw = tagWidths[i]
    ctx.fillStyle = tagColors[i % tagColors.length]
    roundRect(ctx, tagX, tagY, tw, 52, 26)
    ctx.fill()
    ctx.fillStyle = '#7c5cbf'
    ctx.font = '26px PingFang SC, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(tag, tagX + tw / 2, tagY + 34)
    tagX += tw + 16
  })

  // 底部提示
  ctx.fillStyle = '#bbb'
  ctx.font = '24px PingFang SC, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('你被原生家庭影响了多深？', W / 2, H - 130)
  ctx.font = '22px PingFang SC, sans-serif'
  ctx.fillStyle = '#ccc'
  ctx.fillText('扫码测测你的类型 ↓', W / 2, H - 95)

  // 输出图片
  const dataUrl = canvas.toDataURL('image/png')
  const imgEl = document.getElementById('share-img')
  imgEl.src = dataUrl
  document.getElementById('share-preview').style.display = 'block'
  document.getElementById('share-preview').scrollIntoView({ behavior: 'smooth' })

  // 同时尝试原生分享
  canvas.toBlob(blob => {
    if (navigator.share && blob) {
      const file = new File([blob], 'result.png', { type: 'image/png' })
      navigator.share({ files: [file], title: r.type, text: r.quote }).catch(() => {})
    }
  })
}

function measureTag(ctx, text) {
  ctx.font = '26px PingFang SC, sans-serif'
  return ctx.measureText(text).width + 48
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function wrapText(ctx, text, x, y, maxW, lineH) {
  const chars = text.split('')
  let line = ''
  let cy = y
  for (let i = 0; i < chars.length; i++) {
    const test = line + chars[i]
    if (ctx.measureText(test).width > maxW && line !== '') {
      ctx.fillText(line, x, cy)
      line = chars[i]
      cy += lineH
    } else {
      line = test
    }
  }
  ctx.fillText(line, x, cy)
}

// ===== 复制结果链接 =====
function copyLink() {
  const top = getCurrentResultKey()
  const url = window.location.origin + window.location.pathname + '?result=' + top
  navigator.clipboard.writeText(url).then(() => {
    showToast('✅ 链接已复制，发给朋友来测吧！')
  }).catch(() => {
    // fallback
    const input = document.createElement('input')
    input.value = url
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    showToast('✅ 链接已复制，发给朋友来测吧！')
  })
}

function getCurrentResultKey() {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
}

function getCurrentResult() {
  return results[getCurrentResultKey()]
}

function showToast(msg) {
  let toast = document.querySelector('.share-toast')
  if (!toast) {
    toast = document.createElement('div')
    toast.className = 'share-toast'
    document.body.appendChild(toast)
  }
  toast.textContent = msg
  toast.classList.add('show')
  setTimeout(() => toast.classList.remove('show'), 2500)
}

// ===== 重测 =====
function retryTest() {
  showPage('page-home')
}

// ===== 挂载到 window，确保 onclick 可访问 =====
window.startTest = startTest
window.shareImage = shareImage
window.copyLink = copyLink
window.retryTest = retryTest

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  updateCount()

  // 读取 URL 参数，直接展示对应结果（分享链接落地）
  const params = new URLSearchParams(window.location.search)
  const resultKey = params.get('result')
  if (resultKey && results[resultKey]) {
    scores = { A: 0, B: 0, C: 0, D: 0 }
    scores[resultKey] = 10
    showResult()
    setTimeout(() => {
      const wrap = document.querySelector('.result-wrap')
      if (wrap) {
        const tip = document.createElement('div')
        tip.style.cssText = 'text-align:center;font-size:13px;color:#a07ed6;margin-bottom:16px;background:rgba(124,92,191,0.08);padding:10px 16px;border-radius:12px;'
        tip.textContent = '朋友分享了他的测试结果 · 点下方按钮测测你自己'
        wrap.insertBefore(tip, wrap.firstChild)
      }
    }, 100)
  }
})
