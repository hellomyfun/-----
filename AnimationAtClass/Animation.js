/**
 * Created by liuyujing on 2016/11/17.
 */

window.animte = window.animte||{};

(function () {

    function Animation(_width) {
        this.width = _width;
    }

    //frame per sec 每秒的帧率 fps

    /*
     * move 动画的函数
     * duration :动画的持续时间
     * */
    Animation.prototype.move = function (duration,fromX,toX,element,callback) {
        //每秒刷新40帧
        var fps = 40;
//    获得每帧 执行的时间
        var frameDuration = Math.round(1000/fps);
//    动画执行完成 所需要的帧数 -> 控制 停止定时器
        var frames = Math.round(duration/frameDuration);

        //判断执行完毕 所有桢
        var frameIndex = 0;

        var x = fromX;
        //获得到 每帧移动的速度
        var speed = (toX-fromX)/frames;
        var timer = setInterval(function () {

                ++frameIndex;
                x += speed;

                if (frameIndex == frames) {
                    clearInterval(timer);
                    //    纠正 移动的错误偏差
                    x = toX;

                    if (callback){
                        callback();
                    }
                }

                element.style.left = x+"px";
            }
            ,frameDuration);
    };

    //从左面移出
    Animation.prototype.moveOutToLeft = function (element,callback) {
        this.move(300,0,-this.width,element,callback);
    };

    //从左面移入
    Animation.prototype.moveInFromLeft = function (element,callback) {
        element.style.left = -this.width+"px";
        this.move(300,-this.width,0,element,callback);
    };

    //从右面移出
    Animation.prototype.moveOutToRight = function (element,callback) {
        this.move(300,0,this.width,element,callback);
    };

    //从右面移入
    Animation.prototype.moveInFromRight = function (element,callback) {
        element.style.left = this.width+"px";
        this.move(300,this.width,0,element,callback);
    };

    animte.Animation = Animation;

})();
