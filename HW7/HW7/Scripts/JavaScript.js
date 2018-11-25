$(document).ready(function () {
    $(".usertyping").keyup(function () {
        $(".echo").html($("#texting").val());
    });
});