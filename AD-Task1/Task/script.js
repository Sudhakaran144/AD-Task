function myFunc(){
    const inputValue = document.getElementById("inputBox").value;

    document.getElementById("result").textContent = inputValue;
}

function myFunc1(){
    const c = document.getElementById("container");
    let h = document.createElement("h1");
    h.innerHTML = 'hello';
    c.appendChild(h);
}
function myFunc2() {
    const d = document.getElementById("btn1");
    d.style.background = "red";
}
function myFunc3(value){
    document.getElementById('res').innerHTML = value;
}