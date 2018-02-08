$(".loginbtn").click

//indicate which kind of data we are going to transger
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}
//recovering data
function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}