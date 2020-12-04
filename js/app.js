var input = document.querySelector('input'),
    btn =document.querySelector('.btn'),
    errorElt = document.querySelector('.error');

var regExp = /^[\w\d]+@[\w\d]+[\.][\w]{2,6}$/;

input.addEventListener('focus', function(){
    this.select();
    this.style.color = '#ccc';
    if (errorElt.classList.contains('activeError') || input.classList.contains('activeError')) {
        input.classList.remove('activeError');
        errorElt.classList.remove('activeError');
    }

});

btn.addEventListener('click', function(e){
    e.preventDefault();

    if(input.value.length === 0){
        input.classList.add('activeError');
        errorElt.classList.add('activeError');
        errorElt.textContent = 'Address Email can\'t be empty';
    }else if(regExp.test(input.value)){
        alert('confirmation OK');
    }else{
        input.classList.add('activeError');
        input.value = 'example@email/com';
        input.style.color = 'hsl(354, 100%, 66%)';

        errorElt.classList.add('activeError');
        errorElt.textContent = 'Please provide a valid email';
    }
});