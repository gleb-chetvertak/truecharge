const closeBurgerMenu = () => {
    document.querySelector('.header').classList.remove('header--open');
};

const openBurgerMenu = () => {
    document.querySelector('.header').classList.add('header--open');
};

const sendRequest = () => {
    const name = document.getElementById('request-name').value;

    const phone = document.getElementById('request-phone').value;

    const email = document.getElementById('request-email').value;

    validator(name, 'name');

    validator(phone, 'phone');

    validator(email, 'email');

    if (validator(name, 'name') && validator(phone, 'phone') && validator(email, 'email')) {
        document.querySelector('.button--form').classList.add('button--form-sent');
        
        console.log({
            name,
            phone,
            email
        });
    }
};

const validator = (value, type) => {
    const input = document.getElementById(`request-${type}`);

    const checks = {
        name: (val) => !!val,
        phone: (val) => /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(String(val)),
        email: (val) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(val).toLowerCase())
    }

    let result;
    
    if (checks[type](value)) {
        result = true;
    } else {
        input.classList.add('request-form__input--wrong');

        setTimeout(() => {
            input.classList.remove('request-form__input--wrong');
        }, 600);

        result = false;
    }

    return result;
};
