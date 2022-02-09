document.getElementById('login-submit').addEventListener('click',function(){
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
  
    // get user password
    const passFeild = document.getElementById('user-password');
    const userPass = passFeild.value;
    
    if(userEmail == 'sontan@baap.com' && userPass == 'secrethoi'){
        window.location.href = 'mainbangking.html';
    }else{
        alert('Your Email and Password invalid');
    }
})