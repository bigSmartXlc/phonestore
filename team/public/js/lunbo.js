      var i=0;
      var LIWIDTH=988;
      var DURATION=500;
      var LICOUNT=4;
      var ulImgs=document.getElementById("sum");
      function moveTo(to){
      if(to==undefined){
        // 如果未输入，则自加
        to=i+1;
      }
      // 如果当前是第一张
      if(i==0){
        // 如果
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },500);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      console.log(i);
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },1500)
      }
    }
    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    var canClick=true;
    btnRight.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
        console.log(i+n);
        moveTo(i+n);
        // 控制左右按钮不让其连续点击，0.6秒后再点击
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+500);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }
    
    var timer=setInterval(function(){
      moveTo();
    },4500);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },4500);
    }
    btnLeft.onmouseenter=function(){
      clearInterval(timer);
    }
    btnRight.onmouseenter=function(){
      clearInterval(timer);
    }
    btnLeft.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },4500);
    }
    btnRight.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },4500);
    }