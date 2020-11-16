import './jQuery.js';

import './jquery.lazyload.min.js';

import {baseUrl} from './config.js';


(function(){
    $("img.lazy").lazyload({effect: "fadeIn"}),
    
    $.ajax({
        type:"get",
        url:`${baseUrl}/product/getProducts`,
        dataType:"json",
        success:function(res){
            // console.log(response);
            let tempLi = '';
            res.forEach((elm,i)=>{
                // console.log(elm);
                let picture = JSON.parse(elm.picture);

                tempLi+=`    <a href="./html/product.html?id=${elm.id}">
                <li>
                    <img src="${picture[0].src}"
                        alt="">
                    <p>${elm.title}</p>
                    <p>${elm.introduction}</p>
                    <p><sup>¥</sup>${elm.price}</p>
                </li>
            </a>`;

            });
            $('.list').append(tempLi);
        }


    });
})();