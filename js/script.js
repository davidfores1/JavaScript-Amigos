var usuarios = [
    {
        nombre: 'vanessa',
        sexo: 'F',
        hobby: 'cocinar',
        avatar: 'avatar1.png'        
    },
    {
        nombre: 'Betty',
        sexo: 'F',
        hobby: 'Programar',
        avatar: 'avatar2.png'
    },
    {
        nombre: 'Sammir',
        sexo: 'M',
        hobby: 'Rock',
        avatar: 'avatar3.png'
    },
    {
        nombre: 'Fernando Quiros',
        sexo: 'M',
        hobby: 'viajar',
        avatar: 'avatar4.png'
    },
    {
        nombre: 'Jennifer Jimenez',
        sexo: 'F',
        hobby: 'viajar',
        avatar: 'avatar5.png'
    },
    {
        nombre: 'Richar Martinez',
        sexo: 'M',
        hobby: 'ajedrez',
        avatar: 'avatar6.png'
    },
    {
        nombre: 'Charlie',
        sexo: 'M',
        hobby: 'futbol',
        avatar: 'avatar7.png'
    },
];

// window.addEventListener('load', function() {
    
    function buscar() {
        
        //get hobby
        var hobbyCampo = document.getElementById('hobby');
        var hobby = hobbyCampo.value;
        
        //get gender
        var sexoCampo = document.getElementById('sexo');
        var selected = sexoCampo.selectedIndex;
        var sexo = sexoCampo.options[selected].value;
        
        var resultsHTML = '';
        var numUsuarios = usuarios.length;
        
        for(var i = 0; i < numUsuarios; i++) {
            
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
    };
    
    var resultados = document.getElementById('resultados');
    var btnBuscar = document.getElementById('btnBuscar');
    btnBuscar.addEventListener('click', buscar);
    buscar();
