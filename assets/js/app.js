/*función drag and drop collage*/

function drag(ev){
	console.log(ev.target.id);
	ev.dataTransfer.setData("text", ev.target.id);
}
drag();

function permitirDrop(ev){
	ev.preventDefault();
}
permitirDrop();

function drop(ev){
	ev.preventDefault();
	var id_foto=ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(id_foto));
}
drop();