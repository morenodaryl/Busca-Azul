

var template = '<div class="caja">Caja</div>';

document.getElementsByClassName('titulo')[0].style = "display: block;";

var array = llenarArray();

function llenarArray(){
	var x,y;
	var lleno = [[0,0,0],[0,0,0],[0,0,0]];
	var contador = 0;
	while (contador <= 4){
		x = Math.floor(Math.random() * 3);
		y = Math.floor(Math.random() * 3);
		if (lleno[x][y] != 1) {
			lleno[x][y] = 1;
			contador++;
		};
	};
	return lleno;
};


//document.getElementsByClassName('caja')[0].addEventListener('click',function(){
//	alert('daryl');
//});

