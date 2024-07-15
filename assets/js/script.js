var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente");
    });

    $(".card-title").on("click", function(){
        $(".card-text").toggle();
    });
    
    $('h4').on('dblclick', function() {
        $(this).css({"color":"red"});
    });
});
