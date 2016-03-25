/**
 *
 */
function ho(){
	for(ni= 0;  ni<5; ni++){
	document.write("★");
	}
}

function matigai(){
	document.write("<br></br>");
	for(ni= 0;  ni<=25; ni++){
		document.write("★");
		if( ni%5 == 0 ){
		document.write("<br>");
	}
  }
}

function ho2(){
	document.write("<br></br>");
	for(bo= 0;  bo<5; bo++){
		document.write("<br>")
	for(ni= 0;  ni<5; ni++){
	document.write("★");
	}
   }
}

function ho3(){
	document.write("<br></br>");
	 //boolean型変数　yornを宣言する
	  var yorn = true;
	  for( ni=0;ni<5;ni++){
	   for( jo=0;jo<=4;jo++){
	    /*
	    boolean型変数 yornが trueとfalseを交互に繰り返し、
	    文字「-」と、「*」を交互に表示します。
	    */
	    if(yorn == true){
	    	document.write("★");

	    //boolean型変数 yornを「true」から「false」に変更する
	     yorn = false;
	    }else {
	    	document.write("☆");
	    //boolean型変数 yornを「false」から「true」に変更する
	     yorn = true;
	    }
	   }

	   //改行文字のエスケープシークェンスを出力
	   document.write("\n");
	  }
	 }

function mno(){
	document.write("<br></br>");
	for(ni= 1;  ni<=25; ni++){
		if(ni%2==0){
			document.write("☆");
		}
		if(ni%2!=0){
			document.write("★");
		}
		if(ni%5==0){
			document.write("\n");
		}
	}
}

function ho4(){
	document.write("<br></br>");
	for(bo= 0;  bo<5; bo++){
		document.write("<br>")
	for(ni= 1;  ni<5; ni++){
		if(ni==1){
		document.write("☆");
		}
	document.write("★");
	}
   }
}

function ho5(){
	document.write("<br></br>");
	for(ni= 1;  ni<=25; ni++){
		if(ni==1){
			document.write("☆");
		}else if (ni==7){
			document.write("☆");
		}else if (ni==13){
			document.write("☆");
		}else if (ni==19){
			document.write("☆");
		}else if (ni==25){
			document.write("☆");
		}else{
			document.write("★");
		}
		if(ni%5==0){
			document.write("\n");
		}
	}
}

function mno3(){
	document.write("<br></br>");
	for(ni= 1;  ni<=25; ni++){
		if(ni%6==1){
			document.write("☆");
		}
		if(ni%6!=1){
			document.write("★");
		}
		if(ni%5==0){
			document.write("\n");
		}
	}
}

function shi4(){
	for(i = 1; i<=5; i++){
		if(i==j){
		document.write("☆");
		}else{
			document.write("★");
		}
	}
}
for(j=1; j<=5; j++){
	hoshi4();
	document.write("<br>");
}


function ho6(){
	for(i=0; i<=4; i++){
		document.write("\n");
		for(c=0; c<i+1; c++){
			document.write("★");
		}
	}
}


function ho7(){
	for(i=0; i<=4; i++){
		document.write("\n");
		for(c=0; c<i+1; c++){
			if(i==c){
				document.write("☆");
				}else{
					document.write("★");

		}
	}
}
}


function ho8(){
	document.write("<br></br>");
	for( var y=0; y<5; y++){
//		document.write("\n");
		for( var x = 0; x < 5-y; x++ ){
			document.write("★");
		}
		document.writeln();
	}
}











