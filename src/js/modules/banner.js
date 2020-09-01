


define(['jquery'],function($){
    var now = 0;
    var $banner = $('#banner');
    function initBanner(res){
        //console.log(res);
        var tmp = `
            <ul>
                ${
                    res.banner_list.map((v,i,a)=>{
                        return `
                        <li class="${i==0?'show':''}"><a href="${v.imgLink}"><img src="${v.imgUrl}" alt=""></a></li>
                        `;
                    }).join('')
                }
            </ul>
            <ol>
                ${
                    res.banner_list.map((v,i,a)=>{
                        return `
                        <li class="${i==0?'active':''}"></li>
                        `;
                    }).join('')
                }
            </ol>
            <div class="banner-mask"></div>
        `;
        $banner.html(tmp);
        handleBanner();
        autochange();
    }

    function handleBanner(){
        $banner.on('click','ol li',function(){
            var $ulLis =  $banner.find('ul li');
            $(this).attr('class','active').siblings().attr('class','');
            $ulLis.eq( $(this).index() ).attr('class','show').siblings().attr('class','');
            now = $(this).index();
        });
    }

    function autochange(){
        var $ulList_1 = $('#banner').find('ul li');
        var $olList_1 = $('#banner').find('ol li');

        function auto(){      //定时器需要用到的函数
            if( now == $ulList_1.length - 1){
                now = 0;
            }
            else{
                now ++;
            }
            $olList_1.eq(now).attr('class','active').siblings().attr('class','');
            $ulList_1.eq(now).attr('class','show').siblings().attr('class','');
        }

        var timer = setInterval(auto,3000);    //启动定时器

        $banner.on('mouseover',function(){    //清除定时器
            clearInterval(timer);
        });

        $banner.on('mouseout',function(){       //再次启动定时器
            timer = setInterval(auto,3000);
        });
    }




    return initBanner;

});