import './jQuery.js';
import {baseUrl} from './config.js';
import cookie from './cookie.js';




(function(){
    let id = location.search.split('=')[1];
    // console.log(id);

    // console.log(baseUrl);

    (function(){
        $.ajax({
            type:"get",
            url:`${baseUrl}/product/getItem`,
            data:{id:id},
            dataType:"json",
            success:function(res){
                // console.log(response);
               res = res[0];
                
                    // console.log(elm);
                    let picture = JSON.parse(res.picture);
                    
                    let template = `
                    
                    
                    <div class="right-wrapper clearfix wrapper">

                    <div class="p-title">
                
                
                        <h1>${res.title}<span><sup>¥ </sup>${res.price}</span></h1>
                
                        <p>${res.introduction}</p>
                    </div>
                
                    <a href="#">
                        <div class="p-color">
                            <p>颜色</p>
                            <p>浅灰绿</p>
                        </div>
                    </a>
                
                
                    <div class="color-img">
                        <a href="#"><img src="../img/product/kvistbro-kui-si-bo-chu-wu-zhuo-qian-hui-lu__0816804_PE773686_S5.JPG" alt=""></a>
                        <a href="#"><img src="../img/product/0477822_PE618485_S5.JPG" alt=""></a>
                        <a href="#"><img src="../img/product/0915347_PE784726_S5.JPG" alt=""></a>
                
                    </div>
                
                
                    <div class="add-car">
                        <span class="add">加入购物袋</span>
                        <span class="iconfont">&#xe633;</span>
                    </div>
                
                
                    <div class="items">
                        <ul>
                            <li>
                                <span class="iconfont">&#xe639;</span>
                                <span>支持配送</span>
                            </li>
                            <li>
                                <span class="iconfont">&#xe647;</span>
                                <a href="#"><span>查询商场库存</span></a>
                            </li>
                            <li>
                                <span class="iconfont">&#xe651;</span>
                                <span>组装服务 <a href="#">查看更多</a></span>
                            </li>
                        </ul>
                
                    </div>
                
                </div>
            
                <div>
                <div class="p-img">
            
                
                 <img src="../${picture[1].src}">
                 <img src="../${picture[2].src}">
                 <img src="../${picture[3].src}">
                 <img src="../${picture[4].src}">
                

                
                
                </div>
            
                <div>
                    商品详情
                </div>
                <div>
                    商品尺寸
                </div>
                </div>
                


                    
                   
                    `
    
                   
    
               
                $('.xiangq').append(template).find('.add').on('click',function(){
                    // console.log(cookie);
                    addItem(res.id) 
                });

            }
    
    
        });
    })();


    function addItem(id){
        // console.log(id)
        let shop = cookie.get('shop');



        let products={
            id:id
        }

        if(shop){
            shop = JSON.parse(shop);
            // console.log(shop); 
            shop.push(products);

        }else{
            shop=[];
            shop.push(products);
        }

        cookie.set('shop',JSON.stringify(shop),1);

    }
})(); 
