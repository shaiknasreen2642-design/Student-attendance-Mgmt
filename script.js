function calculateAttendance() {
  const name = document.getElementById("studentName").value.trim();
  const attended = Number(document.getElementById("attended").value);
  const total = Number(document.getElementById("total").value);
  const result = document.getElementById("result");

  if (!name || attended < 0 || total <= 0) {
    result.textContent = "Please enter valid student details.";
    return;
  }
  if (attended > total) {
    result.textContent = "Attended classes cannot be greater than total classes.";
    return;
  }

  const percentage = (attended / total) * 100;
  result.innerHTML = "🎓 " + name + "<br>Attendance: " + percentage.toFixed(2) + "%";
  result.innerHTML += percentage >= 75
    ? "<br>✅ Attendance is 75% or above."
    : "<br>⚠️ Attendance is below 75%.";
}
