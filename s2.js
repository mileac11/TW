window.onload = function()
{
	var start = document.getElementById("start");
	var intrebare = document.getElementById("intrebare");
	var form = document.getElementById("form");
	var butoane = document.getElementsByTagName("input");

	intrebare.style.visibility = "hidden";
	form.style.visibility = "hidden";

	start.onclick = function()
	{
		intrebare.style.visibility = "visible";
		form.style.visibility = "visible";
		var t = setTimeout(function()
			{document.body.removeChild(form);
			 alert("A expirat timpul");
			},5000);

		for(let i=0; i<butoane.length;i++)
		{
			butoane[i].onchange = function()
			{
				if(butoane[i].checked)
				{
					document.getElementById("raspuns").innerHTML = 'raspuns   ' + butoane[i].value;
					clearTimeout(t);
				}
			}
		}
	}
}