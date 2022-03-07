/* 
  @method: lazyload图片懒加载
  @params: 1. String 图片类名
           2. String 自定义标签名（值为待替换图片地址）
  @return: 懒加载执行函数
*/
(function (global, factory) {
  return factory.call(global, global.jQuery);
})(void 0, function ($) {
  $.extend({
    lazyload: function lazyload(imgClass, userAttr) {
      return function () {
        if (!imgClass || !userAttr) {
          console.error('请传入图片类名和自定义标签名');
          return;
        }

        var $imgs = $('.' + imgClass);
        var height = $(window).height() + $(window).scrollTop();

        for (var i = 0; i < $imgs.length; i++) {
          var $img = $($imgs[i]);
          var top = $img.offset().top;

          if (top <= height) {
            var newurl = $img.attr(userAttr);

            if (newurl) {
              $img.attr('src', newurl);
            } else {
              console.error('请在自定义标签上绑定新的图片url');
            }
          }
        }
      };
    }
  });
});