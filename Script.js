// JavaScript source code

var usernameCeack = "";

function sendMessage(message) {
    
    var prevState = $("#container").html();
    if (prevState.length != 0) {
        prevState = prevState + "<br>";
    }

    $("#container").html(prevState + "<span class='currentMessage'>" + "<span id='bot'>Chatbot: </span>" + message + "</span>");
    $(".currentMessage").hide();
    $(".currentMessage").delay(650).fadeIn();
    $(".currentMessage").removeClass("currentMessage");
    prevState = $("#container").html();

    

}

function username() {
    sendMessage("Hello, what is your name?");

}

function ai(message) {
    if (usernameCeack == 0) {
        usernameCeack = message
        sendMessage("Nice to meet you " + usernameCeack + ", how are you doing?");
    }
    if ((message.indexOf("how are you") >= 0) || (message.indexOf("whats up?") >= 0)){
        sendMessage("Im fine, thanks");
    }
    if ((message.indexOf("what time") >= 0)) {
        var date = new Date;
        var h = date.getHours();
        var m = date.getMinutes();
        sendMessage("Current time is: " + h + ":" + m);
    }        
    if (message.indexOf("tell me a joke") >= 0) {
        sendMessage("I dont know any joke");
    }
    if (message.indexOf("fuck you") >= 0) {
        sendMessage(";(");
    }
    if ((message.indexOf("i love you") >= 0) || (message.indexOf("i like you") >= 0)) {

        sendMessage("Thank you, i like you too");
    }

}


$(function () {

    username();

    $("#textbox").keypress(function (event) {
        if (event.which == 13) {
            if ($("#enter").prop("checked")) {
                $("#send").click();
                event.preventDefault();
            }
        }
    });

    $("#send").click(function () {

        var newMessage = $("#textbox").val();
        var prevState = $("#container").html();
        var you = "<span id='username'>You: </span>"
        
        if (prevState.length != 0) {
            prevState = prevState + "<br>";
        }

        $("#container").html(prevState + you + newMessage);
        prevState = $("#container").html();

        $("#textbox").val("");
        $("#container").scrollTop($("#container").prop("scrollHeight"));

        ai(newMessage);
    });

});