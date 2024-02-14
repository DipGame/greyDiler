
document.querySelector('.arrow-to-top').addEventListener('click', () => {
    // переместим в начало страницы
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

if (document.querySelector("#popup")) {
    const popup = document.querySelector("#popup");
    const popupContainer = popup.querySelector(".popup-container");
    const form = popup.querySelector(".form");
    const phone = popup.querySelector("#phone");
    const whereYouFrom = popup.querySelector("#whereYouFrom");

    const formCredit = document.querySelector('.form-credit');
    const formCreditPhone = formCredit.querySelector('#phone');

    const formOffer = document.querySelector('.form-offer');
    const formOfferPhone = formOffer.querySelector('#phone');

    const success = document.getElementById('success');
    const btnSuccess = success.querySelector('.btn');
    const btnSuccessClose = success.querySelector('.form-messages-close');

    const successError = document.getElementById('error');
    const btnSuccessError = successError.querySelector('.btn');
    const btnSuccessCloseError = successError.querySelector('.form-messages-close');

    function closePopup(item) {
        item.classList.remove("open");
    }

    function closeSuccess(item) {
        item.classList.remove("opened");
    }

    function openPopup(item) {
        item.classList.add("open");
    }

    function goodSuccess() {
        closePopup(popup);
        success.classList.add("opened");
    }

    function errSuccess() {
        closePopup(popup);
        successError.classList.add("opened");
    }

    document.querySelectorAll('.js-popup').forEach(el => {
        el.addEventListener('click', () => {
            openPopup(popup);
        })
    })

    popup.addEventListener('click', (e) => {
        if (e.target.id == "popup") {
            closePopup(popup);
        }
    })

    btnSuccess.addEventListener('click', (e) => {
        closeSuccess(success);
    })

    btnSuccessClose.addEventListener('click', (e) => {
        closeSuccess(success);
    })

    btnSuccessError.addEventListener('click', (e) => {
        closeSuccess(successError);
    })

    btnSuccessCloseError.addEventListener('click', (e) => {
        closeSuccess(successError);
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        grecaptcha.ready(function () {
            grecaptcha.execute('6LconTspAAAAAK6X0fxWPdKLfRxk_e96YymZDZmv', { action: 'submit' }).then(function (token) {
                if (phone.value.length == 18 && !phone.value.includes("_")) {
                    let formData = new FormData();
                    formData.append('inputPhone', phone.value);
                    formData.append('whereYouFrom', whereYouFrom.value);
                    formData.append('token', token);
                    fetch('../tools/callBack.php', {
                        method: 'POST',
                        body: formData,
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then((res) => {
                            if (!res.error) {
                                goodSuccess();
                            } else {
                                errSuccess();
                            }
                        })
                        .catch((err) => {
                            errSuccess();
                        })
                } else {
                    alert("Пожалуйста, укажите номер телефона для связи");
                }
            });
        });
    })

    formCredit.addEventListener('submit', (e) => {
        e.preventDefault();
        grecaptcha.ready(function () {
            grecaptcha.execute('6LconTspAAAAAK6X0fxWPdKLfRxk_e96YymZDZmv', { action: 'submit' }).then(function (token) {
                if (formCreditPhone.value.length == 18 && !formCreditPhone.value.includes("_")) {
                    let formData = new FormData();
                    formData.append('inputPhone', formCreditPhone.value);
                    formData.append('whereYouFrom', whereYouFrom.value);
                    formData.append('token', token);
                    fetch('../tools/callBack.php', {
                        method: 'POST',
                        body: formData
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then((res) => {
                            if (!res.error) {
                                goodSuccess();
                                formCreditPhone.value = "";
                            } else {
                                errSuccess();
                            }
                        })
                        .catch((err) => {
                            errSuccess();
                        })
                } else {
                    alert("Пожалуйста, укажите номер телефона для связи");
                }
            });
        });
    })
    formOffer.addEventListener('submit', (e) => {
        e.preventDefault();
        grecaptcha.ready(function () {
            grecaptcha.execute('6LconTspAAAAAK6X0fxWPdKLfRxk_e96YymZDZmv', { action: 'submit' }).then(function (token) {
                if (formOfferPhone.value.length == 18 && !formOfferPhone.value.includes("_")) {
                    let formData = new FormData();
                    formData.append('inputPhone', formOfferPhone.value);
                    formData.append('whereYouFrom', whereYouFrom.value);
                    formData.append('token', token);
                    fetch('../tools/callBack.php', {
                        method: 'POST',
                        body: formData
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then((res) => {
                            if (!res.error) {
                                goodSuccess();
                                formOfferPhone.value = "";
                            } else {
                                errSuccess();
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            errSuccess();
                        })
                } else {
                    alert("Пожалуйста, укажите номер телефона для связи");
                }
            });
        });

    })
}