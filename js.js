document.addEventListener('DOMContentLoaded', function () {
    jQuery(document).ready(function () {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
        
        if (checkbox.checked) {
            // do this
            jQuery(".EN").removeClass("hide");
            jQuery(".PT").addClass("hide");
          
            console.log('Checked');
        } else {
            // do that
            jQuery(".EN").addClass("hide");
            jQuery(".PT").removeClass("hide");
            console.log('Not checked');
        }
        });
    });
});


jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
        const curl = window.location.href;
        var w = window.innerWidth;

        if (scroll >= 50) {
            jQuery(".logo").addClass("logo_fix");
            jQuery(".hea").addClass("hea_fix");
        }
        else {
            jQuery(".logo").removeClass("logo_fix");
            jQuery(".hea").removeClass("hea_fix");
        }

    });
});

$(document).ready(function () {
    alert("The current page path is " + window.location.pathname);

    var path = window.location.pathname;

    if (path == '...\discografia.html')
        jQuery('.disco').addClass('activeCor');
   /* else if (path == '/page1.html')
        jQuery('#pageOneNav').addClass('activeNavColor');*/

});