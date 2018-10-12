const btnLights = document.getElementById("btn-lights");
const btn = document.getElementById("btn");
const body = document.getElementsByTagName("body")[0]; 
const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const display = document.getElementById("display");
const calculator = document.getElementById("calculator");
const a = Array.from(document.getElementsByTagName("a")); 
const clear = document.getElementById("clear");
const operators = Array.from(document.querySelectorAll(".operators *"));
const icon = document.getElementById("icon");

btnLights.addEventListener("click", () => {
    if (btn.classList.contains("sun")) {
        btn.classList.remove("sun");
        btn.classList.add("night");
        changeColorTo(nightColors);
    } else {
        btn.classList.remove("night");
        btn.classList.add("sun");
        changeColorTo(dayColors);
    }
});

const nightColors = { 
    body: "#111",
    h1: "#eee",
    p: "#eee",
    display: "#eee",
    displayNum: "#333",
    calculator: "#333",
    a: "#fff",
    operators: "rgba(137, 202, 255, .3)",
    clear: "rgba(137, 202, 255, .3)",
    btnLights: "rgba(137, 202, 255, .3)",
    icon: "http://icons.iconarchive.com/icons/custom-icon-design/lovely-weather-2/256/Moon-icon.png" 
}

const dayColors = { 
    body: "rgba(86, 255, 252, .3)",
    h1: "#333",
    p: "#333",
    display: "#333",
    displayNum: "#fff",
    calculator: "#fff",
    a: "#333",
    operators: "rgba(117, 255, 117, .5)",
    clear: "rgba(117, 255, 117, .5)",
    btnLights: "rgba(117, 255, 117, .5)",
    icon: "http://www.jmkxyy.com/sun-icon-png/sun-icon-png-26.jpg"
}

const changeColorTo = (colorOf) => {
    body.style.backgroundColor = colorOf["body"];
    h1.style.color = colorOf["h1"];
    p.style.color = colorOf["p"];
    display.style.backgroundColor = colorOf["display"];
    display.style.color = colorOf["displayNum"];
    calculator.style.backgroundColor = colorOf["calculator"];
    a.map(tag => { 
        tag.style.color = colorOf["a"]
    });
    operators.map(operator => {
        operator.style.backgroundColor = colorOf["operators"];
    });
    clear.style.backgroundColor = colorOf["clear"];
    btnLights.style.backgroundColor = colorOf["btnLights"];
    icon.src = colorOf["icon"];
}
