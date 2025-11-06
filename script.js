// === Показ и скрытие ответов для задач ===
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".show-answer");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const ans = btn.nextElementSibling;
      if (!ans) return;
      ans.style.display = ans.style.display === "block" ? "none" : "block";
    });
  });
});

// === Универсальная проверка ответа (для всех тем) ===
// Используй в HTML так:
// <input id="a1" type="number">
// <button onclick="checkAnswer('a1', 12)">Проверить</button>
// <span id="r_a1"></span>

function checkAnswer(id, correct) {
  const input = document.getElementById(id);
  const result = document.getElementById("r_" + id);
  if (!input || !result) return;

  const user = parseFloat(input.value);

  if (isNaN(user)) {
    result.textContent = "💡 Введите число, пожалуйста!";
    result.style.color = "#c00";
    return;
  }

  if (Math.abs(user - correct) < 0.0001) {
    result.textContent = "✅ Верно! Отличная работа!";
    result.style.color = "green";
  } else {
    result.textContent = `❌ Неверно. Попробуй ещё раз 😉`;
    result.style.color = "red";
  }
}

// === Аккордеоны для каждой темы (разделы: Уравнения, Комбинаторика и т.д.) ===
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// === Универсальная функция проверки мини-тестов ===
// Позволяет быстро добавлять новые тесты, просто указав ID формы и ответы
function checkTest(formId, answers) {
  const form = document.getElementById(formId);
  if (!form) return;

  let score = 0;
  const total = Object.keys(answers).length;

  for (let key in answers) {
    const inp = form.elements[key];
    if (!inp) continue;

    const user = parseFloat(inp.value);
    let fb = document.getElementById(`r_${key}_${formId}`);
    if (!fb) {
      fb = document.createElement("span");
      fb.id = `r_${key}_${formId}`;
      inp.insertAdjacentElement("afterend", fb);
    }

    if (isNaN(user)) {
      fb.textContent = "💬 Введите ответ";
      fb.style.color = "#c00";
      continue;
    }

    if (Math.abs(user - answers[key]) < 0.0001) {
      fb.textContent = " ✅ Верно!";
      fb.style.color = "green";
      score++;
    } else {
      fb.textContent = " ❌ Неверно, попробуй ещё раз";
      fb.style.color = "red";
    }
  }

  // Отображение общего результата
  const resultBlock = document.getElementById(`result_${formId}`);
  if (resultBlock) {
    resultBlock.textContent = `Правильных ответов: ${score} из ${total}`;
  }
}

// === Пример вызова мини-теста для Комбинаторики ===
// (Ты можешь добавлять другие темы, просто копируя структуру)
function checkTest2() {
  const answers = { q1: 24, q2: 10, q3: 24, q4: 6, q5: 6 };
  checkTest("test-form2", answers);
}

/* 
📸 Место для картинки:
Если хочешь визуально показать пример (например, схему перестановок или таблицу сочетаний) —
вставь её в HTML здесь и просто убери этот комментарий.
*/
