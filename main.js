prediction1 = " ";
prediction2 = " ";






Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

cam = document.getElementById("camera");
Webcam.attach(cam);







function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });

}




console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OHI9owsLI/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction1;
    speak_data_2 = "and the second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, got_results);

}

function got_results(errors, results) {
    if (errors) {
        console.error(errors);
    } else {
        console.log(results);
        console.log(results[0].label);
        console.log(results[1].label);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;

        prediction1 = results[0].label;
        prediction2 = results[1].label;

        speak();
        if (results[0].label == "Handshake") {
            document.getElementById("update_emoji").innerHTML = "&#129309;";
        }
        if (results[0].label == "Victory") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if (results[0].label == "Amazing") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if (results[0].label == "Greetings/Namaste") {
            document.getElementById("update_emoji").innerHTML = "&#128591;";
        }

        }
        if (results[0].label == "Best//like") {
        document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
         if (results[0].label == "Dislike") {
        document.getElementById("update_emoji").innerHTML = "&#128078;";
        }


    if (results[1].label == "Handshake") {
        document.getElementById("update_emoji2").innerHTML = "&#129309;";
    }
    if (results[1].label == "Victory") {
        document.getElementById("update_emoji2").innerHTML = "&#9996;";
    }
    if (results[1].label == "Amazing") {
        document.getElementById("update_emoji2").innerHTML = "&#128076;";
    }
    if (results[1].label == "Greetings/Namaste") {
        document.getElementById("update_emoji2").innerHTML = "&#128591;";
    }

}
if (results[1].label == "Best//like") {
    document.getElementById("update_emoji2").innerHTML = "&#128077;";
}
if (results[1].label == "Dislike") {
    document.getElementById("update_emoji2").innerHTML = "&#128078;";
}