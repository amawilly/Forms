document.addEventListener("DOMContentLoaded", () => {
    const answers = {
        // Forum 1
        forum1: { q11: "q11b", q12: "q12a", q13: "q13c", q32: "q14c" },
        // Forum 2
        forum2: { q21: "q21b", q22: "q22c" },
        // Forum 3
        forum3: {
            answer1: "two main questions",
            answer2: "the first 30 seconds",
            answer3: "10 - 15 minutes earlier",
            answer4: "to be prepared"
        },
        // Forum 4
        forum4: { answer1: "c", answer2: "e", answer3: "b", answer4: "a" },
        // Forum 5
        forum5: { question1: "True", question2: "False", question3: "True" },
        // Forum 6
        forum6: ["D", "B", "A", "C"],
        // Forum 7
        forum7: "C"
    };

    const calculateScore = () => {
        let score = 0;

        // Forum 1
        const forum1Questions = document.querySelectorAll("#forum1 .question");
        forum1Questions.forEach((question, index) => {
            const selected = question.querySelector("input:checked");
            if (selected && selected.id === answers.forum1[`q1${index + 1}`]) {
                score++;
            }
        });

        // Forum 2
        const forum2Questions = document.querySelectorAll("#forum2 .question");
        forum2Questions.forEach((question, index) => {
            const selected = question.querySelector("input:checked");
            if (selected && selected.id === answers.forum2[`q2${index + 1}`]) {
                score++;
            }
        });

        // Forum 3
        const forum3Answers = document.querySelectorAll("#forum3 input[type='text']");
        forum3Answers.forEach((input, index) => {
            if (input.value.trim().toLowerCase() === answers.forum3[`answer${index + 1}`].toLowerCase()) {
                score++;
            }
        });

        // Forum 4
        const forum4Answers = document.querySelectorAll("#forum4 select");
        forum4Answers.forEach((select, index) => {
            if (select.value === answers.forum4[`answer${index + 1}`]) {
                score++;
            }
        });

        // Forum 5
        const forum5Questions = document.querySelectorAll("#forum5 .question-container");
        forum5Questions.forEach((question, index) => {
            const selected = question.querySelector("input:checked");
            if (selected && selected.value === answers.forum5[`question${index + 1}`]) {
                score++;
            }
        });

        // Forum 6
        const forum6Answers = document.querySelectorAll("#forum6 input[type='text']");
        forum6Answers.forEach((input, index) => {
            if (input.value.trim().toUpperCase() === answers.forum6[index]) {
                score++;
            }
        });

        // Forum 7
        const forum7Answer = document.querySelector("#forum7 input:checked");
        if (forum7Answer && forum7Answer.value === answers.forum7) {
            score++;
        }

        // Display the score
        document.getElementById("score").innerText = "Your score: " + score;
    };

    // Afișează butonul pentru calcularea scorului
    const calculateButton = document.querySelector("button");
    calculateButton.addEventListener("click", calculateScore);
});
