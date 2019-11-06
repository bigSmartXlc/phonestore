$(function(){
    $.ajax({
        url:"http://localhost:8080/pro/list_uid",
        type:"get",
        data:{lid:location.search.split("=")[1]},
    })
    .then(res=>{
    
    //动态加载数据
        $(".floor2>img").attr("src",res.picture);
        $(".jname").html(res.pname);
        $(".jdetail0").html(res.pdetail.split("|")[0]);
        $(".jdetail1").html(res.pdetail.split("|")[1]);
        $(".jprice").html(`${((res.space.split("|"))[0].split("&nbsp;"))[1]}元`);
        $(".total-price").html(`总计:${((res.space.split("|"))[0].split("&nbsp;"))[1]}元`);
    //加载机型，颜色，和套餐
        var space=res.space.split("|");
        var html="";
        for(var sp of space){
            var space_price=sp.split("&nbsp;");
            // console.log(space_price);
            html+=`<a href="javascript:;"><span>${space_price[0]}</span><span class="space_price">${space_price[1]}元</span></a>`
        }
        $(".select-type1").append(html);
        var color=res.color.split("|");var html1="";
        for(var sc=0;sc<color.length;sc++){
            html1+=`<a href="javascript:;" data-src="detail.img/1${sc}.jpg">${color[sc]}</a>`
        }
        $(".select-type2").append(html1);
        var combo=res.combo.split("|");var html2="";
        for(var so of combo){
            html2+=`<a href="javascript:;" >${so}</a>`
        }
        $(".select-type3").append(html2);
    // 设置默认样式
        $(".select-type a:nth-child(2)").addClass("active");
    //添加点击事件
        $(".select-type1").on("click","a",function(e){
            $(".select-type1 a").removeClass("active");
            var $check=$(e.target);
            if($check.is("span")){
                $check.parent().toggleClass("active");
            }else{
                $check.toggleClass("active");
            };
            // console.log($(".select-type1 .active").html());
            $(".jprice").html($(".select-type1 .active .space_price").html());
            $(".total-price").html(`总计:${$(".select-type1 .active .space_price").html()}`)
        });
        $(".select-type2").on("click","a",function(e){
            $(".select-type2 a").removeClass("active");
            var $check=$(e.target);
                $check.toggleClass("active");
                $(".jpicture").attr("src",$check.attr("data-src"));
        });
        $(".select-type3").on("click","a",function(e){
            $(".select-type3 a").removeClass("active");
            var $check=$(e.target);
                $check.toggleClass("active");
        });
    // 保障服务添加点击事件
        $(".mi-click").on("click","div",function(e){
            e.preventDefault();
            if($(this).find("input").prop("checked")==false){
            $(this).find("label").css("border-color","#ff6700");
                $(this).find("input").prop("checked",true);
            }else{
                $(this).find("input").prop("checked",false);
                $(this).find("label").css("border-color","");
            }
        // 加入总价
            var obj=$(".mi-click div label");
            var total=0;
            for(var i=0;i<obj.length;i++){
                if($(obj[i]).find("input").prop("checked")==true){
                    total+=parseFloat($(obj[i]).children().children(".bao-price").html());
                }
            }
            $(".total-price").html(`总计:${total+parseInt($(".jprice").html())}元`);
            })
    // 
    // 商品图片添加固定效果
        $(document).on("scroll",function(){
            if($(document).scrollTop()<1234){
                $(".floor2>img").css("margin-top",parseInt($(document).scrollTop())*1046/1234)
            }
        })

}) 
}) 