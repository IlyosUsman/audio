const startButton = document.querySelector("#start")
const recognition = new webkitSpeechRecognition();
recognition.continous = false;
recognition.lang = "Uz-uz";
recognition.interimesult = false;
recognition.maxAkternative = 1;
const audioPlayer = document.getElementById('audio-player');

const synth = window.speechSynthesis;

startButton.addEventListener("click", () => {
    recognition.start();
});


let utter = new SpeechSynthesisUtterance("Salom, ahvollar qaley?");
utter.onend = () => {
    recognition.start();
};

recognition.onresult = (arg) => {
    const transcript = arg.results[arg.results.length - 1][0].transcript.trim();

    if (transcript === "salom") {
        recognition.stop();
        utter.text = "Salom ahvollar qalay?";
        synth.speak(utter);
        console.log("Salom ahvollar qaley");
    } 
    if (transcript === "xayr") {
        recognition.stop();
        utter.text = "Hayr salomat boling?";
        synth.speak(utter);
        console.log("Hayr salomat boling");
    }

}

function fetcher(arg){
    fetch(`https://internal.nutq.uz/api/v1/cabinet/synthesize/?t=${arg}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data
    });
}

// console.log(fetcher('salom qalesiz'));
