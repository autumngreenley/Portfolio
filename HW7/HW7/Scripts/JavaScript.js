$(document).ready(function () {
    $(".usertyping").keyup(function () {
        last = $(".echo").html();
        if (event.which == 32) {
            $(".echo").html("Space!");
        }
        else {
            $(".echo").html($("#texting").val());
        }
    });
});