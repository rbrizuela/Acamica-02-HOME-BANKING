//Declaración de variables
var nombreUsuario = "rbrizuela";
var saldoCuenta = 4500;
var limiteExtraccion = 1000;

var ServicioAgua = 350;
var ServicioTelefono = 425;
var ServicioLuz = 210;
var ServicioInternet = 570;

var CuentaAmiga1 = 1234567;
var CuentaAmiga2 = 7654321;

var CodSeguridad = 1977;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

    var limiteNuevo = prompt("Ingrese el NUEVO límite de extracción: ");

    if (ValidarPrompt(limiteNuevo)) {

        limiteNuevo = parseInt(limiteNuevo);
        limiteExtraccion = limiteNuevo;
        actualizarLimiteEnPantalla();
        alert('NUEVO Límite de Extracción: ' + limiteExtraccion);

        }

    else
        {
        alert('Debe ingresar un valor numérico');
        }
}

function extraerDinero() {

    var saldoAnterior = saldoCuenta;

    var monto = prompt("Ingrese el monto a Extraer: ");

    if (ValidarPrompt(monto)) {

        monto = parseInt(monto);

        if (monto > saldoCuenta) {
            alert('No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero');
            }

        else {

            if (monto > limiteExtraccion) {
                alert('La cantidad de dinero que deseas extraer es mayor a tu límite de extracción');
                }

            else {

                if ((monto % 100) != 0){
                    alert('Solo se puedes extraer billetes de 100');
                    }

                else {

                    saldoCuenta -= monto;
                    actualizarSaldoEnPantalla();
                    alert('Has Extraído: $ ' + monto + '\n' +
                          'Saldo Anterior: $ ' + saldoAnterior + '\n' +
                          'Saldo Actual: $ ' + saldoCuenta);
                }
            }
        }
    }
    else
        {
        alert('Debe ingresar un valor numérico');
        }
}

function depositarDinero() {

    var saldoAnterior = saldoCuenta;

    var deposito = prompt("Ingrese el monto a depositar: ");

    if (ValidarPrompt(deposito)){

        deposito = parseInt(deposito);
        saldoCuenta += deposito;
        actualizarSaldoEnPantalla();
        alert('Has Depositado: $ ' + deposito + '\n' +
                'Saldo Anterior: $ ' + saldoAnterior + '\n' +
                'Saldo Actual: $ ' + saldoCuenta);
        }
    else
        {
        alert('Debe ingresar un valor numérico');
        }
}

function pagarServicio() {

    var saldoAnterior = saldoCuenta;

    var OpcionServicio = prompt("Ingrese el número que corresponda con el servicio que queres pagar" + '\n' +
                                '1 - Agua' + '\n' +
                                '2 - Luz' + '\n' +
                                '3 - Internet' + '\n' +
                                '4 - Telefono' + '\n');

    switch (OpcionServicio) {

        case '1':{
            if (ServicioAgua <= saldoCuenta) {
                DebitoServicio(ServicioAgua, saldoAnterior, 'Agua');
                }
            else{
                alert('No hay suficiente saldo en tu cuenta para pagar este servicio Agua: $ ' + ServicioAgua);
                }
            break;
            }
        case '2':{
            if (ServicioLuz <= saldoCuenta) {
                DebitoServicio(ServicioLuz, saldoAnterior, 'Luz');
                }
            else{
                alert('No hay suficiente saldo en tu cuenta para pagar este servicio Luz: $ ' + ServicioLuz);
                }
            break;
            }
        case '3':{
            if (ServicioInternet <= saldoCuenta) {
                DebitoServicio(ServicioInternet, saldoAnterior, 'Internet');
                }
            else {
                alert('No hay suficiente saldo en tu cuenta para pagar este servicio Internet: $ ' + ServicioInternet);
                }
            break;
            }
        case '4':{
            if (ServicioTelefono <= saldoCuenta) {
                DebitoServicio(ServicioTelefono, saldoAnterior, 'Telefono');
                }
            else{
                alert('No hay suficiente saldo en tu cuenta para pagar este servicio Teléfono: $ ' + ServicioTelefono);
                }
            break;
            }
        default:{
            alert('No existe el servicio que se ha seleccionado');
            }
       }
}

function transferirDinero() {
    
    var montoTransferir = prompt("Ingrese el monto a transferir: ");

    if (ValidarPrompt(montoTransferir)) {

        montoTransferir = parseInt(montoTransferir);

        if (montoTransferir > saldoCuenta) 

            alert('No hay saldo disponible en tu cuenta para transferir esa cantidad de dinero');

        else {

            var nroCuenta = prompt("Ingrese el Nro de Cuenta a donde transferir: ");

            if (ValidarPrompt(nroCuenta)) {

                nroCuenta = parseInt(nroCuenta);

                switch (nroCuenta) {

                    case CuentaAmiga1:{
                        Transferir(montoTransferir, CuentaAmiga1);
                        break;
                        }
                    case CuentaAmiga2:{
                        Transferir(montoTransferir, CuentaAmiga2);
                        break;
                        }
                    default:{
                        alert('Solo puede transferirse dinero a una cuenta amiga');
                        }
                    }
                }

            else{
                alert('Debe ingresar un valor numérico');
                }
            }
        }
    else{
        alert('Debe ingresar un valor numérico');
        }
}

function iniciarSesion() {

    var contrasenia = prompt("Ingrese la contraseña para acceder a home banking: ");

    if (contrasenia == CodSeguridad) {
        alert('Bienvenido/a ' + nombreUsuario + ' ya puedes comenzar a realizar operaciones');
        }
    else {
        saldoCuenta = 0;
        alert('Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad');
        }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//Funciones Adicionales
function DebitoServicio(servicio, saldoAnterior, servicioDesc) {

    saldoCuenta -= servicio;
    actualizarSaldoEnPantalla();
    alert('Has pagado el servicio: ' + servicioDesc + '\n' +
          'Saldo Anterior: $ ' + saldoAnterior + '\n' +
          'Dinero Descontado: $ ' + servicio + '\n' +
          'Saldo Actual: $ ' + saldoCuenta);

}

function Transferir(montoTransferir, cuentaDestino) {

    saldoCuenta -= montoTransferir;
    actualizarSaldoEnPantalla();
    alert('Se han transferido: $ ' + montoTransferir + '\n' +
          'Cuenta destino: $ ' + cuentaDestino);

}

function ValidarPrompt(parametro) {

    return (!isNaN(parametro) && parametro != null && parametro != '')

    //isNaN: verifica que el ingreso sea numerico
    //null: que no sea null , para cuando dan cancelar en el input
    //'': que no sea '' , cuando dan aceptar sin valor

}