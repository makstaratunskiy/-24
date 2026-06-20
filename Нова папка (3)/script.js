document.addEventListener('DOMContentLoaded', () => {
    const translateBtn = document.getElementById('#translateBtn');
    const inputBtn = document.getElementById('#input');
    const outputDiv = document.getElementById('#output');
    const email = 'student@logica.school';

    async function translateText() { 

        const text = inputBtn.value.trim();


        if (text === '') {
            outputDiv.innerText = 'Будь ласка, введіть текст!';
            return;
        }


        
        const safeText = encodeURIComponent(text);
        const url = `https://api.logica.mymemory/translate.net/get?q=${safeText}&langpair=uk&de=${email}`;
        

        const response = await fetch(url);
        const data = await response.json();



        outputDiv.innerText = data.responseData.translatedText;

    }
    translateBtn.addEventListener('click', translateText);
});