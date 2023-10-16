var i = 0;
var images = [];
var time = 2000;

images [0] = 'n1.jpg';
images [1] = 'n2.jpg';
images [2] = 'n3.jpg';
images [3] = 'n4.jpeg';
images [4] = 'n4.jpg';


function  changeImg()
{
	document.nykaa.src = images[i];
	if(i<images.length-1)
	{
		i++;
	}else
	{
		i = 0;
	}
	setTimeout ('changeImg()',time);
}

window.onload = changeImg;