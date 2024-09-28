function predictSize() {
    const periodNumber = document.getElementById('periodNumber').value;

    if (periodNumber < 0 || periodNumber > 999) {
        document.getElementById('result').innerText = "PLEASE ENTER A 3-DIGIT NUMBER.";
        return;
    }

    const prediction = Math.random() < 0.5 ? "BIG" : "SMALL";
    document.getElementById('result').innerText = `Prediction: ${prediction}`;
}
