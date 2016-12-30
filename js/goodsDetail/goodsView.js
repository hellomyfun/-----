/**
 * Created by a on 2016/12/26.
 */
(function () {
    function GoodsView(url,id,superView) {
        this.index = 1;
        this.showGoods(url,id,superView);
    }
    GoodsView.prototype = new HTTPClient();
    GoodsView.prototype.showGoods = function (url,id,superView) {
        var self= this;
        this.getJsonp(url,{goodsID:id},function (result) {
            self.createView(result[0],superView);
        })

    };
    GoodsView.prototype.createView = function (info,superView) {
        var infotionView = $(".infortionView");
        var string = info.imgsUrl;
        var goodsListImg = info.goodsListImg;
        var goodsBenUrl =info.goodsBenUrl;
        var goodsID = info.goodsID;
        var detail = info.detail;
        var images =string.slice(2,info.imgsUrl.length-2).split("\",\"");
        var goodsListImg2 = goodsListImg.slice(0,info.goodsListImg.length-2).split("\",\"");
        var goodsBenUrl2 =goodsBenUrl.slice(2,info.goodsBenUrl.length-2).split("\",\"");
        var goodsName = info.goodsName;
        var className = info.className;
        var price = info.price;
        var discount =info.discount;
        if(info.discount == 0){
             xprice = price;
        }else {
            var xprice = parseInt(discount*price/10);
        }
        var imgListViewContext = $(".imgListViewContext");
        //var xprice = parseInt(discount*price/10);
        //console.log(images);
        var imgView = $("<img src="+images[0]+">");
        $(".imgView").append(imgView);
        var goodsNameh4 = $("<h4>"+goodsName+"</h4>");
        infotionView.append(goodsNameh4);
        var classNamep = $("<p class='className'>"+"品牌："+className+"</p>");
        infotionView.append(classNamep);
        var pricep = $("<p class='pricep'>原价：<span>"+"￥"+price+"</span></p>");
        infotionView.append(pricep);
        var xpricep = $("<p class='xpricep'>现价：<span>"+"￥"+xprice+"</span></p>");
        infotionView.append(xpricep);
        $(goodsListImg2).each(function () {
            var imgListView = $("<p class='imgListViewp'>款式:</p><img width='72px' height='98px' class='imgListView'  src="+goodsListImg2 +">");
            infotionView.append(imgListView);
        });
        var taglia = $("<p class='taglia'><b>尺码：</b><span>S</span><span>M</span><span>L</span></p>");

        infotionView.append(taglia);
        $(".taglia span").click(function () {
           $(this).css("border","1px solid red");
        });
        $(".taglia span").dblclick(function () {
            $(this).css("border","1px solid #cccccc");
        });

        var number = $("<p class='number'><span>数量：</span><input type='number' min='0' max='10' value='0'></p>");
        infotionView.append(number);
        var targer = "../html/shoppingCart.html?"+goodsID;
        var buya = $("<p class='buyp'><a href='#' class='buy buy2'>立即购买</a><a class='buy buy3' href='#' id = 'cart'>加入购物车</a></p>");
        infotionView.append(buya);
       var detailcontext = $("<h3>产品参数</h3><p class='detailp'>"+detail+"</p>");
       imgListViewContext.append(detailcontext);
        var detailcontext3 = $("<h3>详情图</h3>");
        imgListViewContext.append(detailcontext3);

        $(goodsBenUrl2).each(function () {
            var imagesbg = $("<img class='imagebg' src="+this+">");
            imgListViewContext.append(imagesbg);
        });

        $(images).each(function () {
            var imagesbg4 = $("<img class='imagebg' src="+this+">");
            imgListViewContext.append(imagesbg4);
         });
        $("#cart").click(function () {
            var string = location.search.replace("?","");
            var string2= string.split("&");
            var Cartdivto=$("<section id='Cartdivto'><a href='' class='nowShopping'>继续购物</a><a class='shoppingCart' href='#'>去购物车结算</a></section>");
            superView.append(Cartdivto);
            $(".nowShopping").click(function () {
                window.location.reload();
            });
            $(".shoppingCart").click(function () {
                window.location.href='../html/shoppingCart.html?'+string;
            });
            //window.location.href='../html/shoppingCart.html?'+string;
        });

    };
    window.GoodsView = GoodsView;
})();