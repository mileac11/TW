window.onload = function()
{
	var ok = 0;
	var x=0;
	var t = setTimeout(function()
		{
			ok=1; 
			alert('S-au introdus ' + x + ' culori.')
		},60000);
	var input = document.getElementById("input");
	var save = document.getElementById("save");
	var del = document.getElementById("delete");


	save.onclick = function()
	{
		if(ok == 0)
		{		
		var div = document.createElement("DIV");
		div.style.width = "50px";
		div.style.height = "50px";
		div.style.display = "inline";
		div.style.float = "left";
		div.style.backgroundColor = input.value;
		document.body.insertBefore(div,document.body.firstChild);
		x++;
		}
	}

	del.onclick = function()
	{
		var patrate = document.body.querySelectorAll('div');
		var i = patrate.length - 1;
		var a = setInterval(function(){
			if(i != -1)
			{
				document.body.removeChild(patrate[i]);
				i--;
			}
			else
			{
				clearInterval(a);
			}
		},3000);
	}

}
