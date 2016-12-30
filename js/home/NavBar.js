/**
 * Created by a on 2016/12/22.
 */
(function () {
    function NavBar(url,superView,getItemCallback) {
        this.superView = superView;
        this.showNavBar(url,getItemCallback);
        this.items = [];
        HTTPClient.call(this);
    }
    NavBar.prototype =  new HTTPClient();
    NavBar.prototype.showNavBar = function (url,getItemCallback) {
        var self = this;
        var ul = $("<ul class='navul'></ul>");
        self.superView.append(ul);
        this.getJson(url,function (result) {
           var data = $($.parseJSON(result));
           //console.log(data);
           data.each(function () {
                var item = new NavBarItem(this);
               ul.append(item.li);
               self.items.push(item);

           });
            if(getItemCallback){
                getItemCallback(self.items);
            }

        });
    };
    function NavBarItem(info) {
       this.info = info;
        this.li = $("<li class='navli'>"+info.className+"</li>");
        this.li.hover(function () {
            $(this).css("background","#cd2c24");
        },function () {
            $(this).css("background","#f2594b");
        });
    }







    window.NavBar=NavBar;
})();