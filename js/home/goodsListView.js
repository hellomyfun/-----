/**
 * Created by a on 2016/12/23.
 */
(function () {
    function GoodsListView(url,data,superView,getItemCallback) {
        this.superView = superView;
        this.user = location.search.replace("?","");
        this.showListView(url,data,superView,getItemCallback)
    }
    //继承HttpClient的类
    GoodsListView.prototype = new HTTPClient();
    GoodsListView.prototype.showListView = function (url,data,superView,getItemCallback) {
        var self = this;
        this.goodsContainer = $("<ul class='goods-container'></ul>");
        superView.html(this.goodsContainer);
        this.getJsonp(url,data,function (result) {
            //console.log(result);
            $(result).each(function () {

                var goods = new GoodsItem(this,self.goodsContainer);

            });

        });


    };
    function GoodsItem(info,superView) {
        this.info = info;
        var imageName  = info.goodsListImg;
        var className = info.goodsName;
        var price = info.price;
        var target = "../html/goodsDetail.html?"+info.goodsID+"&"+location.search.replace("?","");
        this.li = $("<li><a href="+target+"><img src="+imageName+" alt=''></a><p>"+className+"</p><span>"+"￥"+price+"</span><a href="+target+" class='buy'>立即购买</a></li>");
        superView.append(this.li);
        this.li.hover(function () {
            $(this).css("opacity","0.7");
            $(this).css("border","2px solid  #f2594b");

        },function () {
            $(this).css("opacity","1");
            $(this).css("border","2px solid  #f0eeee");
        });
    }


    window.GoodsListView = GoodsListView;
})();