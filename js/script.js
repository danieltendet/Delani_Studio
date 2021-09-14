$(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("form#page").submit(function(event){
      // event.preventDefault();
      var name = $("input#INPUT1").val();
      var email = $("input#INPUT2").val();
      var message = $("textarea#comment").val();
      if ($("input#INPUT1").val() && $("input#INPUT2").val()){
        alert ("Thank you,  "+ name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });

  $(document).ready(function(){
    $("#project1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });

  $(document).ready(function(){
    $("#project2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });

  $(document).ready(function(){
    $("#project3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });

  $(document).ready(function(){
    $("#project4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#project5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });

    $("#project6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });

    $("#project7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });

    $("#project8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });