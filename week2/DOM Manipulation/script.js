/*const heading = document.getElementById("hello");
console.log(hello);
console.log(typeof heading);

const heading = document.getElementById("heading");
console.log(heading);

const list = document.getElementById("list");
list.textContent = "Hi";
console.log(list.textContent);

const li = document.querySelector("li");
console.log(li);

const li2 = document.querySelectorAll("li");
console.log(li2);

const heading = document.getElementById("heading");
heading.style.color = "blue";

const lis = document.querySelectorAll("li");
console.log(lis);
lis[1].style.backgroundColor = "red";
for (let i = 0; i < lis.length; i++) 
{
lis[i].style.backgroundColor = "red";
}

const btn = document.querySelector(".btn");
btn.onclick = () => {
console.log("Clicked!");
};

btn.onmouseover = () => {
heading.style.cssText = "background-color: brown; color: white";
};

btn.onmouseout = () => {
heading.style.cssText = "background-color: transparent; color: black";
};

const clickButton = () => {
console.log("Clicked!");
};

btn.addEventListener("click", e => {
heading.style.cssText = "background-color: brown; color: white";
console.log(e.target);
});

const para = document.querySelector(".paragraph");
console.log(para.getAttribute("id"));
console.log(para.getAttribute("class"));*/

const new = document.createElement("li");
const txt = document.createTextNode("XYZ");
new.appendChild(txt);
list.appendChild(new);
list.insertBefore(new, list.children[1]);
list.removeChild(new);
console.log(list);
