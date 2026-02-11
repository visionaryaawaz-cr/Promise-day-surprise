document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation
    const hiddenElements = document.querySelectorAll('.hidden-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
            }
        });
    }, { threshold: 0.15 });

    hiddenElements.forEach((el) => observer.observe(el));


    // 2. The Final Promise Accept Button
    const acceptBtn = document.getElementById('acceptBtn');
    acceptBtn.addEventListener('click', () => {
        acceptBtn.innerHTML = "Forever Yours, My Devi Ji ❤️🧿";
        acceptBtn.style.background = "linear-gradient(45deg, #ffd700, #ffea70)";
        acceptBtn.style.color = "#8b0000";
        acceptBtn.style.borderColor = "#8b0000";
        createHeartShower();
    });

    function createHeartShower() {
        const showerContainer = document.getElementById('heartShower');
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('falling-heart');
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '-5vh';
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                
                const fallDuration = Math.random() * 3 + 2; 
                heart.style.animationDuration = fallDuration + 's';
                
                showerContainer.appendChild(heart);
                setTimeout(() => heart.remove(), fallDuration * 1000);
            }, i * 50);
        }
    }
});

// 3. Chocolate Promises Logic (Global Functions)
const chocoData = {
    'snickers': {
        title: "Snickers Crunchy Promise 🥜",
        text: "जब भी तुम गुस्से में 'Hangry' (Hungry + Angry) हो जाओगी, मैं हमेशा Snickers Crunchy के साथ तुम्हारी प्यारी सी स्माइल वापस लाने का प्रॉमिस करता हूँ! 🍫"
    },
    'dairymilk': {
        title: "Dairy Milk Promise 🥛",
        text: "मैं वादा करता हूँ कि हमारा प्यार हमेशा Dairy Milk की तरह मीठा, क्लासिक और समय के साथ और भी गहरा होता जाएगा। 🍬"
    },
    'kitkat': {
        title: "Kit Kat Promise 🍫",
        text: "दुनिया की सारी टेंशन और थकान से दूर, मैं हमेशा तुम्हारा सुकून वाला 'Break' बनूँगा। Have a break, have me! ❤️"
    },
    'chocopie': {
        title: "Choco Pie Promise 🧁",
        text: "मैं प्रॉमिस करता हूँ कि तुम्हारे इस Choco Pie जैसे सॉफ्ट और प्यारे दिल को हमेशा खुशियों से भरकर रखूँगा और कभी टूटने नहीं दूँगा।"
    },
    'kinderjoy': {
        title: "Kinder Joy Promise 🥚",
        text: "मैं वादा करता हूँ कि तुम्हारे अंदर की उस छोटी सी, चुलबुली बच्ची को हमेशा ज़िंदा रखूँगा। You are and will always be my Kinder Joy! 💖"
    }
};

window.showChoco = function(chocoId) {
    const modal = document.getElementById('chocoModal');
    const title = document.getElementById('chocoTitle');
    const text = document.getElementById('chocoText');
    
    title.innerText = chocoData[chocoId].title;
    text.innerText = chocoData[chocoId].text;
    
    modal.classList.remove('hidden');
}

window.closeChoco = function() {
    document.getElementById('chocoModal').classList.add('hidden');
}
