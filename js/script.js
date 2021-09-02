var resultados = document.getElementById('resultados');
var btnBuscar = document.getElementById('btnBuscar');

window.addEventListener('load', function () {
    fetch('usuarios.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getUsers(data);
            find(data)
        });
})

function getUsers(data) {

    var usuarios = [];
    var keys = Object.keys(data);
    keys.forEach(function (key) {
        usuarios.push(data[key]);
    });

    var myJsonString = JSON.parse(JSON.stringify(usuarios));
    console.log(myJsonString);
}


btnBuscar.addEventListener('click', buscar)

function buscar() {
    fetch('usuarios.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getUsers(data);
            find(data)
        });
};


function find(usuarios) {

    //get hobby
    var hobbyCampo = document.getElementById('hobby');
    var hobby = hobbyCampo.value;

    //get gender
    var sexoCampo = document.getElementById('sexo');
    var selected = sexoCampo.selectedIndex;
    var sexo = sexoCampo.options[selected].value;

    var resultsHTML = '';
    var numUsuarios = usuarios.length;

    for (var i = 0; i < numUsuarios; i++) {

        if (sexo == 'A' || sexo == usuarios[i].sexo || sexo == 'S') {
            if (hobby == '' || hobby == usuarios[i].hobby) {
                resultsHTML += '<div class="person-row">\
                                   <img src="images/' + usuarios[i].avatar + '" />\
                                   <div class="person-info">\
                                   <div>' + usuarios[i].nombre + '</div>\
                                   <div>' + usuarios[i].hobby + '</div></div>\
                                    <button class="btn btn">Agregar Amigo</button></div>';
            }
        }
    }
    resultados.innerHTML = resultsHTML;
}


