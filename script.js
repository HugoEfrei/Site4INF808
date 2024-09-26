function SubForm (){
    $.ajax({
        url: API_LINK,
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Form Data Submitted :)")
          },
          error: function(){
            alert("There was an error :(")
          }
    });
}