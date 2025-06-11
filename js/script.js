// 基本脚本
document.addEventListener('DOMContentLoaded', function() {
  // 初始化应用
  initApp();
});

const videosData = [
  {
    id: 1,
    title: "AI实战第一课，从认知到效能提升",
    description: "深入浅出的AI知识框架，帮助你建立对人工智能的系统认知。通过实际案例演示多款热门AI工具的应用场景，讲解如何将AI无缝融入日常工作流程，显著提升工作效率。适合希望快速掌握AI技能并实现个人效能突破的职场人士。密码：RFA8",
    date: "2025年5月26日",
    duration: "60分钟",
    audience: "青岛链家「早间“链”播」",
    link: "https://meeting.tencent.com/crm/lJ505k6o90"
  },
  {
    id: 2,
    title: "AI第一课，从认识到AI为我提效",
    description: "讨论AI工具的发展和应用，分享AI工具在会议方案制作、数据分析、智能问答等方面的应用，并对未来AI技术的发展进行了展望。介绍了贝壳公司内部的一些AI工具，如备好问、贝拉平台等，并鼓励大家积极拥抱AI技术。",
    date: "2025年5月19日",
    duration: "90分钟",
    audience: "西南区域客户赋能团队",
    link: "https://meeting.tencent.com/crm/KPPjWRDqc1"
  },
  {
    id: 3,
    title: "从初识到上手，了解DeepSeek的第一课",
    description: "DeepSeek基本情况，深度思考能力来源；推理模型Prompt技巧，指令到需求；搭建个人知识库学习助手，更多探索等。",
    date: "2025年2月14日",
    duration: "60分钟",
    audience: "对AI感兴趣的伙伴",
    link: "https://letsai.ke.com/sites/3171.html"
  },
  {
    id: 4,
    title: "Let's AI 创意集市系列课程 玩转AI",
    description: "零基础友好，从零讲起，让每位伙伴能听懂；实战导向，Prompt起步，搭建你的首个智能体；布道师护航，集团AI布道师分享，答疑解惑。",
    date: "2024年10月18日",
    duration: "60分钟",
    audience: "参与大赛的全体伙伴",
    link: "https://elearning.ke.com/kng/#/course/play?kngId=c8c1901a-54af-44ae-a14f-962e9a105ab3&projectId=&btid=&gwnlUrl=&locateshare=5b6efbff-5d52-4518-b093-b91aa154a69b"
  },
  {
    id: 5,
    title: "AI工作坊，绘画小能手揭秘分享",
    description: "绘画小能手是如何制作的，手把手教你打造用于工作场景的AI机器人　1.0版绘画小能手提示词揭秘，贝壳闹海、链家经纪人形象提示词优化等。绘画小能手提示词+工作流组合。",
    date: "2024年7月31日",
    duration: "60分钟",
    audience: "布道师沙龙",
    link: "https://letsai.ke.com/sites/745.html"
  },
  {
    id: 6,
    title: "AI布道师沙龙，初识AI到业务应用",
    description: "AI学习路径，从接触到AI学习路径方法，以及计划等。本次作业实践，搭建AI个人业务分身，实现客服智能助手。AI在工作生活的更多探索。",
    date: "2024年6月11日",
    duration: "60分钟",
    audience: "布道师沙龙",
    link: "https://letsai.ke.com/sites/470.html"
  }
];

