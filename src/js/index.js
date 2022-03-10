const categories = [
  {
    text: "封面",
    name: "cover",
  },
  {
    text: "关于北京字节跳动",
    name: "about",
    children: [
      {
        text: "公司简介",
        name: "company",
      },
      { text: "公司文化", name: "culture" },
    ],
  },
  {
    text: "责任管理",
    name: "duty",
    children: [
      {
        text: "责任战略",
        name: "strategy",
      },
      { text: "利益相关方参与", name: "partners" },
      { text: "实质性议题分析", name: "analysis" },
      { text: "北京字节跳动与联合国可持续发展目标", name: "goal" },
    ],
  },
  {
    text: "筑牢根基 守卫责任底线",
    name: "foundation",
    children: [
      {
        text: "公司治理",
        name: "governance",
        children: [
          { text: "合规管理与制度", name: "c-system" },
          { text: "合规培训与警示", name: "c-train" },
        ],
      },
      {
        text: "内容治理",
        name: "content",
        children: [
          { text: "保障内容安全健康", name: "heathy" },
          { text: "网络诈骗与金融风险防范", name: "prevention" },
        ],
      },
      {
        text: "用户服务",
        name: "service",
        children: [
          { text: "优化用户体验", name: "optimize-ex" },
          { text: "探索短视频防沉迷机制", name: "anti-addiction" },
        ],
      },
      {
        text: "信息安全与隐私保护",
        name: "security",
        children: [
          { text: "信息安全管理", name: "info-security" },
          { text: "信息安全宣导", name: "info-promotion" },
        ],
      },
    ],
  },
  {
    text: "携手伙伴 建设美好家园",
    name: "partners",
    children: [
      {
        text: "增进员工福祉",
        name: "employee",
        children: [
          {
            text: "与员工共同成长",
            name: "grow",
          },
          {
            text: "与员工共享幸福",
            name: "share",
          },
        ],
      },
      {
        text: "共建绿色家园",
        name: "green",
        children: [
          {
            text: "降低环境足迹",
            name: "footprint",
          },
          {
            text: "倡导绿色生活",
            name: "green-life",
          },
        ],
      },
      {
        text: "优化商业环境",
        name: "environment",
        children: [
          { text: "负责人采购", name: "responsible-purchasing" },
          { text: "商业生态建设", name: "ecology" },
        ],
      },
      {
        text: "保护知识产品",
        name: "protect",
        children: [
          { text: "企业知识产权保护", name: "copyright" },
          { text: "创作者知识产权保护", name: "author-copyright" },
        ],
      },
    ],
  },
  {
    text: "坚持科技创新 创造更多可能",
    name: "innovation",
    children: [
      {
        text: "夯实创新基础",
        name: "foundation",
        children: [
          { text: "明确创新方向", name: "direction" },
          { text: "推动技术创新", name: "technology" },
          { text: "优化科研环境", name: "environment" },
          { text: "培育科技创新后备人才", name: "backup" },
        ],
      },
      {
        text: "推广科技应用",
        name: "application",
        children: [
          { text: "推动技术开源", name: "open-resource" },
          { text: "应用创新成果", name: "innovation-result" },
        ],
      },
    ],
  },
  {
    text: "汇聚美好 共享社会价值",
    name: "social",
    children: [
      {
        text: "推动高社会价值内容建设",
        name: "content-building",
        children: [
          { text: "在抖音听名校公开课", name: "douyin-school" },
          { text: "上线知识直播", name: "knowledge-live" },
          { text: "引进科普内容", name: "science-content" },
          { text: "连接艺术生活", name: "art-life" },
        ],
      },
      {
        text: "弘扬传统文化",
        name: "traditional",
        children: [
          { text: "引导非遗传承", name: "non-genetic" },
          { text: "推动古籍保护", name: "book-protection" },
        ],
      },
      {
        text: "关注重点人群",
        name: "focus",
        children: [
          { text: "关注青少年成长", name: "youth" },
          { text: "关爱银发群体", name: "youth-group" },
          { text: "关怀障碍群体", name: "disabled-group" },
        ],
      },
      {
        text: "助力公益数字化",
        name: "digital",
        children: [
          { text: "字节跳动公益平台", name: "welfare-platform" },
          { text: "科技助力家庭团圆", name: "family-circle" },
        ],
      },
      {
        text: "助力乡村可持续发展",
        name: "development",
        children: [
          { text: "发展乡村产业", name: "village-industry" },
          { text: "推广乡村文旅", name: "village-travel" },
          { text: "培育乡村数字化人才", name: "village-talent" },
        ],
      },
      {
        text: "鼓励员工公益，让好事发生",
        name: "good-will",
      },
      {
        text: "提供数字技能培训",
        name: "digital-skill",
        children: [
          {
            text: "推动院校与产业人才供给接轨伟用户提供培训与技能认证",
            name: "training",
          },
        ],
      },
    ],
  },
  {
    text: "附录",
    name: "appendices",
    children: [
      { text: "关于本报告", name: "about-report" },
      { text: "报告指标索引", name: "report-index" },
    ],
  },
];

