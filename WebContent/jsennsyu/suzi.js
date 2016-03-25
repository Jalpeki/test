/**
 *
 */
function na(){
 for(i=1 ; i<31;i++){
document.write(i+" ");

   }
}

  function mon2(){
	  document.write("<br></br>");
	  for(i=1 ; i<31;i++){
		  if(i%3==0){
		  document.write(i + " ");
		   }
		  }
  }
  function mon3(){
	  document.write("<br></br>");
	  var j =0
	  for(i=1 ; i<100;i++){
		 if(i%3==0){
	   document.write(i+" ");
		j++ }
		 if(j==30){
			 break;
			 document.write(j+" ");
		 }
     }
  }

  function mon4(){
	  document.write("<br></br>");
	  var j =0
	  for(i=1 ; i<100;i++){
		 if(i%3==0){
	   document.write(i+" ");
		j++ }
		 if( j%10 == 0 ){
			  document.write("<br>");
		  }
		 if(j==30){
			 break;
		 }

     }

  }

  function mon5(){
	  document.write("<br></br>");
	  var j =0
	  for(i=1 ; i<100;i++){
		 if(i%4==0){
	   document.write(i+" ");
		j++ }
		 if( j%5 == 0 ){
			  document.write("<br>");
		  }
		 if(j==20){
			 break;
		 }

     }
	  
  }

