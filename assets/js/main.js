const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});




  window.addEventListener("resize", function() {
    "use strict"; window.location.reload(); 
  });

  document.addEventListener("DOMContentLoaded", function(){
        
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
      
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
    
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {  
              // prevent opening link if link needs to open dropdown
              e.preventDefault();

              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }

            }
        });
      })
    }
    // end if innerWidth

  }); 
  // DOMContentLoaded  end



/*
$(document).ready(function () {
  $('#regions').DataTable();
  $('.regions_length').addClass('bs-select');
  });*/




 // <!-- begin::live-search -->
/*  function myFunction() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("tablesearch");
      filter = input.value.toUpperCase();
      table = document.getElementById("table");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }*/
//<!-- end::live-search -->



 function responseHandler(res) {
    $.each(res.rows, function (i, row) {
      row.state = $.inArray(row.id, selections) !== -1
    })
    return res
  }



/*selectbox live search */
    // In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.form-select').select2();
});


/*daterange*/
/*$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('DD.MM.YYYY') + ' to ' + end.format('DD.MM.YYYY'));
  });
});*/