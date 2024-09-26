function SubForm (){
    $.ajax({
        url: API_LINK,
        type:'post',
        data:$("#myForm").serializeArray(),
    });
}