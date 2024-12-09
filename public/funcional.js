
//currying costo total de servicios de paciente

const TotalValorConsultasSinDscto = consultas => precio => consultas *  precio;

  /*
---Pruebas en Quokka
console.log(TotalValorConsultasSinDscto(10)(4000));
*/


// Costo promedio de pacientes
const pacientes = [
    {
      nombre: "Gonzalo",
      espera: 1,
    },
    {
        nombre: "Luis",
        espera: 2,
      },
      {
        nombre: "Luis",
        espera: 1,
      },      
      {
        nombre: "Gonzalo",
        espera: 4,
      },        
  ];

  const promedio_espera = (nombreBuscar) => {
    const numvisitas = pacientes.filter((paciente) => paciente.nombre === nombreBuscar);
    if (numvisitas.length >0 ){
        const totalEsperas = numvisitas.map((paciente) => paciente.espera).reduce((a,b) => a + b,0);
        return totalEsperas/numvisitas.length ;
    } else {
        return 0;
    }
  }

  /*
---Pruebas en Quokka
  console.log(promedio_espera("Luis"))
  */


  //Composicion de consultas : descuentos en funcion de cantidad de consultas realizadas

  function DsctoxConsultas(numConsultas){
    if (numConsultas === 1 ) {
        return 0;
    }
    else if (numConsultas === 2 ) {
        return 0.05;
    }
    else if (numConsultas === 3) {
        return 0.08;
    }
    else if (numConsultas > 3) {
        return 0.10;
    }    
}

function TotalValorConsultas(precioConsulta, numConsultas){
    return precioConsulta * numConsultas * (1 - DsctoxConsultas(numConsultas));
}

  /*
---Pruebas en Quokka
console.log(DsctoxConsultas(3));
console.log(TotalValorConsultas(1000, 3));
*/