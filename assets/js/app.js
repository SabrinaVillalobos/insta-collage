$(document).ready(function() {
  $('#login').click(function() {
    event.preventDefault();
    checkLogin();
  });
});


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

const checkLogin = () => {
  let username = $('#name').val();
  let pass = $('#pass').val();

  if (avoidEmptyFields('input') !== false) {
    console.log('holi');
  }
};

const verifyUserName = username => {

};

const verifyPass = pass => {

};

const avoidEmptyFields = input => {
  let isValid;
  $(input).each(function() {
    if ($(this).val().length === 0){
      isValid = false;
    }
  });
  return isValid;
};