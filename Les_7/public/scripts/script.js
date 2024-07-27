const FEEDBACK_FORM = document.getElementById("feedback");

function sendRequest(feedback) {
  fetch("/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      alert("Success");
    })
    .catch((err) => {
      console.log(err);
      alert("Error");
    });
}

FEEDBACK_FORM.addEventListener("submit", (e) => {
  e.preventDefault(); //відміняє дефолтну поведінку форми
  const feedbackFormData = new FormData(e.target);
  const feedback = Object.fromEntries(feedbackFormData);
  sendRequest(feedback);
});
