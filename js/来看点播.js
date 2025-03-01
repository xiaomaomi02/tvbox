var rule = {
  title: '来看点播',
  host: 'https://lkvod.me',
  url: 'https://lkvod.me/show/fyclass--------fypage---.html',
  searchUrl: '',
  searchable: 0,
  quickSearch: 0,
  filterable: 0,
  filter: '',
  filter_url: '',
  filter_def: {},
  headers: {
    'User-Agent': 'PC_UA',
  },
  timeout: 5000,
  class_parse: '.swiper-wrapper&&li:lt(5);a&&Text;a&&href;.*/(\\d+)-----------.html',
  cate_exclude: '',
  play_parse: true,
  lazy: "js:\n  input = { parse: 1, url: input, js: '' };",
  double: true,
  推荐: 'body&&.public-list-box;a&&title;.lazy&&data-src;.public-list-subtitle&&Text;a&&href',
  一级: 'body&&.public-list-box;a&&title;.lazy&&data-src;.public-list-subtitle&&Text;a&&href',
  二级: {
    title: '.slide-info-title&&Text',
    img: '.lazy&&data-src',
    desc: '.slide-info&&Text',
    content: '#height_limit&&Text',
    tabs: 'body&&.anthology-tab&&.swiper-wrapper&&a',
    lists: '.anthology-list-play:eq(#id)&&li',
    tab_text: 'a&&Text',
    list_text: 'a&&Text',
    list_url: 'a&&href',
  },
  搜索: '列表;标题;图片;描述;链接;详情',
}