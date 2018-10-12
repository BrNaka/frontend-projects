const btnCodes = { 
    81: ["Bass", "Q"], 
    87: ["Snare", "W"], 
    69: ["Bass_Drum", "E"],
    65: ["High_Hat", "A"], 
    83: ["Closed_HH", "S"], 
    68: ["Side_Stick", "D"],
    90: ["Chord_1", "Z"], 
    88: ["Chord_2", "X"], 
    67: ["Chord_3", "C"] 
};

const btns = { 
    Q: document.getElementById("Bass"), 
    W: document.getElementById("Snare"),
    E: document.getElementById("Bass_Drum"),
    A: document.getElementById("High_Hat"),
    S: document.getElementById("Closed_HH"),
    D: document.getElementById("Side_Stick"),
    Z: document.getElementById("Chord_1"),
    X: document.getElementById("Chord_2"),
    C: document.getElementById("Chord_3") 
};

const display = document.getElementById("display");

const playAudio = (key) => {
    let audio = document.getElementById(key);
    audio.play();
};

const displayText = (key, text) => {
    display.innerHTML = text;
    btns[key].classList.add("active");
};

document.addEventListener("keydown", (event) => {
    let eventCode = event.keyCode;
    Object.keys(btnCodes).some(code => {
        if (code == eventCode) {
            let btn = document.getElementById(btnCodes[eventCode][0]);
            let audio = document.getElementById(btnCodes[eventCode][1]);
            display.innerHTML = btnCodes[eventCode][0];
            btn.classList.add("active");
            audio.play();
        }
    })
}); 

document.addEventListener("keyup", (event) => {
    let eventCode = event.keyCode;
    Object.keys(btnCodes).some(code => {
        if (code == eventCode) {
            let btn = document.getElementById(btnCodes[eventCode][0]);
            btn.classList.remove("active");
        }
    })
}); 

document.addEventListener("mousedown", (e) => {
    let target = e.target;
    if (e.target.className == "drum-pad") {
        let keyTarget = e.target.textContent.trim();
        let text = e.target.id;
        playAudio(keyTarget);
        displayText(keyTarget, text);
        target.addEventListener("mouseup", () => {
            target.classList.remove("active");
        });
    }
});
