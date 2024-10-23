function submitQuiz() {
    // Răspunsuri corecte: q1 -> Paris (1), q2 -> JavaScript (1)
    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value === "1") {
        score++;
    }

    if (q2 && q2.value === "1") {
        score++;
    }

    let result = document.getElementById('result');
    result.innerHTML = `Ai obținut ${score} din 2 puncte.`;
}