const coursesData = [
  {
    id: 1,
    title: "AIGC海报机器人",
    difficulty: 4,
    updateDate: "2025年5月29日",
    description: "通过coze工作流实现，新闻信息爬取，加工，海报制作，推送企业微信，目前实现推送房地产政策，和AIGC新闻海报。趣味性增加根据天气推荐穿搭生成穿搭人物形象",
    tools: "coze 企微机器人",
    link: "https://ayoyoqiu.github.io/aiagc-poster/",
    status: "已完结"
  },
  {
    id: 2,
    title: "人生的第一个AI应用",
    difficulty: 4,
    updateDate: "2025年4月14日",
    description: "起因是前几天Manus爆火，加上deepseek的能力提升，开始动手搞应用，通过输入心情推荐小酒酒的一款应用，整个过程没有一行代码是我写的全是AI实现的。",
    tools: "Windsurf+Coze工作流+微信开发者工具",
    link: "https://waytoagi.feishu.cn/wiki/L9ZJw5D9niGz9ikUcMhckI7nnz7?from=from_copylink",
    status: "已完结"
  },
  {
    id: 3,
    title: "与Cursor协作0代码搭建门户网站",
    difficulty: 2,
    updateDate: "2024年11月1日",
    description: "日常运营的业务内容比较多，想通过一个网站，可以让城市运营伙伴想知道当前和历史都有哪些活动，可以有个集成的门户可以查看",
    tools: "coursor",
    link: "https://ayoyoqiu.github.io/worklist/",
    status: "已完结"
  }
];

