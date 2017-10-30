var color=randomColorGenerator(6);
var colorpicked=color[Math.floor(Math.random()*6)];         
var squares=document.querySelectorAll(".square");
var text=document.querySelector(".text");
var reset=document.querySelector(".reset");

reset.addEventListener("click", function(){
	location.reload();
})


console.log("square number is ",squares,"length",squares.length);

var rgb=document.querySelector(".colordisplayed");
rgb.textContent=colorpicked;
for(var i=0;i<squares.length;i++){

    squares[i].style.background=color[i];
console.log(color[i],"bg color",squares[i].style.backgroundColor);
    squares[i].addEventListener( "click", function(){
      var clickedcolor = this.style.backgroundColor;
      console.log("clickedcolor:",clickedcolor);
     if (clickedcolor===colorpicked){
	     text.textContent="Correct!";}
	 else{
	 	text.textContent="try again!";
     	}
}); 

}

function randomColorGenerator(numberOfColors){
var arr=[];
for(var i=0;i<numberOfColors;i++){
var 	r=Math.floor(Math.random()*256);
var 	g=Math.floor(Math.random()*256);
var 	b=Math.floor(Math.random()*256);
arr.push("rgb("+ r +", "+ g +", "+ b +")");
console.log(arr);
}
return arr;

}


