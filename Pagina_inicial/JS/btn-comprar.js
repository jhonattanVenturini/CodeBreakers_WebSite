var popup = document.getElementById('popup');
var btn = document.getElementById('openPopup');
var span = document.getElementsByClassName('close')[0];
var confirmBtn = document.getElementById('confirmPurchase');
var cancelBtn = document.getElementById('cancelPurchase');

// Abrir o Popup
btn.onclick = function(Abrir) {
    popup.style.display = "block";
}

// Fechar o Popup ao clicar no (x)
span.onclick = function() {
    popup.style.display = "none";
}

// Fechar ao clicar no botão de cancelar
cancelBtn.onclick = function() {
    popup.style.display = "none";
}

// Função ao confirmar a compra
confirmBtn.onclick = function() {
    alert('Compra confirmada!');
    popup.style.display = "none";
}