function initApp() {
  const app = document.getElementById('app');
  
  // 创建完整页面结构
  app.innerHTML = `
    <!-- 头部区域 -->
    <div class="fixed-header">
      <header class="header container">
        <h1>
          <div class="title-container">
            <span class="title-highlight">AIGC实验室合集</span>
            <span class="title-badge">精选</span>
          </div>
        </h1>
        <div class="date-display">
          <span id="current-date"></span>
        </div>
      </header>
      
      <!-- 导航区域 -->
      <nav class="nav-wrapper">
        <div class="nav nav-container">
          <a href="#share" class="nav-item" data-section="share">
            <i class="fas fa-play-circle"></i>往期分享
          </a>
          <a href="#course" class="nav-item" data-section="course">
            <i class="fas fa-laptop-code"></i>AI实践探索
          </a>
          <a href="#tools" class="nav-item" data-section="tools">
            <i class="fas fa-tools"></i>AI工具集合
          </a>
          <a href="#contact" class="nav-item" data-section="contact">
            <i class="fas fa-envelope"></i>联系我
          </a>
        </div>
      </nav>
    </div>
    
    <!-- 内容区域 -->
    <div class="content">
      <!-- 往期分享部分 -->
      <section id="share" class="content-section">
        <div class="section-header">
          <div class="section-title">
            <i class="fas fa-play-circle"></i>往期分享
          </div>
          <div class="section-divider"></div>
        </div>
        
        <div class="card-container" id="video-container">
          <!-- 视频卡片将通过JS动态生成 -->
        </div>
      </section>
      
      <!-- AI实践探索部分 -->
      <section id="course" class="content-section">
        <div class="section-header">
          <div class="section-title">
            <i class="fas fa-laptop-code"></i>AI实践探索
          </div>
          <div class="section-divider"></div>
        </div>
        
        <div class="course-container" id="course-container">
          <!-- 课程卡片将通过JS动态生成 -->
        </div>
      </section>
      
      <!-- AI工具集合部分 -->
      <section id="tools" class="content-section">
        <div class="section-header">
          <div class="section-title">
            <i class="fas fa-tools"></i>AI工具集合
          </div>
          <div class="section-divider"></div>
        </div>
        
        <div class="tools-container">
          <!-- 大模型工具 -->
          <div class="tool-category">
            <h3 class="category-title"><i class="fas fa-brain"></i> 大模型工具</h3>
            <div class="tool-cards">
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-robot"></i></div>
                <h4>ChatGPT</h4>
                <p>OpenAI的超强对话AI，支持文本、图像处理，可完成创意写作、编程、信息咨询等多种任务</p>
                <a href="https://chatgpt.com/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-comment-dots"></i></div>
                <h4>Claude</h4>
                <p>Anthropic公司旗舰大模型，擅长长文本理解、复杂推理，支持文档分析和创意内容生成</p>
                <a href="https://claude.ai/login?returnTo=%2F%3F" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-rocket"></i></div>
                <h4>DeepSeek</h4>
                <p>国内顶尖大语言模型，提供强大知识库和工具插件支持，专为中文用户优化</p>
                <a href="https://chat.deepseek.com/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-comment-alt"></i></div>
                <h4>Kimi</h4>
                <p>主打中文理解和创作的AI对话助手，支持联网搜索和文档处理，对学术和专业内容支持良好</p>
                <a href="https://www.kimi.com/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-sparkles"></i></div>
                <h4>Gemini</h4>
                <p>Google的多模态人工智能，支持视频、图像和文本理解，强大的创意和分析能力</p>
                <a href="https://gemini.google.com/u/0/app/7b4d696500847730?pli=1" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-robot"></i></div>
                <h4>Grok</h4>
                <p>xAI推出的交互式AI助手，实时联网能力强，支持多种信息处理并具有独特幽默感</p>
                <a href="https://grok.com/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
          
          <!-- AI生成图像工具 -->
          <div class="tool-category">
            <h3 class="category-title"><i class="fas fa-image"></i> AI生成图像工具</h3>
            <div class="tool-cards">
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-paint-brush"></i></div>
                <h4>即梦</h4>
                <p>剪映推出的AI图像创作工具，国内顶尖生图产品，支持文本生成图像和图像编辑功能</p>
                <a href="https://jimeng.jianying.com/ai-tool/home/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-wand-magic-sparkles"></i></div>
                <h4>可灵</h4>
                <p>专业AI艺术创作平台，提供多种风格创作模板和一键生图，支持超高清图像输出</p>
                <a href="https://app.klingai.com/cn/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
          
          <!-- AI办公工具 -->
          <div class="tool-category">
            <h3 class="category-title"><i class="fas fa-briefcase"></i> AI办公工具</h3>
            <div class="tool-cards">
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-file-alt"></i></div>
                <h4>通义</h4>
                <p>阿里巴巴推出的AI助手，能够帮助用户进行文档处理、信息检索和内容创作</p>
                <a href="https://www.doubao.com/download/desktop?ug_apk_token=dkR31" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-file-word"></i></div>
                <h4>WPS AI</h4>
                <p>金山办公软件推出的智能办公助手，提供文档润色、自动排版和内容生成功能</p>
                <a href="https://365.kdocs.cn/3rd/docer/solution/classify/382/396" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
          
          <!-- AI智能体工具 -->
          <div class="tool-category">
            <h3 class="category-title"><i class="fas fa-robot"></i> AI智能体工具</h3>
            <div class="tool-cards">
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-cogs"></i></div>
                <h4>Coze</h4>
                <p>字节推出的低代码智能体开发平台，支持快速构建和部署各类智能体应用和机器人</p>
                <a href="https://www.coze.cn/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-project-diagram"></i></div>
                <h4>Dify</h4>
                <p>开源LLM应用开发平台，提供完整工具链支持创建、部署和监控AI应用和智能体</p>
                <a href="https://dify.ai/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
          
          <!-- AI编程工具 -->
          <div class="tool-category">
            <h3 class="category-title"><i class="fas fa-code"></i> AI编程工具</h3>
            <div class="tool-cards">
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-wind"></i></div>
                <h4>Windsurf</h4>
                <p>智能代码编辑器，特别适合Web开发，提供实时代码建议和错误检测功能</p>
                <a href="https://windsurf.com/editor" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-terminal"></i></div>
                <h4>Cursor</h4>
                <p>AI增强型代码编辑器，将大语言模型集成到开发环境中，大幅提升编码效率</p>
                <a href="https://www.cursor.com/cn" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
              
              <div class="tool-card">
                <div class="tool-icon"><i class="fas fa-code-branch"></i></div>
                <h4>Trae</h4>
                <p>专为中文开发者设计的AI编程助手，支持多种语言和框架，代码解释清晰详尽</p>
                <a href="https://www.trae.com.cn/" class="tool-link" target="_blank">访问官网 <i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 联系我部分 -->
      <section id="contact" class="content-section">
        <div class="section-header">
          <div class="section-title">
            <i class="fas fa-envelope"></i>联系我
          </div>
          <div class="section-divider"></div>
        </div>
        
        <div class="contact-container">
          <div class="profile-card">
            <div class="profile-header">
              <div class="profile-avatar">
                <img src="https://img520.com/oJMDNl.png" alt="yoyo头像">
              </div>
              <div class="profile-info">
                <h2 class="profile-name">yoyo</h2>
                <div class="profile-titles">
                  <a href="https://letsai.ke.com/sites/3584.html?menu-id=68&mininav-id=297" class="title-tag primary" target="_blank">贝壳AI布道师</a>
                  <span class="title-tag">贝壳讲师</span>
                  <span class="title-tag">花桥讲师</span>
                </div>
                <div class="profile-social">
                  <a href="javascript:void(0)" class="social-link" id="wechat-link">
                    <i class="fab fa-weixin"></i>
                  </a>
                  <a href="javascript:void(0)" class="social-link" id="newsboy-link">
                    <i class="fas fa-newspaper"></i>
                  </a>
                </div>
                <div id="qrcode-modal" class="qrcode-modal">
                  <div class="qrcode-content">
                    <span class="close-modal">&times;</span>
                    <img src="https://img520.com/rlLz90.jpg" alt="微信二维码" class="qrcode-img">
                    <p>扫码添加微信</p>
                  </div>
                </div>
                <div id="newsboy-modal" class="qrcode-modal">
                  <div class="qrcode-content">
                    <span class="close-newsboy-modal">&times;</span>
                    <img src="https://img520.com/YUSiYC.png" alt="小报童图片" class="qrcode-img">
                    <p>小报童图片</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="profile-bio">
              <h3 class="bio-title">个人简介</h3>
              <ul class="achievement-list">
                <li><i class="fas fa-award"></i> 贝壳找房集团2024年度优秀AI布道师一等奖</li>
                <li><i class="fas fa-certificate"></i> 集团首批AI布道师、布道师认证交流评委</li>
                <li><i class="fas fa-palette"></i> 绘画小能手、推荐有奖招聘文案、AIGC新闻早报、房地产政策新闻早报等智能体的创造者</li>
                <li><i class="fas fa-trophy"></i> Let's AI 大赛潜力无限奖、AI+创意奖</li>
                <li><i class="fas fa-star"></i> Bella 2024年度最受用户欢迎TOP10，2024年度创作者排行榜TOP30</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  
  // 初始化导航高亮和内容显示
  initNavigation();
  
  // 加载视频数据
  renderVideos();
  
  // 加载课程数据
  renderCourses();
  
  // 初始化微信二维码模态窗口
  initWechatQRCode();
  initNewsboy();
  
  // 初始化并更新实时日期显示
  updateCurrentDate();
  // 每秒更新一次日期和时间
  setInterval(updateCurrentDate, 1000);
}

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const contentSections = document.querySelectorAll('.content-section');
  
  // 默认显示第一个部分
  navItems[0].classList.add('active');
  contentSections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = 'none';
    }
  });
  
  // 导航点击事件
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 移除所有active类
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // 添加当前active类
      this.classList.add('active');
      
      // 显示对应内容，隐藏其他内容
      const targetSection = this.getAttribute('data-section');
      contentSections.forEach(section => {
        if (section.id === targetSection) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
}

function renderVideos() {
  const videoContainer = document.getElementById('video-container');
  
  // 先创建一个模态窗口容器
  const modalContainer = document.createElement('div');
  modalContainer.id = 'video-detail-modal';
  modalContainer.className = 'video-modal';
  modalContainer.innerHTML = `
    <div class="video-modal-content">
      <span class="close-video-modal">&times;</span>
      <h2 id="modal-title"></h2>
      <div class="modal-meta">
        <div class="modal-date"><i class="fas fa-calendar"></i> <span id="modal-date"></span></div>
        <div class="modal-duration"><i class="fas fa-clock"></i> <span id="modal-duration"></span></div>
        <div class="modal-audience"><i class="fas fa-users"></i> <span id="modal-audience"></span></div>
      </div>
      <p id="modal-description"></p>
      <div class="modal-actions">
        <button id="modal-play-button" class="play-button">
          <i class="fas fa-play-circle"></i>
          观看视频
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modalContainer);
  
  // 添加关闭按钮事件
  const closeBtn = document.querySelector('.close-video-modal');
  closeBtn.addEventListener('click', function() {
    modalContainer.classList.remove('active');
  });
  
  // 点击模态窗口边缘关闭
  modalContainer.addEventListener('click', function(event) {
    if (event.target === modalContainer) {
      modalContainer.classList.remove('active');
    }
  });
  
  videosData.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'card';
    
    // 准备精简版描述（最多显示60个字符）
    const shortDescription = video.description.length > 60 ? 
      video.description.substring(0, 60) + '...' : video.description;
    
    // 准备卡片内容HTML
    let cardHTML = `
      <div class="card-date">${video.date}</div>
      <div class="card-content">
        <h3>${video.title}</h3>
        <p class="short-description">${shortDescription}</p>
        <div class="info-container">
          <div class="duration">
            <i class="fas fa-clock"></i>${video.duration}
          </div>
          <div class="audience">
            <i class="fas fa-users"></i>${video.audience}
          </div>
        </div>
      </div>
      <div class="actions">
        <a href="#" class="play-button">
          <i class="fas fa-play-circle"></i>
          观看视频
        </a>
        <button class="detail-button">
          <i class="fas fa-info-circle"></i>
          查看详情
        </button>
      </div>
    `;
    
    videoCard.innerHTML = cardHTML;
    videoContainer.appendChild(videoCard);
    
    // 添加整个卡片的点击事件，点击卡片显示详情
    videoCard.addEventListener('click', function(event) {
      // 如果点击的是播放按钮，不触发此事件
      if (event.target.closest('.play-button')) {
        return;
      }
      
      // 设置模态窗口内容
      document.getElementById('modal-title').textContent = video.title;
      document.getElementById('modal-date').textContent = video.date;
      document.getElementById('modal-duration').textContent = video.duration;
      document.getElementById('modal-audience').textContent = video.audience;
      document.getElementById('modal-description').textContent = video.description;
      
      // 显示模态窗口
      modalContainer.classList.add('active');
      
      // 添加模态窗口中的观看按钮事件
      document.getElementById('modal-play-button').onclick = function() {
        if (video.link) {
          window.open(video.link, '_blank');
        } else {
          alert(`播放视频: ${video.title}`);
        }
      };
    });
    
    // 添加视频播放按钮点击事件
    const playButton = videoCard.querySelector('.play-button');
    playButton.setAttribute('href', video.link || '#');
    playButton.addEventListener('click', function(event) {
      event.stopPropagation(); // 阻止事件冒泡到卡片
      if (!video.link) {
        event.preventDefault();
        alert(`播放视频: ${video.title}`);
      }
    });
    
    // 添加详情按钮点击事件
    const detailButton = videoCard.querySelector('.detail-button');
    detailButton.addEventListener('click', function(event) {
      event.stopPropagation(); // 阻止事件冒泡到卡片
      
      // 设置模态窗口内容
      document.getElementById('modal-title').textContent = video.title;
      document.getElementById('modal-date').textContent = video.date;
      document.getElementById('modal-duration').textContent = video.duration;
      document.getElementById('modal-audience').textContent = video.audience;
      document.getElementById('modal-description').textContent = video.description;
      
      // 显示模态窗口
      modalContainer.classList.add('active');
    });
  });
}

