const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2025-01-16', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: 'GO TO FHCY-STUDY', url: 'https://study.fhcy.top' },
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '技术无顶峰',
  HEO_HERO_TITLE_2: '学习无终点',
  HEO_HERO_TITLE_3: 'FHCY.TOP',
  HEO_HERO_TITLE_4: '学无止境',
  HEO_HERO_TITLE_5: '代码可以重构，人生无法重来。',
  HEO_HERO_TITLE_LINK: 'https://fhcy.top',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: 'Java', url: '/tag/Java' },
  HEO_HERO_CATEGORY_2: { title: '生活日常', url: '/tag/日常' },
  HEO_HERO_CATEGORY_3: { title: '更多标签', url: '/tag' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '先运行起来，再优化下去。',
    '今天挖的坑，明天含泪填。',
    '不怕慢，就怕站。',
    '不怕代码烂，就怕没人看。',
    '时间换空间，空间换时间。',
    '代码即人生，迭代即成长。'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/fhcy-fh',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.fhcy.top',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'CSS',
      img_1: '/images/heo/CSS.png',
      color_1: '#ffffff',
      title_2: 'docker',
      img_2: '/images/heo/docker.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'html',
      img_1: '/images/heo/html.png',
      color_1: '#ffffff',
      title_2: 'kafka',
      img_2: '/images/heo/kafka.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'linux',
      img_1: '/images/heo/linux.png',
      color_1: '#ffffff',
      title_2: 'mysql',
      img_2: '/images/heo/mysql.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'nginx',
      img_1: '/images/heo/nginx.png',
      color_1: '#ffffff',
      title_2: 'notion',
      img_2: '/images/heo/notion.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'python',
      img_1: '/images/heo/python.png',
      color_1: '#ffffff',
      title_2: 'rabbitmq',
      img_2: '/images/heo/rabbitmq.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Redis',
      img_1: '/images/heo/Redis.png',
      color_1: '#ffffff',
      title_2: 'shell',
      img_2: '/images/heo/shell.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'ubuntu',
      img_1: '/images/heo/ubuntu.png',
      color_1: '#ffffff',
      title_2: 'shell',
      img_2: '/images/heo/spring.png',
      color_2: '#ffffff'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://fhcy.top',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: false, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
