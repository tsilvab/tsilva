// responsive navbar 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// modal for projects display

  $(document).ready(function(){
    $('.open').click(function(){
$('#myModal').slideToggle('slow');
    });
    $("#close").click(function(){
        $('#myModal').fadeOut('slow');

    });
  });