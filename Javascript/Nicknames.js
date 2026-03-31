const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const nick = ["King", "Queen", "Tiger", "Master", "Hero"];

btn.addEventListener("click", () => {
  const p = document.createElement("p");
  const number = Math.floor(Math.random() * nick.length);
  console.log(number);
  p.innerHTML = `<b>${input.value}</b> your nickname is <b>${nick[number]}</b>`;
  document.body.appendChild(p);
});
