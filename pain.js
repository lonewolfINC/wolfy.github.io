var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");
var rect =  canvas.getBoundingClientRect();
var x = 0, y = 0, dibujando = false, color = "black", grosor = 1;


function limpiar()
{
    lienzo.clearRect(0, 0, canvas.width, canvas.height);
}

function definicionColor(c)
{
    color=c;
}

function definicionGrosor(g)
{
    grosor=g;
}

canvas.addEventListener("mousedown", function(e){
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    dibujando=true;
});

canvas.addEventListener("mousemove", function(e){
    if(dibujando===true){
        dibujar(x, y, e.clientX - rect.left, y=e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

    }
});

canvas.addEventListener("mouseup", function(e){
    if(dibujando===true){
        dibujar(x, y, e.clientX - rect.left, y=e.clientY - rect.top);
        x = 0
        y = 0
        dibujando = false
    }
});

function dibujar(x1, y1, x2, y2)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}