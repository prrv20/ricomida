var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
$(document).ready(function(){

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...")
    })
    $("p").dblclick(function(){
        $(this).hide();
      });
  
  });
  
