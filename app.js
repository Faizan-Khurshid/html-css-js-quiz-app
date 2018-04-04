function erase(){
	var key = document.getElementById('key');
	key.value = "";
}
function checker(){
	wrongkey();
	nothing();
	rightkey();
}
function nothing(){
	var key = document.getElementById('key').value;
	if (key == "") {
		var div  = document.getElementById('main-div');
		var ps = document.getElementsByTagName('p');
		if (ps.length == 0) {
			var p = document.createElement("p");
			var req = document.createTextNode("*Please Enter The Key and Press submit button");
			p.setAttribute("id","red");
			p.appendChild(req);
			div.appendChild(p);
		}else{
			if(ps[0].innerHTML == "*Invalid Key"){
				div.removeChild(ps[0]);
				var p = document.createElement("p");
				var req = document.createTextNode("*Please Enter The Key and Press submit button");
				p.setAttribute("id","red");
				p.appendChild(req);
				div.appendChild(p);
			}
		}
	}
	return;
}
function wrongkey(){
	var key = document.getElementById('key').value;
	if (key != "" && key != "1234" ) {
		var div  = document.getElementById('main-div');
		var ps = document.getElementsByTagName('p');
		if (ps.length == 0) {
			var p = document.createElement("p");
			var req = document.createTextNode("*Invalid Key");
			p.setAttribute("id","red");
			p.appendChild(req);
			div.appendChild(p);
		}else{
			if(ps[0].innerHTML == "*Please Enter The Key and Press submit button"){
				div.removeChild(ps[0]);
				var p = document.createElement("p");
				var req = document.createTextNode("*Invalid Key");
				p.setAttribute("id","red");
				p.appendChild(req);
				div.appendChild(p);
			}	
		}
	}
	return;
}
function rightkey(){
	var key = document.getElementById('key').value;
	if (key == "1234") {
		var div  = document.getElementById('main-div');
		div.innerHTML = "";
		quiz();
	}
}
function quiz(){
	function questions(question,choice1,choice2) {
	 	this.question = question,
	 	this.choice1 = choice1,
	 	this.choice2 = choice2
	 }
	function html(q,q_no){
		var div = document.getElementById('main-div');
		var h1 = document.createElement("h1");
	 	var quest = document.createTextNode(q.question);
	 	h1.appendChild(quest);
	 	div.appendChild(h1);
	 	choices(q,q.choice1,q_no);
	 	choices(q,q.choice2,q_no);
	 	
	}
	function choices(q,choice,q_no) {
		var div = document.getElementById('main-div');
		var div1 = document.createElement("div"); 
		var input1 = document.createElement("input");
	 	input1.setAttribute("type","radio");
	 	input1.setAttribute("name",q_no);
	 	div1.setAttribute("id","block");
	 	input1.setAttribute("class",q_no);
	 	div1.appendChild(input1);
	 	var label1 = document.createElement("label")
	 	var choice1 = document.createTextNode(choice);
	 	label1.appendChild(choice1);
	 	div1.appendChild(label1);
	 	div.appendChild(div1);
	}
	q1 = new questions("Q1.HTML stands for","Hyper Text Markup Language","Hyper Text Market Language");
	q2 = new questions("Q2.CSS stands for","Cascade Style Sheets","Cascading Style Sheets");
	q3 = new questions("Q3.We can add single line comments in javascript by typing:","/*","//");

	html(q1,1);
	html(q2,2);
	html(q3,3);

	

	var div = document.getElementById('main-div');
	var div1 = document.createElement("div");
	var submit = document.createElement("input");
	submit.setAttribute("type","submit");
	submit.setAttribute("onClick","answers()");
	submit.setAttribute("class","btn btn-info margin");
	submit.setAttribute("id","submit");
	div1.appendChild(submit);
	div.appendChild(div1);

}

var correct = 0;
var warning = false;

function answers() {
	var c_name = [1,2,3]
	var correctans = ["Hyper Text Markup Language","Cascading Style Sheets","//"]
	for(var j = 0;j<c_name.length;j++){
		var checked =false;
		a=document.getElementsByClassName(c_name[j]);
		for (var i = 0;i<a.length;i++) {
			if(a[i].checked == true){
				checked = true;
				var stdans = a[i].nextSibling.innerHTML
				if (stdans == correctans[j]) {
					correct += 1;		
				}
			}
		}
		if (checked == false){
			if(warning == false) {
					warning = true;
					var parent = document.getElementById('main-div');
					var div = document.createElement("div");
					var p = document.createElement("p");
					var text = document.createTextNode("*Please answer all questions");
					p.setAttribute("id","red");
					p.appendChild(text);
					div.appendChild(p);
					parent.appendChild(div);
					return;
			}else{
				return;
			}
		}
	}
	var div = document.getElementById('main-div');
	div.innerHTML = "";
	result(correct);
}

function result(correct){
	var div = document.getElementById('main-div');
	var h1 = document.createElement("h1");
	var h1text = document.createTextNode("Your Result:")
	h1.appendChild(h1text);
	div.appendChild(h1);
	var div1 = document.createElement("div");
	var h2 = document.createElement("h2");
	var h2text = document.createTextNode("correct answers : " + correct);
	var br = document.createElement("br");
	var	h2_1 = document.createTextNode("wrong answers : " + (3-correct));
	h2.appendChild(h2text);
	h2.appendChild(br);
	h2.appendChild(h2_1);
	div1.appendChild(h2);
	div.appendChild(div1);
}
