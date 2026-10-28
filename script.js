// عرض السنة الحالية تلقائياً
document.getElementById("year").textContent =
  new Date().getFullYear();

// ضع رابط دعوة سيرفرك هنا
const DISCORD_INVITE_URL = "https://discord.gg/ppe";

// ربط زر الانضمام برابط السيرفر
document.getElementById("discordLink").href =
  DISCORD_INVITE_URL;

// محاولة تحميل الإيموجي بصيغة PNG عند فشل GIF
document
  .querySelectorAll(
    "img[src*='cdn.discordapp.com/emojis/']"
  )
  .forEach((img) => {
    img.addEventListener("error", () => {
      if (!img.dataset.fallbackTried) {
        img.dataset.fallbackTried = "true";

        img.src = img.src.replace(
          /\.gif(?=\?)/,
          ".png"
        );
      }
    });
  });
