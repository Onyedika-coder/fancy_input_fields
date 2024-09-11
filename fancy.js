const input1 = document.getElementById("input1");
const legend1 = document.getElementById("legend1");
const input2 = document.getElementById("input2");
const legend2 = document.getElementById("legend2");
const input3 = document.getElementById("input3");
const legend3 = document.getElementById("legend3");
const form = document.getElementById("form");

form.addEventListener("submit", e =>{
e.preventDefault();
validate();

})

const validate = () =>{
  form.submit();
}


const event1 = () => {
  const input1 = document.getElementById("input1");
  document.getElementById("legend1").classList.add("focused");
  document.getElementById("legend1").classList.remove("unfocused");
  input1.style.borderColor = "#03045E";
  input1.focus();
};

const event1a = (e) => {
  const input1 = document.getElementById("input1");
  if (input1.value.length >= 1) {
    //e.preventDefault();
    input1.style.borderColor = "#03045E";
  } else {
    input1.style.borderColor = "";
    document.getElementById("legend1").classList.remove("focused");
    document.getElementById("legend1").classList.add("unfocused");
  }
};

input1.addEventListener("focus", event1);
legend1.addEventListener("click", event1);
input1.addEventListener("blur", event1a);

/* --------------User_Input--------------*/


const event2 = () => {
  const input2 = document.getElementById("input2");
  document.getElementById("legend2").classList.add("focused");
  document.getElementById("legend2").classList.remove("unfocused");
  input2.style.borderColor = "#03045E";
  input2.focus();
};

const event2a = (e) => {
  const input2 = document.getElementById("input2");
  if (input2.value.length >= 1) {
    e.preventDefault();
    input2.style.borderColor = "#03045E";
  } else {
    input2.style.borderColor = "";
    document.getElementById("legend2").classList.remove("focused");
    document.getElementById("legend2").classList.add("unfocused");
  }
};

input2.addEventListener("focus", event2);
legend2.addEventListener("click", event2);
input2.addEventListener("blur", event2a);

/* --------------Email_Input--------------*/

const event3 = () => {
  const input3 = document.getElementById("input3");
  document.getElementById("legend3").classList.add("focused");
  document.getElementById("legend3").classList.remove("unfocused");
  input3.style.borderColor = "#03045E";
  input3.focus();
};

const event3a = (e) => {
  const input3 = document.getElementById("input3");
  if (input3.value.length >= 1) {
    e.preventDefault();
    input3.style.borderColor = "#03045E";
  } else {
    input3.style.borderColor = "";
    document.getElementById("legend3").classList.remove("focused");
    document.getElementById("legend3").classList.add("unfocused");
  }
};

input3.addEventListener("focus", event3);
legend3.addEventListener("click", event3);
input3.addEventListener("blur", event3a);

/* --------------Password_Input--------------*/

