const xhr = new XMLHttpRequest();
$().ready(() => { 
    $('input[type="submit"]').click(e => {
        e.preventDefault();

        $.ajax({
            url: '/signup',
            type: 'POST',
            contentType: 'application/json',
            data: {
                nom: `${$('#tb-nom').val()}`,
                email: `${$('#tb-email').val()}`,
                psswd: `${$('#tb-psswd').val()}`,
            },
            dataType: 'text/html',
            complete: (result, status, xhr) => {
                console.log(`Result: ${JSON.stringify(result)}`);
                $("#sent-data").html(result.responseText);
            }
        })
    })
});