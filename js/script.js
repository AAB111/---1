const variants = document.querySelectorAll(".variants div img");
const selectedPhoto = document.querySelector(".selected img");
variants.forEach(function (variant) {
    variant.addEventListener("click", function() {
        // (selectedPhoto.src,variant.src) = (variant.src,selectedPhoto.src)
        const selectedPhotoPath = selectedPhoto.src;
        selectedPhoto.src = variant.src;
        variant.src = selectedPhotoPath;
    });
})
const modalBtn = document.querySelector(".overview-top button");
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector("form");
modalBtn.addEventListener("click", function() {
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});


function CustomValidation() { }

CustomValidation.prototype = {
  // Установим пустой массив сообщений об ошибках
    textError: '',
  // Метод, проверяющий валидность
    checkName: function(input) {
        if (!input.value.match(/^[а-яА-Я]+$/g)) {
            this.textError = 'Используйте кириллицу'
            return false;
        }
        return true;
    },
    checkPhone: function(input) {
        if(!input.value.match(/^\+7[0-9]{10}$/g)){
            this.textError = 'Не правильная форма телефона';
            return false;
        }
        return true;
    },
    textForHTML: function(input) 
    {
        let errorDiv = input.nextSibling;
        if(errorDiv.className != 'error-message' && this.textError != ''){
            input.insertAdjacentHTML('afterend', '<p class="error-message">' + this.textError + '</p>')
        }
        else if (errorDiv.className == 'error-message' && this.textError == ''){
            errorDiv.remove()
        }
        this.textError = '';
    }
}
form.addEventListener("submit", function(event) {
    let inputName = form.querySelector('.input-name');
    let inputPhone = form.querySelector('.input-phone');
    stopSubmit = false
    var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
    if (!inputCustomValidation.checkName(inputName)){
        stopSubmit = true;
        inputCustomValidation.textForHTML(inputName)
    }
    else{
        inputCustomValidation.textForHTML(inputName)

    }
    if(!inputCustomValidation.checkPhone(inputPhone))
    {
        stopSubmit = true;
        inputCustomValidation.textForHTML(inputPhone)
    }
    else
    {
        inputCustomValidation.textForHTML(inputPhone)
    }
    if (stopSubmit) {
        event.preventDefault();
    }
    else{
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});