let nombre=document.getElementById("nombre").value;
let apellido=document.getElementById("apellido").value;
let cedula=document.getElementById("cedula").value;
let direccion=document.getElementById("direccion").value;
let email=document.getElementById("email").value;
let fecha=document.getElementById("fecha").value;
//familiares
let nombreFam=document.getElementById("nombrefam").value;
let parentesco=document.getElementById("parentesco").value;
let edad=document.getElementById("edad").value;
//condiciones salud
let enfermedad=document.getElementById("enfermedad").value;
let timpoEnf=document.getElementById("timpoEnf").value;
let detalle=document.getElementById("detalle").value;
//internamientos
let fechaIn=document.getElementById("fechaIn").value;
let centro=document.getElementById("centro").value;
let diagnostico=document.getElementById("diagnostico").value;

//funcion para mostrar data
function showData(){
    let pacientes
    if(localStorage.getItem("pacientesAct")==null){
        pacientes=[];
    }
    else{
        pacientes=JSON.parse(localStorage.getItem("pacientesAct"));
    }

    let estilo="";

    pacientes.forEach(function(paciente, index){
        estilo+=`
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
            <th>Direccion</th>
            <th>Correo</th>
            <th>Fecha Nacimiento</th>
        </tr>
        <tr>
            <td>${paciente.nombre}</td>
            <td>${paciente.apellido}</td>
            <td>${paciente.cedula}</td>
            <td>${paciente.direccion}</td>
            <td>${paciente.email}</td>
            <td+${paciente.fecha}</td>
            <td class='d-flex gap-3'>
            <button class='btn btn-outline-danger' onclick=deleteData(${index})>Borrar</button><button class='btn btn-outline-danger' onclick=updateData(${index})>Editar</button>
                </td>
        </tr>
        <tr>
            <th>Nombre Familiar</th>
            <th>Parenesco</th>
            <th>Edad</th>
            <th>Enfermedad</th>
            <th>Tiempo con Enfermedad</th>
        </tr>
        <tr>
            <td>${paciente.nombreFam}</td>
            <td>${paciente.parentesco}</td>
            <td>${paciente.edad}</td>
            <td>${paciente.enfermedad}</td>
            <td>${paciente.timpoEnf}</td>
        </tr>
            <tr>
            <th>Detalle</th>
            <th>Fecha Ingreso</th>
            <th>Centro Medico</th>
            <th>Diagnóstico</th>
        </tr>
        <tr>
            <td>${paciente.detalle}</td>
            <td>${paciente.fechaIn}</td>
            <td>${paciente.centro}</td>
            <td>${paciente.diagnostico}</td>            
        </tr>      
    `
});
    document.querySelector("#crudTable").innerHTML=estilo;
}

document.onload=showData()

function addData(){
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const cedula=document.getElementById("cedula").value;
    const direccion=document.getElementById("direccion").value;
    const email=document.getElementById("email").value;
    const fecha=document.getElementById("fecha").value;
    //familiares
    const nombreFam=document.getElementById("nombrefam").value;
    const parentesco=document.getElementById("parentesco").value;
    const edad=document.getElementById("edad").value;
    //condiciones salud
    const enfermedad=document.getElementById("enfermedad").value;
    const timpoEnf=document.getElementById("timpoEnf").value;
    const detalle=document.getElementById("detalle").value;
    //internamientos
    const fechaIn=document.getElementById("fechaIn").value;
    const centro=document.getElementById("centro").value;
    const diagnostico=document.getElementById("diagnostico").value;

    let pacientes;
    if(localStorage.getItem("pacientesAct")==null){
        pacientes=[];
    }else{
        pacientes=JSON.parse(localStorage.getItem("pacientesAct"));
    }

    pacientes.push({
        nombre: nombre,
        apellido: apellido,
        cedula:cedula,
        direccion:direccion,
        email:email,
        fecha:fecha,
        nombreFam:nombreFam,
        parentesco:parentesco,
        edad:edad,
        enfermedad:enfermedad,
        timpoEnf:timpoEnf,
        detalle:detalle,
        fechaIn:fechaIn,
        centro:centro,
        diagnostico:diagnostico
    });
    localStorage.setItem("pacientesAct", JSON.stringify(pacientes));
    showData()
    resetInput()

}
//funcion para borrar data
function deleteData(index){
    let pacientes;
    if(localStorage.getItem("pacientesAct")==null){
        pacientes=[];
    }
    else{
        pacientes=JSON.parse(localStorage.getItem("pacientesAct"));
    }
    pacientes.splice(index, 1);
    localStorage.setItem("pacientesAct", JSON.stringify(pacientes));
    showData()
}

//funcion para actualizar data
function updateData(index){
    let pacientes;
    if(localStorage.getItem("pacientesAct")==null){
        pacientes=[];
    }
    else{
        pacientes=JSON.parse(localStorage.getItem("pacientesAct"));
    }
    document.getElementById("nombre").value=pacientes[index].nombre;
    document.getElementById("apellido").value=pacientes[index].apellido;
    document.getElementById("cedula").value=pacientes[index].cedula;
    document.getElementById("direccion").value=pacientes[index].direccion;
    document.getElementById("email").value=pacientes[index].email;
    document.getElementById("fecha").value=pacientes[index].fecha;
    document.getElementById("nombreFam").value=pacientes[index].nombreFam;
    document.getElementById("parentesco").value=pacientes[index].parentesco;
    document.getElementById("edad").value=pacientes[index].edad;
    document.getElementById("enfermedad").value=pacientes[index].enfermedad;
    document.getElementById("timpoEnf").value=pacientes[index].timpoEnf;
    document.getElementById("detalle").value=pacientes[index].detalle;
    document.getElementById("fechaIn").value=pacientes[index].fechaIn;
    document.getElementById("centro").value=pacientes[index].centro;
    document.getElementById("diagnostico").value=pacientes[index].diagnostico;

    document.getElementById("update").onclick=function(){
        pacientes[index].nombre=document.getElementById("nombre").value;
        pacientes[index].apellido=document.getElementById("apellido").value;
        pacientes[index].cedula=document.getElementById("cedula").value;
        pacientes[index].direccion=document.getElementById("direccion").value;
        pacientes[index].email=document.getElementById("email").value;
        pacientes[index].fecha=document.getElementById("fecha").value;
        pacientes[index].nombreFam=document.getElementById("nombreFam").value;
        pacientes[index].parentesco=document.getElementById("parentesco").value;
        pacientes[index].edad=document.getElementById("edad").value;
        pacientes[index].enfermedad=document.getElementById("enfermedad").value;
        pacientes[index].timpoEnf=document.getElementById("timpoEnf").value;
        pacientes[index].detalle=document.getElementById("detalle").value;
        pacientes[index].fechaIn=document.getElementById("fechaIn").value;
        pacientes[index].centro=document.getElementById("centro").value;
        pacientes[index].diagnostico=document.getElementById("diagnostico").value;

        localStorage.setItem("pacientesAct", JSON.stringify(pacientes))
        showData()
    }
}


const resetInput=()=>{
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("cedula").value="";
    document.getElementById("direccion").value="";
    document.getElementById("email").value="";
    document.getElementById("fecha").value="";
    document.getElementById("nombreFam").value="";
    document.getElementById("parentesco").value="";
    document.getElementById("edad").value="";
    document.getElementById("enfermedad").value="";
    document.getElementById("timpoEnf").value="";
    document.getElementById("detalle").value="";
    document.getElementById("fechaIn").value="";
    document.getElementById("centro").value="";
    document.getElementById("diagnostico").value="";
}