var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;

player_X=10;
player_Y=10;

var player_object="";
var block_image_object="";
function player_update(){
fabric.Image.fromURL("player.png", function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top:player_Y,
left:player_X
});
canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(150);
    block_image_object.scaleToHeight(150);
    block_image_object.set({
    top:player_Y,
    left:player_X
    });
    canvas.add(block_image_object);
    });
    }

    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);

if(e.shiftKey==true && keypress=="80"){
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keypress=="77"){
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keypress=="87"){
console.log("w");
new_image("wall.jpg");
    }
    if(keypress=="71"){
        console.log("g");
        new_image("ground.png");
        }
        if(keypress=="76"){
            console.log("l");
            new_image("light_green.png");
                }
                if(keypress=="84"){
                    console.log("t");
                    new_image("trunk.jpg");
                        }
                        if(keypress=="82"){
                            console.log("r");
                            new_image("roof.jpg");
                                }
                                if(keypress=="68"){
                                    console.log("d");
                                    new_image("dark_green.png");
                                        }
                                        if(keypress=="85"){
                                            console.log("u");
                                            new_image("unique.png");
                                                }
                                                if(keypress=="67"){
                                                    console.log("c");
                                                    new_image("cloud.jpg");
                                                        }
                                                        if(keypress=="38"){
                                                            console.log("up");
                                                            up();
                                                                }
                                                                if(keypress=="40"){
                                                                    console.log("down");
                                                                    down();
                                                                        }
                                                                        if(keypress=="39"){
                                                                            console.log("right");
                                                                            right();
                                                                                }
                                                                                if(keypress=="37"){
                                                                                    console.log("left");
                                                                                    left();
                                                                                        }
                                                                                    

    }
    function up() {
     if(player_Y >=0)
      { player_Y = player_Y - block_image_height;
         console.log("block image height = " + block_image_height);
          console.log("When Up arrow key is pressed, X = " + player_X + " , Y = "+player_Y);
           canvas.remove(player_object);
            player_update();
         } }
         function down() {
            if(player_Y <=500)
             { player_Y = player_Y + block_image_height;
                console.log("block image height = " + block_image_height);
                 console.log("When Down arrow key is pressed, X = " + player_X + " , Y = "+player_Y);
                  canvas.remove(player_object);
                   player_update();
                } }
                function left() {
                    if(player_X >=0)
                     { player_X = player_X - block_image_width;
                        console.log("block image width = " + block_image_width);
                         console.log("When Left arrow key is pressed, X = " + player_X + " , Y = "+player_Y);
                          canvas.remove(player_object);
                           player_update();
                        } }
                        function right() {
                            if(player_X <=850)
                             { player_X = player_X + block_image_width;
                                console.log("block image width = " + block_image_width);
                                 console.log("When Right arrow key is pressed, X = " + player_X + " , Y = "+player_Y);
                                  canvas.remove(player_object);
                                   player_update();
                                } }
               

