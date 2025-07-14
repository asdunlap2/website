var move = document.getElementsByClassName("move_img");
var move2 = document.getElementsByClassName("move_img_loop");
// var fps = 60;
var scroll_img_size = 18;


setInterval(scrollLoop, 16);
var hop = 0;


function scrollLoop(){
  var size = move.length;
  hop += .15;
  var max = 182.6;

//Go back to the start when scrolling is over
  if (hop >= max){
    hop = 0; //-scroll_img_size*size;
  }

  if(size > 0){
    for(let i = 0; i < size; i++){
      move[i].style.left = hop+'%';
      move2[i].style.left = hop+'%';
    }
  }
}