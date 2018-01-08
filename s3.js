window.onload = function()
{
	var imagini = document.getElementsByTagName("li");
	function imagine(nr)
	{
		var sursa = imagini[nr].innerHTML;
		var imagine = document.createElement("img");
		imagine.src = sursa;
		imagine.alt = "eroare";
		imagine.fisier = sursa;
		imagini[nr].innerHTML = "";
		imagini[nr].appendChild(imagine);
	}

	function sterge(i)
	{
		var fisier = imagini[i].children[0].fisier;
		imagini[i].innerHTML = fisier;
	}
	document.getElementById("start").onclick = function()
	{
		imagine(0);

		for(let i=1; i<=imagini.length;i++)
		{
			setTimeout(function()
			{
				sterge(i-1);
				if(i<imagini.length)
			{
				imagine(i);
			}
			},3000*i);
			
			
		}

	}
}