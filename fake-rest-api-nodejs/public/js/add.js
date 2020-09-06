function createUser() {
    $.ajax({
        url: "http://localhost:3000/users",
        method: "POST",
        data: {
            name: $('#name').val(),
            birthday: $('#birthYear').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        }
    }).done(function () {
        if (true) window.location.href = '/';
    })
}
