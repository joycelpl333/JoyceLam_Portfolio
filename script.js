// 1. 頁面平滑滾動控制
function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
}

// 2. 回到頁首按鈕：智能顯示與 50% 透明度邏輯
const bttBtn = document.getElementById('back-to-top');
let isScrolling;

window.addEventListener('scroll', () => {
    // 顯示/隱藏邏輯
    if (window.scrollY > 500) {
        bttBtn.style.opacity = "1";
        bttBtn.style.visibility = "visible";
    } else {
        bttBtn.style.opacity = "0";
        bttBtn.style.visibility = "hidden";
    }

    // 靜置自動變為 50% 透明
    window.clearTimeout(isScrolling);
    bttBtn.style.opacity = "1"; // 滾動時保持 100%

    isScrolling = setTimeout(() => {
        if (window.scrollY > 500) {
            bttBtn.style.opacity = "0.5";
        }
    }, 2000); // 靜置 2 秒
});

// 3. 側邊欄控制
const sidebar = document.getElementById('sidebar');
document.getElementById('menu-open').onclick = () => {
    sidebar.style.left = '0';
};
document.getElementById('close-menu').onclick = () => {
    sidebar.style.left = '-300px';
};

// 4. Reveal Animation (進入視窗時淡入)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.work-section').forEach(el => observer.observe(el));

// 1. 側邊欄開關
const sidebar = document.getElementById('sidebar');
document.getElementById('menu-open').onclick = () => sidebar.classList.add('active');
document.getElementById('close-menu').onclick = () => sidebar.classList.remove('active');

// 2. 回到頁首按鈕與自動淡化
const bttBtn = document.getElementById('back-to-top');
let fadeTimer;

window.onscroll = () => {
    // 滾動超過 300px 才顯示
    if (window.scrollY > 300) {
        bttBtn.style.display = "block";
        bttBtn.style.opacity = "1";
        
        // 停止滾動 2 秒後變半透明
        clearTimeout(fadeTimer);
        fadeTimer = setTimeout(() => {
            bttBtn.style.opacity = "0.5";
        }, 2000);
    } else {
        bttBtn.style.display = "none";
    }
};

// 平滑滾動至模組
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 3. 語言切換邏輯 (範例)
let currentLang = 'zh';
const langBtn = document.getElementById('lang-switch');
langBtn.onclick = () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
};

function updateLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.innerText = translations[currentLang][key];
    });
}

// 4. Debug 輔助代碼
console.log("Portfolio System Initialized...");
window.onerror = (msg, url, line) => {
    console.error(`Debug Info: ${msg} at ${line}`);
    return false;
};
// 監控捲動動畫
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.work-section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// 側邊欄展開效果加強
const menuBtn = document.getElementById('menu-open');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.style.left = '0';
    // 這裡可以加入背景遮罩效果
});
