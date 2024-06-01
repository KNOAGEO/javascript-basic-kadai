const text = document.getElementById('text');
const btn = document.getElementById('btn');

setTimeout(() => {
    btn
}, 2000);

    btn.addEventListener('click', () => {
        text.textContent = 'ボタンをクリックしました';
    });    

