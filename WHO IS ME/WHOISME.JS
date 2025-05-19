function openWhatsApp() {
  const number = '+249123800796';
  const message = encodeURIComponent("مرحبًا فانتوم، أود الاستفسار عن خدماتك 🌟");
  window.open(`https://wa.me/${number}?text=${message}`, '_blank');
}

function copyNumber() {
  const number = document.getElementById("whatsapp-number").textContent;
  navigator.clipboard.writeText(number).then(() => {
    alert("تم نسخ الرقم إلى الحافظة ✅");
  });
}
