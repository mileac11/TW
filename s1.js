function bFunct(elem)
{
	var copii = elem.getElementsByTagName("b");
	var ul = document.createElement("ul");
	for(var i=0;i<copii.length;i++)
	{
		var li = document.createElement("li");
		li.innerHTML = copii[i].innerHTML;
		ul.appendChild(li);
	}
	var frate = elem.nextElementSibling;
	document.body.insertBefore(ul,frate);
}

window.onload = function()
{
	var colectie = document.getElementsByTagName("p");

	for(let i = 0;  i < colectie.length; i++ )
	{
		colectie[i].nr = 0;
		colectie[i].onclick = function()
		{
			if(colectie[i].nr == 0)
				{
					colectie[i].nr = 1;
					bFunct(colectie[i]);
				}
		}
	}
}