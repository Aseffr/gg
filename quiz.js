// quiz.js
document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const feedbackP = document.getElementById('feedback');
    
    const correctAnswers = {
        q1: "c", // Computer Space
        q2: "b", // 1993
        q3: "b", // Tainted Grail
        q4: "d", // vse
        q5: "c"  // 2000-е
    };
    
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let score = 0;
        const userAnswers = {
            q1: quizForm.q1.value,
            q2: quizForm.q2.value,
            q3: quizForm.q3.value,
            q4: quizForm.q4.value,
            q5: quizForm.q5.value
        };
        
        // Проверка ответов
        for (let question in correctAnswers) {
            if (userAnswers[question] === correctAnswers[question]) {
                score++;
            }
        }
        
        // Показ результатов
        scoreSpan.textContent = score;
        feedbackP.textContent = getFeedback(score);
        quizForm.style.display = 'none';
        resultsDiv.style.display = 'block';
    });
    
    function getFeedback(score) {
        if (score === 5) return "Отлично! Вы настоящий эксперт в истории игр!";
        if (score >= 3) return "Хороший результат! Вы знаете историю игр.";
        return "Попробуйте еще раз и изучите материалы внимательнее!";
    }
});