//Cuando se carge la pagina html
window.addEventListener('load', function () {
    fetch('usuarios.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {        
            findUsersOrUser(data)
        });
})


//Buscar Sexo o Hobbies
function btnSearch() {
    fetch('usuarios.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            findUsersOrUser(data)
        });
};

//buscar todo los usuarios o un usuario
function findUsersOrUser(usuarios) {

    var resultados = document.getElementById('resultados');

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
            }else if(hobby != usuarios[i].hobby){
              alert("Hobbie no encontrado")
              location.load();
            }
        }
    }
    resultados.innerHTML = resultsHTML;
}


