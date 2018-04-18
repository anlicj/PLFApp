var t=new Timer(119999);
t.inTime();

function Timer(intSecond){
  var _this=this,m,flag=true;
  this.second=intSecond;
  this.inTime=function(){
    m=setInterval(function(){
          var day=0,hour=0,minute=0,second=0;
          if(intSecond > 0){
              day = Math.floor(intSecond / (60 * 60 * 24));
              hour = Math.floor(intSecond / (60 * 60)) - (day * 24);
              minute = Math.floor(intSecond / 60) - (day * 24 * 60) - (hour * 60);
              second = Math.floor(intSecond) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
          }
          if (day <= 9) day = '0' + day;
          if (hour <= 9) hour = '0' + hour;
          if (minute <= 9) minute = '0' + minute;
          if (second <= 9) second = '0' + second;
          $('#J_Day').html(day);
          $('#j_Hour').html(hour);
          $('#J_Minute').html(minute);
          $('#J_Second').html(second);
          _this.second=intSecond--;
          if(intSecond == -2){
            alert("超时！");
            clearInterval(m);
          }
      }, 1000);
  }

  this.stopTime=function(){
    clearInterval(m);
    flag=false;
  }

  this.startTime=function(){
    if(flag){
      alert("兄弟，你点击暂停了吗？不要搞事情！");
      return
    }
    clearInterval(m);
    this.inTime();
    flag=true;
  }

}