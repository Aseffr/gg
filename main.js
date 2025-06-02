// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Фейк-крестик для рекламы (на самом деле тоже ведет на рекламу)
    document.querySelector('.fake-close').addEventListener('click', function() {
        window.open('https://store.steampowered.com/app/1466060/Tainted_Grail_The_Fall_of_Avalon/', '_blank');
    });
    
    // Прокрутка страницы - реклама остается на месте
    window.addEventListener('scroll', function() {
        // Рекламный баннер уже позиционирован fixed, поэтому он остается на месте
    });
});