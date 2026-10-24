function calculateMarks() {
  var m1 = Number(document.getElementById("sub1").value);
  var m2 = Number(document.getElementById("sub2").value);
  var m3 = Number(document.getElementById("sub3").value);
  var m4 = Number(document.getElementById("sub4").value);
  var m5 = Number(document.getElementById("sub5").value);

  var result = document.getElementById("marksResult");
  var marks = [m1, m2, m3, m4, m5];

  for (var i = 0; i < marks.length; i++) {
    if (marks[i] < 0 || marks[i] > 100) {
      result.innerHTML = "Please enter marks between 0 and 100.";
      result.className = "result error";
      return;
    }
  }

  var total = m1 + m2 + m3 + m4 + m5;
  var percentage = (total / 500) * 100;

  var grade;
  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 75) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 40) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  result.innerHTML =
    "Total: " + total + " / 500<br>" +
    "Percentage: " + percentage.toFixed(2) + "%<br>" +
    "Grade: " + grade;
  result.className = "result success";
}

function addSubject() {
  var table = document.getElementById("cgpaTable");
  var count = table.rows.length;
  var row = table.insertRow();

  row.innerHTML =
    '<td><input type="text" class="subName" placeholder="Subject ' + count + '"></td>' +
    '<td><input type="number" class="credit" placeholder="e.g. 4"></td>' +
    '<td><select class="grade">' +
    '<option value="">Select</option>' +
    '<option value="10">O (10)</option>' +
    '<option value="9">A+ (9)</option>' +
    '<option value="8">A (8)</option>' +
    '<option value="7">B+ (7)</option>' +
    '<option value="6">B (6)</option>' +
    '<option value="5">C (5)</option>' +
    '<option value="4">P (4)</option>' +
    '<option value="0">F (0)</option>' +
    '</select></td>';
}

function calculateCGPA() {
  var credits = document.getElementsByClassName("credit");
  var grades = document.getElementsByClassName("grade");
  var result = document.getElementById("cgpaResult");

  var totalCredits = 0;
  var totalPoints = 0;

  for (var i = 0; i < credits.length; i++) {
    var credit = credits[i].value;
    var grade = grades[i].value;

    if (credit == "" && grade == "") {
      continue;
    }

    if (credit == "" || grade == "" || Number(credit) <= 0) {
      result.innerHTML = "Please enter valid credits and select a grade for subject " + (i + 1) + ".";
      result.className = "result error";
      return;
    }

    totalCredits = totalCredits + Number(credit);
    totalPoints = totalPoints + Number(credit) * Number(grade);
  }

  if (totalCredits == 0) {
    result.innerHTML = "Please fill in at least one subject.";
    result.className = "result error";
    return;
  }

  var cgpa = totalPoints / totalCredits;
  var percentage = cgpa * 9.5;

  result.innerHTML =
    "Total Credits: " + totalCredits + "<br>" +
    "Total Grade Points: " + totalPoints + "<br>" +
    "CGPA: " + cgpa.toFixed(2) + "<br>" +
    "Equivalent Percentage: " + percentage.toFixed(2) + "%";
  result.className = "result success";
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var result = document.getElementById("contactResult");

  if (name == "" || email == "" || message == "") {
    result.innerHTML = "Please fill in all the fields.";
    result.className = "result error";
    return;
  }

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    result.innerHTML = "Please enter a valid email address.";
    result.className = "result error";
    return;
  }

  result.innerHTML = "Thank you, " + name + "! Your message has been received.";
  result.className = "result success";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
