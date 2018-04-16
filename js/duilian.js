lastScrollY=0; 
function heartBeat(){  
var diffY; 
if (document.documentElement && document.documentElement.scrollTop) 
    diffY = document.documentElement.scrollTop; 
else if (document.body) 
    diffY = document.body.scrollTop 
else 
    {/*Netscape stuff*/} 
     
//alert(diffY); 
percent=.1*(diffY-lastScrollY);  
if(percent>0)percent=Math.ceil(percent);  
else percent=Math.floor(percent);  
document.getElementById("lovexin12").style.top=parseInt(document.getElementById 

("lovexin12").style.top)+percent+"px"; 


lastScrollY=lastScrollY+percent;  
//alert(lastScrollY); 
} 
suspendcode12="<DIV id=\"lovexin12\" style='left:45px;POSITION:absolute;TOP:220px;'><img border=0 src=img/duilian.jpg><br><a href=javascript:; onclick=\"lovexin12.style.visibility='hidden'\" style='display:none'>关闭</a></div>" 

document.write(suspendcode12);  

window.setInterval("heartBeat()",1); 