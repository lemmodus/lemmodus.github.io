$(document).ready(
  function() {
    $("#textInput").keyup(
      function(keyEvent) {
        if(keyEvent.which==13) {
          let textInput=$("#textInput").val().toUpperCase();
          let textBuffer="";
          for (let i = 0; i < textInput.length; i++) {
            let tmp=code[textInput[i]];
            if (tmp!=undefined) {
              textBuffer+=tmp+"   ";
            } else {
              if(textInput[i]!="\n") {
                alert("ungueltige eingabe");
                $("#textInput").val("");
              }
            }
          }
          $("#textOutput").val(textBuffer);
        }
      }
    ).click(function()
  {
    $("#textOutput").val("");
  });
  }
);
