"use strict";

function createUser() {
  $.ajax({
    url: "https://techmaster-student.herokuapp.com/users",
    method: "POST",
    data: {
      name: $('#name').val(),
      birthday: $('#birthYear').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    }
  }).done(function () {
    if (true) window.location.href = '/';
  });
}