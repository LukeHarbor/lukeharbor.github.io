document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {

        if (checkbox.checked) {
            // do this
            console.log('Checked');
        } else {
            // do that
            console.log('Not checked');
        }
    });
});