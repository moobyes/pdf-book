const categories = [
  {
    text: "封面",
  },
  {
    text: "关于北京字节跳动",
    children: [
      {
        text: "公司简介",
      },
      { text: "公司文化" },
    ],
  },
  {
    text: "责任管理",
    children: [
      {
        text: "责任战略",
      },
      { text: "利益相关方参与" },
      { text: "实质性议题分析" },
      { text: "北京字节跳动与联合国可持续发展目标" },
    ],
  },
  {
    text: "筑牢根基 守卫责任底线",
    children: [
      {
        text: "公司治理",
        children: [{ text: "合规管理与制度"},{ text: "合规培训与警示" }],
      },
      {
        text: "内容治理",
        children: [
          { text: "保障内容安全健康"}, {text: "网络诈骗与金融风险防范" },
        ],
      },
      {
        text: "用户服务",
        children: [
          { text: "优化用户体验" },{ text: '探索短视频防沉迷机制'}
        ]
      },
      {
        text: "信息安全与隐私保护",
        children: [
          { text: '信息安全管理' }, { text: '信息安全宣导'}
        ]
      }
    ],
  },
  {
    text: "携手伙伴 建设美好家园",
    children: [
      {
        text: "增进员工福祉",
        children: [{
          text: "与员工共同成长"
        },
        {
          text: "与员工共享幸福"
        }]
      },{
        text: "共建绿色家园",
        children: [{
          text: "降低环境足迹"
        },{
          text: "倡导绿色生活"
        }]
      },
      {
        text: "优化商业环境",
        children: [{ text: '负责人采购' }, { text: '商业生态建设' }]
      },
      {
        text: "保护知识产品",
        children: [{ text: '企业知识产权保护' }, { text: '创作者知识产权保护' }]
      }
    ]
  },
  {
    text: "坚持科技创新 创造更多可能",
    children: [
      {
        text: "夯实创新基础",
        children: [{ text: '明确创新方向' }, { text: '推动技术创新' }, { text: '优化科研环境' }, { text: '培育科技创新后备人才' }]
      },
      {
        text: "推广科技应用",
        children: [{ text: '推动技术开源' }, { text: '应用创新成果' }]
      }
    ]
  },
  {
    text: "汇聚美好 共享社会价值",
    children: [
      {
        text: "推动高社会价值内容建设",
        children: [{ text: '   在抖音听名校公开课' }, { text: '上线知识直播' }, { text: '引进科普内容' }, { text: '连接艺术生活' }]
      },
      {
        text: "弘扬传统文化",
        children: [{ text: '引导非遗传承' }, { text: '推动古籍保护' }]
      },
      {
        text: "关注重点人群",
        children: [{ text: '关注青少年成长' }, { text: '关爱银发群体' }, { text: '关怀障碍群体' }]
      },
      {
        text: "助力公益数字化",
        children: [{ text: '字节跳动公益平台' }, { text: '科技助力家庭团圆' }]
      },
      {
        text: "助力乡村可持续发展",
        children: [{ text: '发展乡村产业' }, { text: '推广乡村文旅' }, { text: '培育乡村数字化人才' }]
      },
      {
        text: "鼓励员工公益，让好事发生",
      },
      {
        text: "提供数字技能培训",
        children: [{ text: '推动院校与产业人才供给接轨伟用户提供培训与技能认证' }]
      }
    ]
  },
  {
    text: "附录",
    children: [{text: "关于本报告"}, { text: '报告指标索引'}]
  }

];
// 夯实创新基础    明确创新方向    推动技术创新    优化科研环境    培育科技创新后备人才 推广科技应用    推动
// 公司治理    合规管理与制度     优化用户体验
  //  探索短视频防沉迷机制
  //  合规培训与警示 内容治理    保障内容安全健康    网络诈骗与金融风险防范 用户服务
$("img").lazyload({effect: "fadeIn", threshold: 200,placeholder : "image/loading.gif",});
$(function () {
  const cateBox = $("div.catalog-bd");
  $.each(categories, function (i) {
    const firstCate = $("<div/>")
      .addClass("first-cate")
      .text(this.text)
      .attr("tag", this.text)
      .appendTo(cateBox);

    if (this.children) {
      $.each(this.children, function (i) {
        const secondCate = $("<div/>")
          .addClass("second-cate")
          .text(this.text)
          .appendTo(cateBox);

          if (this.children) {
            $.each(this.children, function (i) {
              const secondCate = $("<div/>")
                .addClass("third-cate")
                .text(this.text)
                .appendTo(cateBox);
            });
          }
      });

      
    }
    // const secondCate = $("<div/>")
    //   .addClass("second-cate")
    //   .text(this)
    //   .appendTo(firstCate);
  });
});
