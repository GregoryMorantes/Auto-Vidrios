<?php include 'includesAdmin/slidebar.php'; ?>

<!-----Aqui es el unicio de el listados de los clientes registrados----->
<h1 class="text-center titulo-home"><i class="fa fa-chalkboard-teacher"></i>  Sesiones de Empleados</h1>

<div class="container-fluid bg-light">
  <div class="row">
    <div class="col-12">
        <div class="table-responsive bg-white" style="font-size: 12px;">
          <table class="table table">
            <thead class="bg-black text-light titulo-home" style="font-size: 15px;">
              <tr>
                <th>Usuario</th>
                <th>Accion</th> 
                <th>Fecha</th> 
              </tr>
            </thead>
          <tbody>         
            <?php foreach ($objetoRetornadoEmpleado as $mostrarCiclo) { ?>
              <tr>
                <td><?php echo $mostrarCiclo->idusuario; ?></td>
                <td><?php echo $mostrarCiclo->estado; ?></td>
                <td><?php echo $mostrarCiclo->inicio; ?></td>
              </tr>
            <?php } ?>     
          </tbody>  
        </table>
      </div>
    </div>
  </div> 
</div> 
<!------Final del listado de clientes-------->

<?php include 'includesAdmin/footer.php'; ?>
