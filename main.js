var mouseEvent= "empty";
var last_position_of_x;
var last_position_of_y;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color= "black";
width_of_the_line= 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color= document.getElementById("colour").value;
    width_of_the_line= document.getElementById("width").value;

    mouseEvent= "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;

    if (mouseEvent== "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.moveTo (last_position_of_x, last_position_of_y);
        ctx.lineTo (current_position_of_x, current_position_of_y);
        ctx.stroke();

    }
    last_position_of_x= current_position_of_x;
    last_position_of_y= current_position_of_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent= "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent= "mouseleave";
}
function cleararea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}