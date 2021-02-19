export default function CrearMapa(map, src, canvas, ctx){
	let img = new Image();
	img.src = src;
	let map_size = 20;
	let tile_size = 16;
	let space = 2;
	let tile_SizeAdd = tile_size + space;
	let img_columns = 27;
	let canvasS_x = canvas.width / map_size;
	let canvasS_y = canvas.height / map_size;
	let aux = 0;
	let aux_y = 0;
	let cont = 0;
	for(let a = 0; a < map.length; a++){
		let index = map[a];
		let imgtile_x = (index % img_columns) * tile_SizeAdd;
		let imgtile_y = (Math.floor(index / img_columns)) * tile_SizeAdd;
		ctx.drawImage(img, imgtile_x, imgtile_y, tile_size, tile_size, aux, aux_y, canvasS_x, canvasS_y);
		cont++;
		if(cont == 20){
			cont = 0;
			aux = 0;
			aux_y += canvasS_y;
		}else{
			aux += canvasS_x;
		}
	}
}
