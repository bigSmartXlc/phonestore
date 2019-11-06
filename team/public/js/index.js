$(function(){

  // 头部轮播图
  $(".zzw_item h3").hide();
  
  $(window).ready(function(){
    var $t=new Date().getHours();
    // 测试
    // var $t=10;
    
    console.log($t);
    if(4<=$t&&$t<10){ 
      $("#index_timelinebox span.timex_0").addClass("timex_current").siblings().removeClass("timex_current");
      console.log(111);
      // $("#zzw_prev_btn").click();
      // $("#zzw_prev_btn").click();
      $.each($("#index_zzw_main .zzw_item"),function(){
        var $this=$(this);
        var po=parseInt($this.attr("po"));
        if(po==5){
          po=0;
        }
        if(po==4){
          po=-1;
        }
        $this.removeClass().addClass("zzw_item").addClass(`zzw_item_${po+2}`).attr("po",`${po+2}`);
        // 触发mouseover事件
        // $("#zzw_prev_btn").trigger("mouseover");
      });
      $(".zzw_item_3 h3").fadeIn(); 
      bindtimex();     
      return;  
    }else if(10<=$t&&$t<14){
      console.log(222);
      $("#index_timelinebox span.timex_1").addClass("timex_current").siblings().removeClass("timex_current");
      // $("#zzw_prev_btn").click();  
      $.each($("#index_zzw_main .zzw_item"),function(){
        var $this=$(this);
        var po=parseInt($this.attr("po"));
        if(po==5){
          po=0;
        }
        $this.removeClass().addClass("zzw_item").addClass(`zzw_item_${po+1}`).attr("po",`${po+1}`);
        // 触发mouseover事件
        // $("#zzw_prev_btn").trigger("mouseover");
      });
      $(".zzw_item_3 h3").fadeIn();   
      bindtimex();         
      return;  
    }else if(14<=$t&&$t<16){
      console.log(333);
      $("#index_timelinebox span.timex_2").addClass("timex_current").siblings().removeClass("timex_current");
      $(".zzw_item_3 h3").fadeIn(); 
      bindtimex();         
      return;  
    }else if(16<=$t&&$t<21){
      console.log(444);
      $("#index_timelinebox span.timex_3").addClass("timex_current").siblings().removeClass("timex_current");
      // $("#zzw_next_btn").click();   
      $.each($("#index_zzw_main .zzw_item"),function(){
        var $this=$(this);
        var po=parseInt($this.attr("po"));
        if(po==1){
          po=6;
        }
        $this.removeClass().addClass("zzw_item").addClass(`zzw_item_${po-1}`).attr("po",`${po-1}`);
        // 触发mouseover事件
        // $("#zzw_next_btn").trigger("mouseover");
      });
      $(".zzw_item_3 h3").fadeIn();   
      bindtimex();         
      return;  
    }else{
      console.log(555);
      $("#index_timelinebox span.timex_4").addClass("timex_current").siblings().removeClass("timex_current");
      // $("#zzw_next_btn").click(); 
      // $("#zzw_next_btn").click();  
      $.each($("#index_zzw_main .zzw_item"),function(){
        var $this=$(this);
        var po=parseInt($this.attr("po"));
        if(po==1){
          po=6;
        }
        if(po==2){
          po=7;
        }
        $this.removeClass().addClass("zzw_item").addClass(`zzw_item_${po-2}`).attr("po",`${po-2}`);
        // 触发mouseover事件
        // $("#zzw_next_btn").trigger("mouseover");
      });
      $(".zzw_item_3 h3").fadeIn(); 
      bindtimex();           
      return;  
    }

  });

  function bindtimex(){
    $("#index_timelinebox span.timex").unbind();
    $("#index_timelinebox span.timex_current").prev().bind("mouseenter",function(){
      
      $("#zzw_prev_btn").click();
    });
    $("#index_timelinebox span.timex_current").next().bind("mouseenter",function(){
      
      $("#zzw_next_btn").click();
    });
  }
  
  $("#index_zzw_main").mouseenter(function(){
    $("#zzw_prev_btn").trigger("mouseenter");
    $("#zzw_next_btn").trigger("mouseenter");
    $("#timedot_c").show();
  });
  $("#index_zzw_main").mouseleave(function(){
    $("#zzw_prev_btn").trigger("mouseleave");
    $("#zzw_next_btn").trigger("mouseleave");
    $("#timedot_c").hide();
  });
  $("#maskleft").mouseenter(function(){
    $("#zzw_prev_btn").trigger("mouseenter");
    $("#zzw_next_btn").trigger("mouseenter");
    $("#timedot_c").show();
  });
  $("#maskleft").mouseleave(function(){
    $("#zzw_prev_btn").trigger("mouseleave");
    $("#zzw_next_btn").trigger("mouseleave");
    $("#timedot_c").hide();
  });
  $("#maskright").mouseenter(function(){
    $("#zzw_prev_btn").trigger("mouseenter");
    $("#zzw_next_btn").trigger("mouseenter");
    $("#timedot_c").show();
  });
  $("#maskright").mouseleave(function(){
    $("#zzw_prev_btn").trigger("mouseleave");
    $("#zzw_next_btn").trigger("mouseleave");
    $("#timedot_c").hide();
  });
  $("#index_timelinebox").mouseleave(function(){
    $("#zzw_prev_btn").trigger("mouseleave");
    $("#zzw_next_btn").trigger("mouseleave");
    $("#timedot_c").hide();
  });
  bindtimex();


  // 左侧箭头点击函数
  $("#index_zzw .prev_btn").click(function(){
    // h3隐藏就显示 显示就隐藏
    $(".zzw_item_3 h3").hide();
    $("#index_zzw_main").animate({left:'-990px'},"600",function(){
      $("#index_zzw_main .zzw_item").last().prependTo($("#index_zzw_main"));
      
      $.each($("#index_zzw_main .zzw_item"),function(){
        var $this=$(this);
        var po=parseInt($this.attr("po"));
        if(po==5){
          po=0;
        }
        $this.removeClass().addClass("zzw_item").addClass(`zzw_item_${po+1}`).attr("po",`${po+1}`);
        // 触发mouseover事件
        $("#zzw_prev_btn").trigger("mouseover");
      });
      // 操作轮播指示器
      var i=$("#index_timelinebox span.timex_current");
      if(i.prev().length>0){
        i.removeClass("timex_current").prev().addClass("timex_current");
      }else{
        i.removeClass("timex_current");
        $("#index_timelinebox span.timex").last().addClass("timex_current");
      }
      bindtimex();
      $("#index_zzw_main").mouseenter();
      $(".zzw_item h3").hide();
      $(".zzw_item_3 h3").fadeIn();      
      $("#index_zzw_main").css("left","-1980px");
    })

  })

  // 右侧箭头点击函数
  $("#index_zzw .next_btn").click(function(){
    // h3隐藏就显示 显示就隐藏
    $(".zzw_item_3 h3").hide();
    $("#index_zzw_main").animate({left:'-2970px'},"600",function(){
      $("#index_zzw_main .zzw_item").first().appendTo($("#index_zzw_main"));
      
      $.each($("#index_zzw_main .zzw_item"),function(){
        var $this=$(this);
        var po=parseInt($this.attr("po"));
        if(po==1){
          po=6;
        }
        $this.removeClass().addClass("zzw_item").addClass(`zzw_item_${po-1}`).attr("po",`${po-1}`);
        // 触发mouseover事件
        $("#zzw_next_btn").trigger("mouseover");
      });
      // 操作轮播指示器
      var i=$("#index_timelinebox span.timex_current");
      if(i.next().length>0){
        i.removeClass("timex_current").next().addClass("timex_current");
      }else{
        i.removeClass("timex_current");
        $("#index_timelinebox span.timex").first().addClass("timex_current");
      }
      bindtimex();
      $("#index_zzw_main").mouseenter();
      $(".zzw_item h3").hide();
      $(".zzw_item_3 h3").fadeIn();      
      $("#index_zzw_main").css("left","-1980px");
    })
  })

  // 左箭头hover
  $("#zzw_prev_btn").hover(function(){
    var now=parseInt($(".zzw_item_3").attr("c"));
    if(now==1){
      now=6;
    }
    $(this).css("background-position","0px "+(6-(now-1)*74)+"px");
  },
  function(){
    $(this).css("background-position","0px 6px");    
  })
  // 右箭头hover
  $("#zzw_next_btn").hover(function(){
    var now=parseInt($(".zzw_item_3").attr("c"));
    if(now==5){
      now=0;
    }
    $(this).css("background-position","-174px "+(6-(now+1)*74)+"px");
  },
  function(){
    $(this).css("background-position","-174px 6px");    
  })

  // 选择菜单
  $(".index_sc_w .index_sc_dd").hover(function(){
    $(this).addClass("index_sc_dd_current").siblings().removeClass("index_sc_dd_current")
  })



  //资讯列表
   $(".index_healthitem li").hover(function(){
     $(this).addClass("current").siblings().removeClass("current")
   })


})  