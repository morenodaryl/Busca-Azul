		var cantidadDeMinas = parseInt(prompt('Cantidas de circulos naranjas? (entre 1 y 8)','5'));
		var activo = 1; //Saber si el juego sigue activo
		var array = llenarArray(); //llamamaos a funcion para llenar el array con num aleatorios
		var minasEnJuego = 9 - cantidadDeMinas; // Cantidad de minas totales, que luego se restan 
		var color = ['rgb(0, 0, 255)','rgb(253, 172, 0)'];
		//para saber cuantas quedan y comparar con la cantidad de minas

		function llenarArray(){
			var x,y;
			var lleno = [[0,0,0],[0,0,0],[0,0,0]];
			var contador = 1;
			if (cantidadDeMinas<9 && cantidadDeMinas>0) {

				while (contador <= cantidadDeMinas){
					x = Math.floor(Math.random() * 3);
					y = Math.floor(Math.random() * 3);
					if (lleno[x][y] != 1) {
						lleno[x][y] = 1;
						contador++;
					};
				};


				window.onload = function(){document.getElementById('mensaje').innerHTML = "<h2>Quedan: " + minasEnJuego; + "</h2>"};
				console.log(lleno);

			}
			else{
				alert('no introduciste un numero correcto');
				activo = 0;
				window.onload = function(){
					document.getElementById('mensaje').innerHTML = '<h2><a href="buscaminas.html">Reiniciar?</a></h2>';
				};

			};
			return lleno;

		};
		

		function verMina(posx,posy,numeroCaja){
			if (activo == 1) {

				var colorCaja = document.getElementsByClassName('caja')[numeroCaja].style.backgroundColor;

				document.getElementsByClassName('caja')[numeroCaja].style.backgroundColor = color[array[posx][posy]];

				if (array[posx][posy] == 1) { //Comprobar si esa posicion tiene una
					document.getElementById('mensaje').innerHTML = '<h2>Perdiste :( <a href="buscaminas.html">Reiniciar?</a></h2>';
					
					alert('Perdiste :(');
					revelar();
					activo = 0;
				}
				else if (minasEnJuego == 1){ //Si da click cuando queda solo una que no tiene mina gana :D
					document.getElementById('mensaje').innerHTML = '<h2>Ganaste :) <a href="buscaminas.html">Reiniciar?</a></h2>';
					alert('Ganaste :)');
					revelar();
					activo=0;
				}
				else{
					if (colorCaja!=color[0]) {
						minasEnJuego--;
					};
					document.getElementById('mensaje').innerHTML = "<h2>Quedan: " + minasEnJuego; + "</h2>";
				};
			};

			function revelar(){
				 // Array para dar color //
				var i = 0; //Representa la caja
				for (var x = 0; x < 3; x++) {
					for (var y = 0; y < 3; y++) {
						document.getElementsByClassName('caja')[i].style.backgroundColor = color[array[x][y]];
						i++;
					};
				};
			};
			
		};
