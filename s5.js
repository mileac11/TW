window.onload = function()
{
	var start = document.getElementById("start");
	var color = document.getElementById("color");
	var input = document.getElementById("input");
	var br = document.createElement("BR");
	document.body.appendChild(br);
	var ok = 0;
	var x = 0;

	start.onclick = function()
	{
		ok = 1;
		var t = setTimeout(function()
			{
				ok = 2;
				alert("S-au apasat " + x + " taste");
			},60000);
	}

	window.addEventListener("keypress",function (event)
	{
		if(ok == 1)
		{
			x++;
			var patrat = document.createElement("div");
			patrat.style.width = "50px";
			patrat.style.height = "50px";
			patrat.style.display = "inline";
			patrat.style.float = "left";
			patrat.innerHTML = event.key;
			document.body.appendChild(patrat);
		}
	})

	var patrate = document.getElementsByTagName('div');
	var i = 0;
	color.onclick = function()
	{
		var x = setInterval(function()
		{
			if(i != patrate.length)
			{
				patrate[i].style.backgroundColor = input.value;
				i++;
			}
			else
				clearTimeout(x);

		},3000);
	}
}