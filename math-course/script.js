
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

// === Проверка одного ответа ===
// Пример HTML:
// <input id="a1" type="number">
// <button onclick="checkAnswer('a1', 12)">Проверить</button>
// <span id="r_a1"></span>
function checkAnswer(id, correct) {
  const input = document.getElementById(id);
  const result = document.getElementById("r_" + id);
  if (!input || !result) return;

  const user = parseFloat(input.value);
  if (user === correct) {
    result.textContent = "✅ Верно!";
  } else {
    result.textContent = "❌ Попробуй ещё раз";
  }
}

// аккордеон КОМБИНАТОРИКА
document.querySelectorAll(".accordion").forEach(btn=>{
  btn.addEventListener("click",()=>{
    btn.classList.toggle("active");
    const panel=btn.nextElementSibling;
    panel.style.display = panel.style.display==="block"?"none":"block";
  });
});

// проверка мини-теста по комбинаторике
function checkTest2(){
  const answers={q1:24,q2:10,q3:24,q4:6,q5:6};
  const form=document.getElementById("test-form2");
  let score=0;
  for(let key in answers){
    const inp=form.elements[key];
    if(!inp) continue;
    const user=parseFloat(inp.value);
    let fb=document.getElementById("r_"+key+"_2");
    if(!fb){
      fb=document.createElement("span");
      fb.id="r_"+key+"_2";
      inp.insertAdjacentElement("afterend",fb);
    }
    fb.textContent = user===answers[key] ? " ✅ Верно!" : " ❌ Попробуй ещё раз";
    if(user===answers[key]) score++;
  }
  document.getElementById("result2").textContent=
    `Правильных ответов: ${score} из ${Object.keys(answers).length}`;
}