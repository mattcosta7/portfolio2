$(document).ready(function(){
  $('.socialtext').hide();

  $('.socialRoll').on('mouseenter',function(){
    $(this).find('span').show();
  }) 
  $('.socialRoll').on('mouseleave',function(){
    $(this).find('span').hide();
  })


})

onload=function(){

  var nav = document.getElementsByTagName('nav')[0];
  var body = document.getElementsByTagName('body')[0];
  var social = document.getElementsByClassName('social')[0];
  if (window.location.href == "http://www.mattc.io/resume" || window.location.href == "http://localhost:9494/resume"){
    nav.style.display = 'block';
    body.style.paddingTop = '100px';
    social.style.marginTop = '-40px';
  }
  else if(body.scrollTop<60){
    nav.style.display = 'none';
    body.style.paddingTop = '20px';
    social.style.marginTop = '40px';
  }
  else{
    nav.style.display = 'block';
    body.style.paddingTop = '20px';
    social.style.marginTop = '40px';
  }
}

function scroller(){
  var nav = document.getElementsByTagName('nav')[0];
  var body = document.getElementsByTagName('body')[0];
  var social = document.getElementsByClassName('social')[0];
  if (window.location.href == "http://www.mattc.io/resume" || window.location.href == "http://localhost:9494/resume"){
   return;
  }
  else if(body.scrollTop > 60){
    nav.style.display = 'block';
    body.style.paddingTop = '20px';
    social.style.marginTop = '40px';
  }
  else{
    nav.style.display = 'none';
    body.style.paddingTop = '20px';
    social.style.marginTop = '40px';
  }
}