var num1, num2, operator, operators, answer;

$(document).ready(function () {
  operators = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "×": function (a, b) {
      return a * b;
    },
    "÷": function (a, b) {
      return a / b;
    },
  };

  function generateQuestion() {
    operator =
      Object.keys(operators)[
        Math.floor(Math.random() * Object.keys(operators).length)
      ];

    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    answer = operators[operator](num1, num2);

    $("#question").html(num1 + " " + operator + " " + num2 + " เท่ากับเท่าไร?");
  }

  generateQuestion();

  $("#submit").click(function () {
    if ($("#answer").val() === "") {
      Swal.fire({
        icon: "warning",
        title: "ผิดพลาด!",
        text: "กรุณากรอกคำตอบ",
      });
      return;
    }

    var userAnswer = $("#answer").val();
    if (userAnswer == answer) {
      showResult("success", "ถูกต้อง!", "คำตอบคือ " + answer);
    } else {
      showResult("error", "ผิด!", "คำตอบคือ " + answer);
    }
  });

  $("#reset").click(function () {
    $("#answer").val("");
    $("#answer").focus();
    generateQuestion();
  });
});

function showResult(icon, title, message) {
  Swal.fire({
    icon: icon,
    title: title,
    text: message,
  });
}
