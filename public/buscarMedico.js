

const filtrarBoton = document.getElementById("btn_FiltrarMedico");
const disponibleBoton = document.getElementById("btn_Disponibles");
const clonarBoton = document.getElementById("btn_Clonar");
const medicosLista = document.getElementById("idListaMedicos");
const medicosDisponiblesLista = document.getElementById("idListaMedicosDisponibles");

function obtenerDoctores_Bien(){
  return new Promise((resolve, reject) =>{
      setTimeout(() => {
        fetch("doctores.json")
        .then((response) => response.json())
        .then((data) => {
          const medicosDisponibles = data.filter((medico) => medico.disponibilidad === "true");
          resolve(medicosDisponibles);
        });         
      }, 1000);
  });
}

async function obtenerDoctoresAsync_Bien() {
  try {
      const doctores  = await obtenerDoctores_Bien();
      if (doctores.length > 0){
        console.table(doctores);
        doctores.forEach(medico => {
          const li = document.createElement('li');
          let linea =  `nombre :  ${medico.nombre} especialidad : ${medico.especialidad}`; 
          li.textContent =linea; 
          medicosDisponiblesLista.appendChild(li);
        }); 

      }
  }catch (error){
      console.error(error);
  }
}

function obtenerDoctores_Error(){
  return new Promise((resolve, reject) =>{
      setTimeout(() => {
          reject("doctores no encontrados");
      }, 1000);
  });
}

async function obtenerDoctoresAsync_Error() {
  try {
      const doctores_error = await obtenerDoctores_Error();
      console.log(doctores_error);

  }catch (error){
      console.error(error);
  }
}


obtenerDoctoresAsync_Bien();
obtenerDoctoresAsync_Error();



  clonarBoton.addEventListener('click', async () => {
    fetch("doctores.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const clone = structuredClone(data);
        console.log(clone);
    });

  });


  disponibleBoton.addEventListener('click', async () => {
    medicosDisponiblesLista.innerHTML = '';
    fetch("doctores.json")
    .then((response) => response.json())
    .then((data) => {
      const medicosDisponibles = data.filter((medico) => medico.disponible === "true");
      if (medicosDisponibles.length > 0){
  
        medicosDisponibles.forEach(medico => {
          const li = document.createElement('li');
          let linea =  `nombre :  ${nombre} especialidad : ${especialidad}`; 
          li.textContent =linea; 
          medicosDisponiblesLista.appendChild(li);
        }); 
       
      }
    });

  });



  filtrarBoton.addEventListener('click', async () => {
    const idNombre = document.getElementById("buscNombre");
    medicosLista.innerHTML = '';
    let nombreBuscar = idNombre.value;
    let encontrado = [];
    //debugger;
      fetch("doctores.json")
      .then((response) => response.json())
      .then((data) => {

      console.log('lista de medicos donde buscar');
      console.table(data);
        data.forEach((medico) => {
            if (medico.nombre === nombreBuscar){
                encontrado.push({nombre: medico.nombre, especialidad : medico.especialidad, experiencia : medico. experiencia});
            }
        });
    });

    if ( encontrado.length > 0 ){
      alert("se encontró medico");
    }else {
        alert("no se encontró medico");
    }

  });