// 更新实时日期和时间的函数
function updateCurrentDate() {
  const now = new Date();
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = weekdays[now.getDay()];
  
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      dateElement.innerHTML = `${year}-${month}-${day} ${hours}:${minutes}`;
    } else {
      dateElement.innerHTML = `${year}-${month}-${day} 星期${weekday} ${hours}:${minutes}:${seconds}`;
    }
  }
}

// 微信二维码模态窗口初始化函数
function initWechatQRCode() {
  const wechatLink = document.getElementById('wechat-link');
  const qrcodeModal = document.getElementById('qrcode-modal');
  const closeModal = document.querySelector('.close-modal');
  
  // 点击微信图标显示二维码
  if (wechatLink) {
    wechatLink.addEventListener('click', function() {
      qrcodeModal.classList.add('active');
    });
  }
  
  // 点击关闭按钮隐藏二维码
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      qrcodeModal.classList.remove('active');
    });
  }
  
  // 点击模态窗口背景关闭弹窗
  if (qrcodeModal) {
    qrcodeModal.addEventListener('click', function(event) {
      if (event.target === qrcodeModal) {
        qrcodeModal.classList.remove('active');
      }
    });
  }
}

// 小报童图片模态窗口初始化函数
function initNewsboy() {
  const newsboyLink = document.getElementById('newsboy-link');
  const newsboyModal = document.getElementById('newsboy-modal');
  const closeNewsboyModal = document.querySelector('.close-newsboy-modal');
  
  // 点击小报童图标显示图片
  if (newsboyLink) {
    newsboyLink.addEventListener('click', function() {
      newsboyModal.classList.add('active');
    });
  }
  
  // 点击关闭按钮隐藏图片
  if (closeNewsboyModal) {
    closeNewsboyModal.addEventListener('click', function() {
      newsboyModal.classList.remove('active');
    });
  }
  
  // 点击模态窗口背景关闭弹窗
  if (newsboyModal) {
    newsboyModal.addEventListener('click', function(event) {
      if (event.target === newsboyModal) {
        newsboyModal.classList.remove('active');
      }
    });
  }
}

