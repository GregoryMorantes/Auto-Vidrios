function RegistrarCliente(){	
    $(document).ready(function() {
      $("#formulario").validate({
        rules: {
          correo: {
            required: true,
            email: true
          },
          telefono: {
            required: true,
            number: true,
            minlength: 10,
            maxlength: 15
          },
          password: {
            required: true,
            minlength: 5,
            maxlength: 15
          },    
          password2: {
            required: true,
            minlength: 5,
            maxlength: 15,
            equalTo: "#password"
          }
        },
        messages: {
          telefono: {
            required: "<span class='text-danger py-0 my-0' style='font-size:12px;'><i class='fas fa-info-circle'></i> Es obligatorio completar este campo</span>",
            number: "<span class='text-danger py-0 my-0' style='font-size:12px;'><i class='fas fa-info-circle'></i> Es obligatorio completar usar solo numeros</span>",
            minlength: "<span class='text-danger py-0 my-0' style='font-size:12px;'><i class='fas fa-info-circle'></i> Tiene que ser de un minimo de 10 caracterres</span>",maxlength: "<span class='text-danger py-0 my-0' style='font-size:12px;display:inline;'><i class='fas fa-info-circle'></i> Tiene que ser de un maximo de 15 caracterres</span>"
          },
          correo: {
            required: "<span class='text-danger py-0 my-0' style='font-size:12px;'><i class='fas fa-info-circle'></i> Es obligatorio completar este campo</span>",
            email: "<span class='text-danger py-0 my-0' style='font-size:12px;'><i class='fas fa-info-circle'></i> Introduce un correo electronico valido</span>"
          },
          password: {
            required: "<span class='text-danger py-0 my-0' style='font-size:12px;display:inline;'><i class='fas fa-info-circle'></i> Es obligatorio completar este campo</span>",
            minlength: "<span class='text-danger py-0 my-0' style='font-size:12px;display:inline;'><i class='fas fa-info-circle'></i> Tiene que ser de un minimo de 5 caracterres</span>",
            maxlength: "<span class='text-danger py-0 my-0' style='font-size:12px;display:inline;'><i class='fas fa-info-circle'></i> Tiene que ser de un maximo de 15 caracterres</span>"
          },
          password2: {
            required: "<span class='text-danger py-0 my-0' style='font-size:12px;padding:0px;,margin:0px;'><i class='fas fa-info-circle'></i> Es obligatorio completar este campo</span>",
            minlength: "<span class='text-danger py-0 my-0' style='font-size:12px;'><i class='fas fa-info-circle'></i> Tiene que ser de un minimo de 5 caracterres</span>",
            maxlength: "<span class='text-danger py-0 my-0' style='font-size:12px;display:inline;'><i class='fas fa-info-circle'></i> Tiene que ser de un maximo de 15 caracterres</span>",
            equalTo: "<span class='text-danger py-0 my-0' style='font-size:12px;'><i class='fas fa-info-circle'></i> Las contraseñas no son iguales</span>"
          }
        }
      });
    });
  
    $.post('LoginController.php','&'+$("#formulario").serialize(),function(respuesta){
      if (respuesta=="completado"){
        window.location.href="LoginController.php?accion=login";
      }else{
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: (respuesta),
          showConfirmButton: false,
          timer: 1500
        })
      }
    });			   
}

function IngresarLogin(){	
  $.post('LoginController.php','&'+$("#IngresarLogin").serialize(),function(respuesta){
    if (respuesta=="administrador"){
      window.location.href = "../../Controller/admin/DashboardController.php?accion=mostrar";	
    }else if(respuesta=="empleado"){
      window.location.href = " ../../controller/empleado/HomeEmpleadoController.php?accion=home";
    }else if(respuesta=="cliente"){
      window.location.href = "../../View/cliente/HomeCliente.php";
    }else{
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: (respuesta),
        showConfirmButton: false,
        timer: 1500
      })
    }
  });			   
}