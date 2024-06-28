let checkedNames = [];

function checkkhodam() {
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (name === "") {
        resultDiv.innerHTML = `<p style='color: red;'>Nama tidak boleh kosong</p>`;
        return;
    }

    const existingKhodam = checkedNames.find(nameObj => nameObj.name === name);
    if (existingKhodam && existingKhodam.khodamName === '') {
        resultDiv.innerHTML = `<p style='color: red;'>${name}, anda telah melakukan cek khodam sebelumnya tapi tidak memiliki khodam</p>`;
    } else if (existingKhodam) {
        resultDiv.innerHTML = `<p style='color: green;'>${name}, anda telah melakukan cek khodam sebelumnya. Khodam yang anda dapatkan adalah ${existingKhodam.khodamName}</p>`;
    } else {
        const khodamNames = [
            "Kulkas",
            "Siput",
            "Mesin Cuci",
            "Knalpot Racing",
            "Raja Iblis",
            "Barongsai"
        ];

        const khodamPresent = Math.random() > 0.5;
        const khodamName = khodamPresent ? khodamNames[Math.floor(Math.random() * khodamNames.length)] : '';

        resultDiv.innerHTML = `<p style='color: ${khodamPresent ? 'green' : 'red'};'>${name}, ${khodamPresent ? `Khodam anda adalah ${khodamName}` : 'maaf anda tidak memiliki khodam'}.</p>`;

        checkedNames.push({ name, khodamName });
    }

    const container = document.querySelector('.container');
    const inputWidth = window.innerWidth >= 768 ? '40$' : '75%';
    container.style.maxWidth = inputWidth;
    
}