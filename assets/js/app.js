$(document).ready(function() {
  $('#login').click(function() {
    event.preventDefault();
    if (checkLogin() === true) {
      location.replace("gallery.html");
    } else {
      alert(`Hay un problema con tu contraseña. Recuerda que debe tener al menos 6 caracteres y no debe contener números secuenciales.`);
    }
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
  let pass = $('#pass').val();

  if (avoidEmptyFields('input') !== false) {
    if (verifyPassLength(pass) === true) {
      if (verifyPassIsNumbers(pass) === false) {
        return true;
      } else if (verifyPassIsNumbers(pass) === true) {
        if (verifyPassSequential(pass) === true) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

const verifyPassLength = pass => {
  if (pass.length >= 6) {
    return true;
  } else {
    return false;
  }
};

const verifyPassIsNumbers = pass => {
  if (Number(pass) === NaN) {
    return false;
  } else {
    return true;
  }
};

const verifyPassSequential = pass => {
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] <= pass[i+1]) {
      return false;
    } else {
      return true;
    }
  }
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