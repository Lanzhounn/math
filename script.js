
function checkTest(formId, answers) {
  const form = document.getElementById(formId);
  if (!form) return;

  let score = 0;
  const total = Object.keys(answers).length;

  for (const [key, correctAnswer] of Object.entries(answers)) {
    const input = form.elements[key];
    if (!input) continue;

    const userValue = parseFloat(input.value);

  
    let fb = document.getElementById(`fb_${formId}_${key}`);
    if (!fb) {
      fb = document.createElement("span");
      fb.id = `fb_${formId}_${key}`;
      fb.style.marginLeft = "10px";
      input.insertAdjacentElement("afterend", fb);
    }

    if (userValue === correctAnswer) {
      fb.textContent = " ✅ Верно!";
      fb.style.color = "green";
      score++;
    } else {
      fb.textContent = " ❌ Неверно";
      fb.style.color = "red";
    }
  }

  // общий итог
  let resultBlock = document.getElementById(`result_${formId}`);
  if (!resultBlock) {
    resultBlock = document.createElement("p");
    resultBlock.id = `result_${formId}`;
    form.appendChild(resultBlock);
  }

  resultBlock.textContent = `Правильных ответов: ${score} из ${total}`;
}


document.querySelectorAll(".topic-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".topic-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const topic = btn.dataset.topic;

    document.querySelectorAll(".topic-section").forEach(section => {
      section.classList.toggle("active", section.id === topic);
    });
  });
});
