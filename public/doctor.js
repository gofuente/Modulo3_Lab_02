class Doctor {
    
    constructor(nombre, especialidad, experiencia){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.experiencia = experiencia;
        this.atenciones = [];
    }
    agregarAtencion(atencion){
        this.atenciones.push(atencion);
    }

    totalAtenciones(){
        return this.atenciones.length;
    }

    get experienciaDoctor(){
        return this.experiencia;
    }

    set experienciaDoctor(experiencia){
        this.experiencia = experiencia;
    }
}

class Cirujano extends Doctor {
    constructor(nombre, especialidad, experiencia){
        super(nombre, especialidad, experiencia)
        this.operaciones = [];
    }

    agregarOperacion(operacion){
        this.operaciones.push(operacion);
    }    

    totalAtenciones(){
        return this.operaciones.length;
    }
    

}

/*
---Pruebas en Quokka
const doctor1 = new Doctor('Gonzalo','General', 10);
console.log(doctor1);

doctor1.agregarAtencion({paciente: "Luis"});
doctor1.agregarAtencion({paciente: "Pedro"});
console.log(doctor1.totalAtenciones())

const cirujano1 = new Cirujano('Gonzalo','General', 10);
console.log(cirujano1);
cirujano1.agregarOperacion({paciente:"Hector"});
cirujano1.agregarOperacion({paciente:"Ximena"});
cirujano1.agregarOperacion({paciente:"Andrea"});
console.log(cirujano1.totalAtenciones())
*/