$("img").lazyload({ effect: "fadeIn", threshold: 200 });
// placeholder : "image/loading.gif",
const cateBox = $("nav");
console.log(cateBox);
$.each(categories, function (i) {
  const firstCateBox = $("<ul/>").addClass("first-cate").appendTo(cateBox);

  const firstCate = $("<li/>")
    .addClass("first-cate-item")
    .appendTo(firstCateBox);

  const aLink = $("<a />")
    .text(this.text)
    .attr("href", "#" + this.name)
    .appendTo(firstCate);

  if (this.children) {
    $.each(this.children, function (i) {
      const secondCateBox = $("<ul/>")
        .addClass("second-cate")
        .appendTo(firstCate);
      const secondCate = $("<li/>")
        .addClass("second-cate-item")
        .appendTo(secondCateBox);

      const aLink = $("<a />")
        .text(this.text)
        .attr("href", "#" + this.name)
        .appendTo(secondCate);

      if (this.children) {
        $.each(this.children, function (i) {
          const thirdCateBox = $("<ul/>")
            .addClass("third-cate")
            .appendTo(secondCate);
          const thirdCate = $("<li/>")
            .addClass("third-cate-item")
            .appendTo(thirdCateBox);
          const aLink = $("<a />")
            .text(this.text)
            .attr("href", "#" + this.name)
            .appendTo(thirdCate);
        });
      }
    });
  }
});

function flatten_2(arr) {
  return arr.reduce(function (pre, item) {
    return pre.concat(Array.isArray(item.children) ? flatten_2(item.children) : item);
  }, []);
}

const flatArr = flatten_2(categories);
const heads = $(":header");
$.each(heads, function (i, v) {
  const name = v.innerText;

  flatArr.forEach(function (item) {
    if (item.text === name) {
      $(v).attr('top-name', item.name)
    }
  })
  
});

const aLink = $("a");
$.each(aLink, function (i, v) {
  $(v).click(function () {
    const id = $(v).attr('href').slice(1)
    $("a").removeClass('active');
    $(v).addClass('active')
    const selector = $(`[top-name=${id}]`)
    if(selector) {

      if(selector.offset().top < 0) {
        $('.page-content').animate({
        scrollTop: selector.offset().top - 200
      }, 800);
      } else {
        $('.page-content').animate({
          scrollTop: selector.offset().top - 200
        }, 800);
      }
      
      
      console.log(selector.offset().top, v.innerText)
    }


    slideout.toggle();
  })
})

// 跳转到顶部
const $goTop = $('.up');

$('.page-content').scroll(function() {
  if ($(this).scrollTop() !== 0) {
    $goTop.fadeIn();
  } else {
    $goTop.fadeOut();
  }
  // const currentScroll = $('.page-content').scrollTop();
});




$goTop.click(function() {
  $('.page-content').animate({
    scrollTop: 0
  }, 800);
});

