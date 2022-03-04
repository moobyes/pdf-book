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
    children: [{
      text: '责任战略',
    }, {text: '利益相关方参与'}, {text: '实质性议题分析'}, { text: '北京字节跳动与联合国可持续发展目标'}],
  },
  {
    text: "筑牢根基 守卫责任底线",
    children: [{text: '公司治理', children: [{ text: '合规管理与制度', }]}, { text: ''}],
  }
];

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
      });

      if (this.children) {
        $.each(this.children, function (i) {
          const secondCate = $("<div/>")
            .addClass("third-cate")
            .text(this.text)
            .appendTo(cateBox);
        });
      }
    }
    // const secondCate = $("<div/>")
    //   .addClass("second-cate")
    //   .text(this)
    //   .appendTo(firstCate);
  });
});
