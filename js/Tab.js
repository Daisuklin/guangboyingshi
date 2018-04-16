
function show(num,x,y)
{
//	alert(tag);
//	alert(content);
	for(i=1;i<3;i++)
	{
		document.getElementById(x+i).className="";
		document.getElementById(y+i).style.display="none";
	}
	document.getElementById(x+num).className="tp";
	document.getElementById(y+num).style.display="block";
}



function vshow(num,x,y)
{
//	alert(tag);
//	alert(content);
	for(i=4;i<10;i++)
	{
		document.getElementById(x+i).className="";
		document.getElementById(y+i).style.display="none";
	}
	document.getElementById(x+num).className="tp";
	document.getElementById(y+num).style.display="block";
}
