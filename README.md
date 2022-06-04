<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <title>Paint con JavaScript</title>
    <link rel = "stylesheet" type = "text/css" href="css/style.css">
</head>
<body>
    <div class="testbox">
        <h1 id="titulo">Paint con canvas</h1>
    </div>
    <div class="testcanvas">
        <canvas width="800" height="600" id = "canvas"></canvas><br>
    </div>
    <p>color del pincel
    <input type="color" id="color" oninput="definicionColor(this.value);"></p>
    <p>tamaño del pincel
    <input type="range" id="grosor" oninput="definicionGrosor(this.value);" min="1" max="20" value="1"></p>
    <input type="button" id= "borrador" value= "Borrar Todo" onclick="limpiar()">
    <script src = "pain.js"></script>
</body>
</html>
