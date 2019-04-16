function getE(a) {
    return document.getElementById(a);
}

function getT(a, b) {
    return document.getElementsByTagName(a)[b];
}

function getC(a) {
    return document.getElementsByClassName(a);
}

function block(a) {
    return a.style.display = "block";
}

function none(a) {
    return a.style.display = "none";
}
var p = getT("p", 0);
var textarea = getT("textarea",0);

var editBtn = getE("editBtn");
var styleBtn = getE("styleBtn");
var safeBtn = getE("safeBtn");
var addBtn = getE("addBtn");
var blockBtn = getE("blockBtn");
var passBtn = getE("passBtn");

var editBlock = getE("editBlock");
var styleBlock = getE("styleBlock");
var addBlock = getE("addBlock");



// BUTTONBLOCK

editBtn.addEventListener('click', function() {
	 if(editBlock.style.display == "none") {
        block(editBlock);
        none(styleBlock);
        none(addBlock);
    }
    textarea.innerHTML = p.innerHTML;
    textarea.style.display = "block";
    safeBtn.disabled = false;
    addBtn.disabled = false;
});

styleBtn.addEventListener('click', function() {
    block(styleBlock);
    none(editBlock);
});

safeBtn.addEventListener('click', function() {
	 if(textarea.value == ""){
	 	textarea.value = "Enter content";
	 	textarea.addEventListener('click', function(){
	 		textarea.value = "";
	 	});
	 }else{
	 	p.innerHTML = textarea.value;
	 }
}); 

addBtn.addEventListener('click', function() {
    none(editBlock);
    none(styleBlock);
    block(addBlock);
});

blockBtn.addEventListener('click', function(){
    getE("popup").style.display = "block";
    getE('mainBlock').classList.add('disabled');
 });

passBtn.addEventListener('click', function(){
   	if(getE("pass").value == "12345"){
	   	getT("span", 0).innerHTML = "";
	   	getE("popup").style.display = "none";
	    getE('mainBlock').classList.remove('disabled');
	    getE("pass").value = "";
   }
   else{
   	getT("span", 0).innerHTML = "Incorect password";
   	getE("pass").value = "";
   }
});


// STYLEBLOCK

document.forms.textSize.onclick = function(){
	var fontSize = document.querySelector('input[name="fontSize"]:checked').value;
	p.style.fontSize = fontSize;
}

getE("fonts").onclick = function(){ 
	p.style.fontFamily = getE("fonts").options[getE("fonts").selectedIndex].value;
}

getE("bold").onclick = function(){
	if(getE("bold").checked){
		p.style.fontWeight = "bold";
	}
	else{
        p.style.fontWeight = "normal";
	}
}

getE("italic").onclick = function(){
	if(getE("italic").checked){
		p.style.fontStyle = "italic";
	}
	else{
        p.style.fontStyle = "normal";
	}
}

getE("underline").onclick = function(){
		if(getE("underline").checked){
			p.style.textDecoration = "underline";
		}
		else{
	        p.style.textDecoration = "none";
		}
}
getE("fontPicker").onchange = function(){
	p.style.color = this.value;
}

getE("bgPicker").onchange = function(){
	getE("displayBlock").style.background = this.value;
}


// ADDBLOCK
var tableForm = getE("tableForm");
var listForm = getE("listForm");

getE("table").addEventListener("click", function(){
	block(tableForm);
	none(listForm);	
});

getE("list").addEventListener("click", function(){
	block(listForm);
	none(tableForm);
});

 

// ADDBLOCK TABLE

getE("createTableBtn").addEventListener("click", function(){
	 function number(a){
			if(a % a === 0){
				return true;
			}
			else{
				return false;
			}
	 	}

	 var row = getE("row").value;
	 var cell = getE("cell").value;
	 var cellWidth = getE("cellWidth").value;
	 var cellHeight = getE("cellHeight").value;
	 var borderWidth = getE("borderWidth").value;
	 var borderStyle = getE("brdrStyle").options[getE("brdrStyle").selectedIndex].value;
	 var borderColor = getE("brdrClr").options[getE("brdrClr").selectedIndex].value;

	

  if(number(row)==true && number(cell)==true && number(cellWidth)==true && number(cellHeight)==true && number(borderWidth)==true){
  
 		textarea.innerHTML = textarea.value + '<table ' + 'border=' + borderWidth + ' style=border-style:' + borderStyle + ' bordercolor=' + borderColor +'>';
  			for(var i=0; i<row; i++){
    			textarea.innerHTML = textarea.value + '<tr>';
	     			for(var j=0; j<cell; j++){
	             		textarea.innerHTML = textarea.value + '<td' + ' style=border-style:' + borderStyle + ' width=' + cellWidth + ' height=' + cellHeight + '>' + '</td>';
	         		}  
	     	}
	     		textarea.innerHTML = textarea.value + '</tr>';
     	textarea.innerHTML = textarea.value + '</table>';

	none(addBlock);
	block(editBlock);

	getE("row").value = "";
	getE("cell").value = "";
	getE("cellWidth").value = " ";
	getE("cellHeight").value = " ";
	getE("borderWidth").value = " ";
	}
  else{
  	 var modal = getE("modal");
     block(modal);
     	function modalNone(){
     	none(modal);
     }
   	 setTimeout(modalNone, 3000);
   }
});



//ADDBLOCK LIST


var olType = getE("olType");
var ulType = getE("ulType");
var ul = getE("ul");
var ol = getE("ol");

none(olType);

ul.addEventListener("click", function(){
	block(ulType);
	none(olType);
});

ol.addEventListener("click", function(){
	block(olType);
	none(ulType);
});




getE("createListBtn").addEventListener("click", function(){

	var ultype = getE("ultype").options[getE("ultype").selectedIndex].value;
	var oltype = getE("oltype").options[getE("oltype").selectedIndex].value;
	var li = getE("countItems").value;
  
    if( li % li == 0){

	    if(ul.checked == true){
	    	textarea.innerHTML = textarea.value + '<ul style=list-style-type:' + ultype + '>';
	     		for(var i=0; i<li; i++){
	        		textarea.innerHTML = textarea.value + '<li>Some txt</li>';
	     			}
	     	textarea.innerHTML = textarea.value + '</ul>';
	    }

	    if(ol.checked == true){
	    	textarea.innerHTML = textarea.value + '<ol type=' + oltype + '>';
	     		for(var j=0; j<li; j++){
	        		textarea.innerHTML = textarea.value + '<li>Some txt</li>';
	     			}
	     	textarea.innerHTML = textarea.value + '</ol>';
	    }

		none(addBlock);
		block(editBlock);

		getE("countItems").value = "";

	}
	else{
		var modal = getE("modal");
     	block(modal);
     		function modalNone(){
     		 none(modal);
     	}
   	 	setTimeout(modalNone, 3000);
	}
	});