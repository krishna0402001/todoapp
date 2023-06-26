const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

addtask = () => {
  if (inputbox.value === "") {
    alert("Enter Your Text!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li); //all three lines to enter the text in the app
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span); //for cros button
  }
  inputbox.value = "";
  saveData(); //calling this function everytime when we add some data
};

listcontainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      console.log("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      console.log("removed");
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listcontainer.innerHTML);
}; //save data

const showList = () => {
  listcontainer.innerHTML = localStorage.getItem("data");
};

showList();
