"use strict";

$(function () {
  $.ajax({
    url: "https://techmaster-student.herokuapp.com/users"
  }).done(function (users) {
    var htmlString = ""; // Dùng vòng lặp for of

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var user = _step.value;
        htmlString += "<tr>\n          <td>".concat(user.name, "</td>\n          <td>").concat(user.birthday, "</td>\n          <td>").concat(user.email, "</td>\n          <td>").concat(user.phone, "</td>\n          <td>\n            <a href=\"/edit.html?id=").concat(user.id, "\" class=\"text-info\"\n              ><i class=\"fa fa-edit\"></i> Ch\u1EC9nh s\u1EEDa</a\n            >\n            |\n            <a a href = \"javascript:void(0)\"\n            class = \"text-danger\"\n            onclick = \"confirmDelete(").concat(user.id, ")\"\n              >\n              <i class=\"fa fa-trash-alt\"></i> X\xF3a\n              </a>\n          </td>\n        </tr>");
      } // Thay đổi nội dung HTML của thẻ tbody thành chuỗi htmlString ở trên

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    $("#table-users").html(htmlString);
  });
});
var idStudent = 0;

function confirmDelete(id) {
  studentId = id;
  console.log(studentId);
  $("#exampleModal").modal("show");
}

function deleteStudent() {
  $.ajax({
    url: "https://techmaster-student.herokuapp.com/users/" + studentId,
    method: "DELETE"
  }).done(function (result) {
    // C1: Tải lại trang
    var tdElement = $('.text-danger').parent();
    var trElement = tdElement.parent();
    trElement.remove();
    $("#exampleModal").modal("hide");
    location.reload(); // C2: Không tải lại trang
    // Lấy lại danh sách users, sau đó render lại table => Tốn thời gian lấy lại danh sách users
    // C3: Không tải lại trang
    // Dòng DOM để xóa
  }).fail(function (err) {
    if (err.status == 404) {
      alert("Hoc vien khong ton tai");
    } else {
      alert("Khong xoa duoc");
    }
  });
}