function renderCourses() {
  const courseContainer = document.getElementById('course-container');
  
  // 先创建一个模态窗口容器
  if (!document.getElementById('course-detail-modal')) {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'course-detail-modal';
    modalContainer.className = 'course-modal';
    modalContainer.innerHTML = `
      <div class="course-modal-content">
        <span class="close-course-modal">&times;</span>
        <div class="modal-header">
          <h2 id="course-modal-title"></h2>
          <div class="course-status" id="course-modal-status"></div>
        </div>
        <div class="modal-meta">
          <div class="modal-date"><i class="fas fa-calendar-alt"></i> <span id="course-modal-date"></span></div>
          <div class="modal-difficulty" id="course-modal-difficulty"></div>
        </div>
        <div class="modal-tools" id="course-modal-tools"></div>
        <p id="course-modal-description"></p>
        <div class="modal-actions">
          <a id="course-modal-link" class="entry-button" target="_blank">
            进入学习 <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(modalContainer);
    
    // 添加关闭按钮事件
    const closeBtn = document.querySelector('.close-course-modal');
    closeBtn.addEventListener('click', function() {
      modalContainer.classList.remove('active');
    });
    
    // 点击模态窗口边缘关闭
    modalContainer.addEventListener('click', function(event) {
      if (event.target === modalContainer) {
        modalContainer.classList.remove('active');
      }
    });
  }
  
  coursesData.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    
    // 准备简短描述（最多80个字符）
    const shortDescription = course.description.length > 80 ? 
      course.description.substring(0, 80) + '...' : course.description;
    
    // 准备卡片HTML
    let cardHTML = `
      <div class="course-status ${course.status === '已完结' ? 'completed' : ''}">${course.status}</div>
      <h3>${course.title}</h3>
    `;
    
    // 判断课程类型，显示不同信息
    if (course.difficulty !== undefined) { // 已完结的实践项目
      // 显示难度星级
      let difficultyStars = '';
      for (let i = 0; i < course.difficulty; i++) {
        difficultyStars += '<i class="fas fa-star"></i>';
      }
      
      cardHTML += `
        <div class="course-meta">
          <div class="update-date"><i class="fas fa-calendar-alt"></i> 更新日期: ${course.updateDate}</div>
          <div class="difficulty">难度系数: ${difficultyStars}</div>
        </div>
        <div class="tools-used">
          <i class="fas fa-tools"></i> 工具: ${course.tools}
        </div>
        <p class="description short-description">${shortDescription}</p>
        <div class="actions">
          <a href="${course.link}" class="entry-button" target="_blank">
            进入学习 <i class="fas fa-arrow-right"></i>
          </a>
          <button class="detail-button">
            <i class="fas fa-info-circle"></i>
            查看详情
          </button>
        </div>
      `;
    } else { // 进行中的课程
      cardHTML += `
        <div class="instructor">
          <i class="fas fa-user-circle"></i>
          <div class="name">讲师: ${course.instructor} (${course.credentials})</div>
        </div>
        <div class="course-info">
          <div class="tag"><i class="fas fa-clock"></i> ${course.duration}</div>
          <div class="tag"><i class="fas fa-signal"></i> ${course.level}</div>
        </div>
        <p class="description short-description">${shortDescription}</p>
        <div class="actions">
          <a href="#" class="entry-button">
            进入学习 <i class="fas fa-arrow-right"></i>
          </a>
          <button class="detail-button">
            <i class="fas fa-info-circle"></i>
            查看详情
          </button>
        </div>
      `;
    }
    
    courseCard.innerHTML = cardHTML;
    courseContainer.appendChild(courseCard);
    
    // 添加卡片点击事件
    courseCard.addEventListener('click', function(event) {
      // 如果点击的是进入学习按钮，则不触发此事件
      if (event.target.closest('.entry-button')) {
        return;
      }
      
      showCourseDetails(course);
    });
    
    // 添加详情按钮点击事件
    const detailButton = courseCard.querySelector('.detail-button');
    detailButton.addEventListener('click', function(event) {
      event.stopPropagation(); // 阻止事件冒泡到卡片
      showCourseDetails(course);
    });
  });
  
  // 显示课程详情的函数
  function showCourseDetails(course) {
    const modalContainer = document.getElementById('course-detail-modal');
    const modalTitle = document.getElementById('course-modal-title');
    const modalStatus = document.getElementById('course-modal-status');
    const modalDate = document.getElementById('course-modal-date');
    const modalDifficulty = document.getElementById('course-modal-difficulty');
    const modalTools = document.getElementById('course-modal-tools');
    const modalDescription = document.getElementById('course-modal-description');
    const modalLink = document.getElementById('course-modal-link');
    
    // 设置模态窗口内容
    modalTitle.textContent = course.title;
    modalStatus.textContent = course.status;
    modalStatus.className = `course-status ${course.status === '已完结' ? 'completed' : ''}`;
    
    if (course.difficulty !== undefined) { // 已完结的实践项目
      // 显示难度星级
      let difficultyStars = '';
      for (let i = 0; i < course.difficulty; i++) {
        difficultyStars += '<i class="fas fa-star"></i>';
      }
      
      modalDate.textContent = course.updateDate;
      modalDifficulty.innerHTML = `难度系数: ${difficultyStars}`;
      modalTools.innerHTML = `<i class="fas fa-tools"></i> 工具: ${course.tools}`;
    } else { // 进行中的课程
      modalDate.textContent = ''; // 可能没有日期
      modalDifficulty.innerHTML = '';
      if (course.level) {
        modalTools.innerHTML = `<div class="tag"><i class="fas fa-signal"></i> ${course.level}</div>`;
      } else {
        modalTools.innerHTML = '';
      }
    }
    
    modalDescription.textContent = course.description;
    modalLink.href = course.link || '#';
    
    // 显示模态窗口
    modalContainer.classList.add('active');
  }
}

