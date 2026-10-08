const form = document.getElementById('registerForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', function(e){
    // 阻止页面刷新
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const pwd = document.getElementById('pwd').value;
    const repwd = document.getElementById('repwd').value;
    const email = document.getElementById('email').value.trim();

    if(!username || !pwd || !repwd || !email){
        msg.textContent = "所有项不能为空";
        msg.style.color="red";
        return;
    }
    if(pwd !== repwd){
        msg.textContent = "两次密码不一致";
        msg.style.color="red";
        return;
    }
    msg.textContent = "注册成功！";
    msg.style.color="green";
})
