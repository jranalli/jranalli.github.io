function extractPageName(hrefString)
{
	var arr = hrefString.split('/');
	return  (arr.length < 2) ? hrefString : arr[arr.length-2].toLowerCase() + arr[arr.length-1].toLowerCase();
}

function setActiveMenu(arr, crtPage)
{
	for (var i=0; i < arr.length; i++)
	{
		var linkpage = extractPageName(arr[i].href)
		if(linkpage == crtPage)
		{
			arr[i].className = "active";
		}
	}
}

function setPage()
{
	hrefString = document.location.href ? document.location.href : document.location;

	if (document.getElementById("navBar") !=null )
	setActiveMenu(document.getElementById("navBar").getElementsByTagName("a"), extractPageName(hrefString));
}