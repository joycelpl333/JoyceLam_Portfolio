// 1. 側邊欄邏輯
const sidebar = document.getElementById('sidebar');
document.getElementById('menu-open').onclick = () => sidebar.classList.add('active');
document.getElementById('close-menu').onclick = () => sidebar.classList.remove('active');

// 2. 翻譯功能
let currentLang = 'zh';
const langBtn = document.getElementById('lang-switch');

langBtn.onclick = () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
};

function updateLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

// 3. 動態渲染作品
function renderProjects() {
    projectData.forEach(item => {
        const grid = document.getElementById(`${item.category}-grid`);
        if (grid) {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="${item.img}" class="project-img" alt="${item.title}">
                <a href="${item.url}" target="_blank" class="overlay-hint">
                    <span class="hint-text" data-key="view-btn">${translations[currentLang]["view-btn"]}</span>
                </a>
            `;
            grid.appendChild(card);
        }
    });
}

// 4. 回到頁首與按鈕淡化
const bttBtn = document.getElementById('back-to-top');
window.onscroll = () => {
    if (window.scrollY > 500) {
        bttBtn.style.opacity = "1";
        bttBtn.style.visibility = "visible";
    } else {
        bttBtn.style.opacity = "0";
        bttBtn.style.visibility = "hidden";
    }
};

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 初始化
window.onload = () => {
    renderProjects();
    updateLanguage();
};
