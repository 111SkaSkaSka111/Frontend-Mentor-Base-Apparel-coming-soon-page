document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const input = document.getElementById("input");
    const warn = document.getElementById("warn");
    const card = document.querySelector(".card");

    button.addEventListener("click", function (e) {
        e.preventDefault;

        // Ambil isi dari input
        const inputValue = input.value;

        // Cek apakah ada @ dan .
        if (inputValue.includes("@") && inputValue.includes(".")) {
            // Jika ada, tampilkan alert
            alert(` thank you for subscribing!. ${inputValue}`);
            location.reload();
        } else {
            // Jika tidak ada, tambahkan class active pada input dan warn
            input.classList.add("active");
            warn.classList.add("active");
            card.classList.add("active");
        }
    });
});
