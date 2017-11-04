function passwordStrength(){
    //Über die DOM-Methode document.getElementById wird der Wert aus dem Eingabefeld geholt
    //und der Variablen val zugewiesen.
    var val = document.getElementById('password').value;

    //Anschließend wird über die selbe DOM-Methode ein Referenzpunkt für das Feedback erzeugt
    //und in der Variablen call gespeichert.
    var call = document.getElementById('feedback');

    //Ab hier beginnt die Prüfung.
    //Das Passwort ist entweder zu kurz, unsicher, sicher oder sehr sicher

    //Ist das Passwort wenigstens 6 Zeichen lang?
    if (val.length > 5)
    {

        //Wenn das Passwort neben Buchstaben zusätzlich wenigstens eine Zahl
        //und ein Sonderzeichen enthält, ist es "sehr sicher".
        if (val.match(/\d{1,}/) && val.match(/[a-zA-ZäöüÄÖÜ]{1,}/) && val.match(/\W/))
        {
            call.innerHTML = "<br><strong style='color: white'>Ihr Passwort ist </strong>";
            call.innerHTML += "<strong style='color: #428c0d'>sehr sicher!</strong>";
        }

        //Wenn das Passwort nur eine Zahl oder ein Sonderzeichen enthält, ist es "sicher"?
        else if (val.match(/\d{1,}/) && val.match(/[a-zA-ZäöüÄÖÜ]{1,}/) || val.match(/\W/) && val.match(/[a-zA-ZäöüÄÖÜ]{1,}/))
        {
            call.innerHTML = "<br><strong style='color: white'>Ihr Passwort ist </strong>";
            call.innerHTML += "<strong style='color: #56a40c'>sicher!</strong>";
        }
        else //Hier enthält das Passwort weder Ziffern noch Sonderzeichen und ist somit "unsicher".
        {

            call.innerHTML = "<br><strong style='color: white'>Ihr Passwort ist </strong>";
            call.innerHTML += "<strong style='color: #ff9410'>unsicher!</strong>";}
    }
    else //Hier enthält das Passwort nicht mal die erforderlichen 6 Zeichen und ist daher "zu kurz"
    {

        call.innerHTML = "<br><strong style='color: white'>Ihr Passwort ist </strong>";
        call.innerHTML += "<strong style='color: #ff352c'>zu kurz!</strong>";}
};
