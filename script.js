var ul=document.getElementById("list")
var li



var addButton = document.getElementById("add")
addButton.addEventListener("click",addItem)

var removeButton = document.getElementById("remove")
removeButton.addEventListener("click",removeItem)



function addItem()
{
	// console.log("Add Button clicked")
	var input=document.getElementById("input")
	var item = input.value;
	ul = document.getElementById("list")
	var textnode = document.createTextNode(item)

	if(item === " ")
	{	
		alert("Add a TODO")
		// const myNewPara = document.createElement('p')
		// myNewPara.textContent="Enter your TODO"
		// document.querySelector('body').appendChild(myNewPara)
	}
	else
	{	//create li
		li = document.createElement("li")
		
		//create checkbox
		var checkbox = document.createElement("input")
		checkbox.type = "checkbox"
		checkbox.setAttribute("id","check")

		//create label
		var label = document.createElement("label")
		label.setAttribute("for","item")

		//adding on these elements of the web page
		ul.appendChild(label)
		li.appendChild(checkbox)
		label.appendChild(textnode)
		li.appendChild(label)
		ul.insertBefore(li,ul.childNodes[0])

		//check for error
		setTimeout(() => {
			li.className="visual";
		
		},5);
		
		
		input.value=" "
 	}
}

function removeItem()
{
	// console.log("Remove Button clicked")
	li=ul.children
	for(i=0;i<li.length;i++)
	{
		// const element = li[i]
		// console.log(element)
		while(li[i] && li[i].children[0].checked)
		{
			ul.removeChild(li[i])
		}
	}
}