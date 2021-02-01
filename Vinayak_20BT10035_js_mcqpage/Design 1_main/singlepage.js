// JavaScript Document
let score=0;
function check(){

//-------------------------------------------------------------------------------------------------------------------//
	// single correct
//-------------------------------------------------------------------------------------------------------------------//	
	if (document.getElementById("correct_101").checked==true){score+=4;}
	if (document.getElementById("incorrect_101").checked==true || document.getElementById("incorrect_102").checked==true || document.getElementById("incorrect_103").checked==true){score-=1;}

	if (document.getElementById("correct_201").checked==true){score+=4;}
	if (document.getElementById("incorrect_201").checked==true || document.getElementById("incorrect_202").checked==true || document.getElementById("incorrect_203").checked==true){score-=1;}
//-------------------------------------------------------------------------------------------------------------------//
	//multi correct
//-----------------------------not all options are correcct----------------------------------------------------------//
	if (document.getElementById("incorrect_301").checked==true){score-=2;}
	else{
		var i;
		var temp_score=0;
		for (i=1;i<=3;i++){
			if(document.getElementById("correct_30"+i).checked==true){temp_score+=1;};
		}
		if (temp_score==3){score+=4;}
		else{score+=temp_score;}
	}
//--------------------multi correct with all options correct----------------------------------------------------------//
	var i;
	for (i=1;i<=4;i++){
		if(document.getElementById("correct_40"+i).checked==true){score+=1;}	
	}
//--------------------------------------------------------------------------------------------------------------------//		
document.getElementById("score_show").innerHTML="YOUR SCORE IS  " + score+"/16";
}
