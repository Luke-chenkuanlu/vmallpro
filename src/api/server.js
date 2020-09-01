

define(['jquery'],function($){

    function getBannerData(){
        return $.ajax('/api/mock/banner.json');  // promise对象提供出去
    }
    function getBanner2Data(){
        return $.ajax('/api/mock/banner2.json');  // promise对象提供出去
    }
    function getPhoneData(){
        return $.ajax('/api/mock/phone.json');
    }
    function getBookData(){
        return $.ajax('/api/mock/book.json');
    }
    function getPadData(){
        return $.ajax('/api/mock/pad.json');
    }
    function getDetailData(type , id){
        var promise = new Promise(function(resolve,reject){
            return $.ajax(`/api/mock/${type}.json`).then((res)=>{
                for(var i=0;i<res.goods_list.length;i++){
                    if( id == res.goods_list[i].goodsId ){
                        resolve(res.goods_list[i]);
                    }
                }
            });
        })
        return promise;
    }

    return {
        getBannerData,
        getBanner2Data,
        getPhoneData,
        getBookData,
        getPadData,
        getDetailData
    };

});