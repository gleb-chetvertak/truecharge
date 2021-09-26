"use strict";

var closeBurgerMenu = function closeBurgerMenu() {
  document.querySelector('.header').classList.remove('header--open');
};

var openBurgerMenu = function openBurgerMenu() {
  document.querySelector('.header').classList.add('header--open');
};

var sendRequest = function sendRequest() {
  var name = document.getElementById('request-name').value;
  var phone = document.getElementById('request-phone').value;
  var email = document.getElementById('request-email').value;
  validator(name, 'name');
  validator(phone, 'phone');
  validator(email, 'email');

  if (validator(name, 'name') && validator(phone, 'phone') && validator(email, 'email')) {
    document.querySelector('.button--form').classList.add('button--form-sent');
    console.log({
      name: name,
      phone: phone,
      email: email
    });
  }
};

var validator = function validator(value, type) {
  var input = document.getElementById("request-".concat(type));
  var checks = {
    name: function name(val) {
      return !!val;
    },
    phone: function phone(val) {
      return /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(String(val));
    },
    email: function email(val) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(val).toLowerCase());
    }
  };
  var result;

  if (checks[type](value)) {
    result = true;
  } else {
    input.classList.add('request-form__input--wrong');
    setTimeout(function () {
      input.classList.remove('request-form__input--wrong');
    }, 600);
    result = false;
  }

  return result;
};
//# sourceMappingURL=main.js.map
