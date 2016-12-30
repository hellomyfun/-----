/**
 * Created by a on 2016/12/26.
 */
(function () {
    $(window).scroll(function () {
        var self = $(this);
        var header = $(".navContainer");
        //var nav = $(".nav");
        if (self.scrollTop() > 205) {
            header.addClass("fixcls");
            //header.fadeOut();
        } else {
            //header.fadeIn();
            header.removeClass("fixcls");
        }
    })

})();