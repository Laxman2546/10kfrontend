const ul = document.createElement("ul");

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i + 1}`;
  ul.appendChild(li);
}

document.body.appendChild(ul);

const div = document.createElement("div");
const p = document.createElement("p");
p.textContent = "Hello, World!";
div.appendChild(p);
document.body.appendChild(div);

const div2 = document.createElement("div");
const p2 = document.createElement("p");
const h1 = document.createElement("h1");
p2.textContent = "This is a paragraph.";
h1.textContent = "This is a heading.";
div2.appendChild(p2);
div2.appendChild(h1);
document.body.appendChild(div2);

const table = document.createElement("table");
const tr = document.createElement("tr");
for (let i = 1; i <= 3; i++) {
  const td = document.createElement("td");
  td.textContent = `Cell ${i} Text`;
  tr.appendChild(td);
}
table.appendChild(tr);

document.body.appendChild(table);

const div5 = document.createElement("div");

for (let i = 0; i < 5; i++) {
  const button = document.createElement("button");
  console.log(button);
  button.innerText = `button ${i+1}`;
  div5.appendChild(button);
}

document.body.appendChild(div5);
