// JavaScript Document

var score=0;
function correct() {
	score+=100;
	document.getElementById("scoore").innerHTML= score;


}
function incorrect(){
	score-=50
	document.getElementById("scoore").innerHTML= score;
}
	
var questions=["Who is the Director of IIT-Kharagpur", "Who is the Director of IIT-Kanpur","Who is the Director of IIT-Delhi","Who is the Director of IIT-Bombay", "Is Your Final Score"];
var directors=[["Virendra Kumar Tewari","Abhay Karandikar","V.Ramgopal Rao","Subhashish Chaudri"],["Abhay Karandikar","V.Ramgopal Rao","Virendra Kumar Tewari","Subhashish Chaudri"],["V.Ramgopal Rao","Virendra Kumar Tewari","Abhay Karandikar","Subhashish Chaudri"],["Subhashish Chaudri","Virendra Kumar Tewari","V.Ramgopal Rao","Abhay Karandikar"]];
var i=1;
function call_question(){

	document.getElementById("question_main").innerHTML=questions[i];
		if(i==4){
		var elem=document.getElementById("btn1");
		elem.parentNode.removeChild(elem);
		var elemm=document.getElementById("btn2");
		elemm.parentNode.removeChild(elemm);
		var elemmm=document.getElementById("btn3");
		elemmm.parentNode.removeChild(elemmm);
		var elemmmm=document.getElementById("btn4");
		elemmmm.parentNode.removeChild(elemmmm);
		false;
		document.getElementById("2").remove();
		document.getElementById("3").remove();
		document.getElementById("4").remove();
	}
	else{
	document.getElementById("1").innerHTML=directors[i][0];
	document.getElementById("2").innerHTML=directors[i][1];
	document.getElementById("3").innerHTML=directors[i][2];
	document.getElementById("4").innerHTML=directors[i][3];
	i++
}}
