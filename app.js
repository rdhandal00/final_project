var questionSet=[{id:"q001",ques:"Entomology is the science that studies", ans:"option2", option1:"Behaviour of human being", option2:"Insects", option3:"The origin and history of technical and scientific terms", option4:"The formation of rocks"}, {id:"q002",ques:"Garampani sanctuary is located at", ans:"option2", option1:"Junagarh, Gujarat", option2:"Diphu, Assam", option3:"Kohima, Nagaland", option4:"Gangtok, Sikkim"}, {id:"q003",ques:"ICAO stands for", ans:"option1", option1:"International Civil Aviation Organization", option2:"Indian Corporation of Agriculture Organization", option3:"Institute of Company of Accounts Organization", option4:"None of the above"}, {id:"q004",ques:"where is the capital of india", ans:"option2", option1:"pune", option2:"delhi", option3:"mumbai", option4:"chennai"}, {id:"q005",ques:"Who wrote javascript", ans:"option1", option1:"Brendan Eich", option2:"james gosling", option3:"Dennis Ritchie", option4:"Brian Kernighan"}]


function startTest() {
	const div = document.getElementById("navigator");
	const index=div.getAttribute("index");
	if(index == 0){
		document.getElementById("correctAnsCount").value=0;
	}
	if(index < questionSet.length){
		document.getElementById("navigator").value="Next";
		getQestionSet(index);
	 if(index == (questionSet.length -1)) {
		document.getElementById("navigator").value="End";
		div.setAttribute("onclick", "showResult();");
		}
	}
	div.setAttribute("index", parseInt(index)+1);
}

function getQestionSet(i){
	const quesId=questionSet[i].id;
	const ques=questionSet[i].ques;
	document.getElementById("question").innerHTML="<h4>Ques. "+ques +" ?</h4>";
	document.getElementById("quesId").value=quesId;
	
	let htmlOptions='<input type="radio" id="option1" name="option" value="'+questionSet[i].option1+ '" onclick="checkAnswer(\'option1\')" /><label id="option1label" class="option1" >'+questionSet[i].option1+ '</label><br>';
	htmlOptions=htmlOptions + '<input type="radio" id="option2" name="option" value="'+questionSet[i].option2+ '" onclick="checkAnswer(\'option2\')" /><label id="option2label" class="option2" >'+questionSet[i].option2+ '</label><br>' + '<input type="radio" id="option3" name="option" value="'+questionSet[i].option3+ '" onclick="checkAnswer(\'option3\')" /><label id="option3label" class="option3" >'+questionSet[i].option3+ '</label><br>' + '<input type="radio" id="option4" name="option" value="'+questionSet[i].option4+ '" onclick="checkAnswer(\'option4\')" /><label id="option4label" class="option4" >'+questionSet[i].option4+ '</label><br>';
	
	document.getElementById("optionDiv").innerHTML=htmlOptions;
}
function checkAnswer(optionId) {
	const quesId=document.getElementById("quesId").value;
	const selectedOpt=document.getElementById(optionId).value;
	let correctOptionId;
	let correctAns=null;
	for(let i=0;i<questionSet.length; i++){
		if(questionSet[i].id==quesId){
			correctOptionId=questionSet[i].ans;
			
			if("option1" ==correctOptionId){
				correctAns=questionSet[i].option1;
			}else if("option2" == correctOptionId){
				correctAns=questionSet[i].option2;
			}else if("option3" ==correctOptionId){
				correctAns=questionSet[i].option3;
			}else if("option4" == correctOptionId){
				correctAns=questionSet[i].option4;
			}
				
		}
	}
	if(correctAns == selectedOpt){
		let totalCorrect=document.getElementById("correctAnsCount").value;
		document.getElementById("correctAnsCount").value=parseInt(totalCorrect) +1;
		const div = document.getElementById(optionId+"label");
		div.setAttribute("style", "background-color: green;");
	}else {
		const div = document.getElementById(optionId+"label");
		div.setAttribute("style", "background-color: red;");
		const correctDiv = document.getElementById(correctOptionId+"label");
		correctDiv.setAttribute("style", "background-color: green;");
	}
	document.getElementById("option1").disabled=true;
	document.getElementById("option2").disabled=true;
	document.getElementById("option3").disabled=true;
	document.getElementById("option4").disabled=true;
}

function showResult() {
	const result=document.getElementById("correctAnsCount").value;
	document.getElementById("optionDiv").innerHTML="<h3>Total Correct Answers ::"+result;
	document.getElementById("question").innerHTML="";
}