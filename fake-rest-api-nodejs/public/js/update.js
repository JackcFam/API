function getIdQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
const userid = getIdQueryParam();
console.log(userid);
let http = "https://techmaster-student.herokuapp.com/users";
$(function () {
    $.ajax({
        url: http + "/" + userid,
        context: document.body
    }).done(function (users) {
        $("#name").val(users.name);
        $("#birthYear").val(users.birthday);
        $("#email").val(users.email);
        $("#phone").val(users.phone);
    });
})

function repairInfo() {
    if (true) {
        $.ajax({
            url: http + "/" + userid,
            method: "PUT",
            data: {
                "name": $("#name").val(),
                "birthday": $("#birthYear").val(),
                "email": $("#email").val(),
                "phone": $("#phone").val()
            }
        })
    }
}

function updateUser() {
    $.ajax({
        url: "https://techmaster-student.herokuapp.com/users" + '/' + userid,
        method: "PUT",
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
