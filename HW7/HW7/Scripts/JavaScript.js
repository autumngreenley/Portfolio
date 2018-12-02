$(document).ready(function () {
    word = new Array("A");
    allwords = new Array("A");
    i = 0;
    j = 0;
    k = 0;

    $(".usertyping").keyup(function () {
        if (event.which == 32) { //If space is pressed...
            allwords[i] = word.join("");
            i++;
            k = 0;
            word = [];
            $(".echo").html(allwords.join(" "));
            j++;
        }
        //If the user presses something that isn't a char
        else if ((event.which > 46 && event.which < 91) || event.which > 145) { //Otherwise, just print it in the div
            word[k] = $("#texting").val().charAt(j);
            k++;
            j++;
        }
        //Aaaaand if the user presses backspace (like a moron, while testing)
        else if (event.which == 8) {
            j--;
            k--;
            word[k] = "";
        }
    });
});