'use strict';
(function () {
    const hamburgerEl = document.querySelector('.hamburger-button');
	const menuEl = document.querySelector('.menu');

	// hamburgerEl.addEventListener('click', function () {
		hamburgerEl.addEventListener("click", () => {
		menuEl.classList.toggle('shown');
	});

  const dialog = document.getElementById('subscribeDialog');
  const form = document.getElementById('subscribeForm');
  const subscribeBtns = document.querySelectorAll('.subscribe');
  
  // 打开对话框
  subscribeBtns.forEach(btn => {
    btn.addEventListener('click', () => dialog.showModal());
  });

  // 表单验证
  function validateEmail(email) {
    return email.includes('@');
  }  //这段代码是用来验证邮箱字段是否包含 @ 符号的一个辅助函数，放在开头是为了在其他地方调用时方便。

  function validateConfirmEmail(confirmEmail, email) {
    return confirmEmail === email;
  }  //这段代码是用来验证邮箱字段是否匹配的一个辅助函数，放在开头是为了在其他地方调用时方便。

 // 验证 email 字段
  function validateEmailField() {
    const email = document.getElementById('email').value.trim();
    const emailErrorSpan = document.querySelector('.email-error');
    
    if (email === '') {
      emailErrorSpan.textContent = 'This field is required';
    } else if (!validateEmail(email)) {
      emailErrorSpan.textContent = 'This field be a valid email address including a @';
    } else {
      emailErrorSpan.textContent = '';
    }
  }

  // 验证 confirm 字段
  function validateConfirmField() {
    const confirmEmail = document.getElementById('confirm').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmErrorSpan = document.querySelector('.confirm-error');
    
    if (!validateConfirmEmail(confirmEmail, email)) {
      confirmErrorSpan.textContent = 'This field must match the provided email address';
    } else {
      confirmErrorSpan.textContent = '';
    }
  }

  // 监听 change 事件，进行实时验证
  form.addEventListener('change', (event) => {
    if (event.target.id === 'email') {
      validateEmailField();
    } else if (event.target.id === 'confirm') {
      validateConfirmField();
    }
  });

  // 监听表单提交，进行最终验证
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // 防止表单提交，先进行验证

    // 调用验证函数
    validateEmailField();
    validateConfirmField();

    // 如果没有错误信息，提交表单
    if (!document.querySelector('.email-error').textContent && !document.querySelector('.confirm-error').textContent) {
      form.submit(); // 通过验证，提交表单
    }
  });

  // 关闭对话框
  document.querySelector('.cancel').addEventListener('click', () => {
    dialog.close();
  });
})();