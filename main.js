
var mouse_event="";

canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="";
var width_of_line="";
var radius="";

function setParameters(){
    width_of_line=document.getElementById("width_line").value;
    radius=document.getElementById("radius").value;
    color=document.getElementById("color").value;

    console.log("radius: "+radius);
    console.log("color: "+color);
    console.log("width of line: "+width_of_line);
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouse_event="mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event=="mouseDown") {
        console.log("Current Positions of X and Y= ");
        console.log("X: "+current_position_of_mouse_x+", Y: "+current_position_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0, 2*Math.PI);
        ctx.stroke();
    }
}