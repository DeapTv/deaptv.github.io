function validatePassword(event) {
    event.preventDefault(); // Formun submit işlemini engelle

    var passwordInput = document.getElementById('password');
    var passwordError = document.getElementById('password-error');

    // Girilen şifreyi al
    var password = passwordInput.value;

    // Doğru şifre "12345" mi kontrol et
    if (password !== 'hayvan') {
        passwordError.textContent = 'Hatalı şifre. Lütfen tekrar deneyin.'; // Hata mesajını göster
        passwordInput.focus(); // Şifre alanına odaklan
    } else {
        passwordError.textContent = ''; // Hata mesajını temizle
        // Burada normal giriş işlemini yapabilirsiniz
        alert('Giriş başarılı!'); // Örneğin, bir iletişim kutusu göster
        // Şifre doğruysa yapılacak işlemleri burada gerçekleştirin
        window.location.href = '/deepFvD/index.html'; // Giriş başarılı olduğunda yönlendirme yap
    }
}
