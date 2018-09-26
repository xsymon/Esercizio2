$(document).ready(()=>{
    let $userInput = $('#userInput');
    let $pwdInput = $('#pwdInput');
    $('#login-button').on('click', ()=>{
        let username = $userInput.val().toLowerCase();
        let pwd = $pwdInput.val().toLowerCase();

        //User control
        if((username != 'admin') || (pwd != 'admin')){
            $('#alert-box').slideDown();
            setTimeout(()=>{
                $('#alert-box').slideUp();
            },3000);
        }else{
            $('#success-box').slideDown();
            setTimeout(()=>{
                $('#success-box').slideUp();
            },3000);
        }
    });

    $('#reg-button').on('click', ()=>{
        let nome = $('#name').val();
        let cognome = $('#last-name').val();
        let data = $('#date').val();
        let email = $('#mail').val();
        let pwd = $('#pwd').val();
        let confPwd = $('#conf-pwd').val();
        if(((nome,cognome,data,email,pwd,confPwd) != ('')) && (pwd === confPwd)){
            console.log(nome+' '+cognome+' '+data+' '+email+' '+pwd);
            $('#success-box').slideDown();
            setTimeout(()=>{
                $('#success-box').slideUp();
            },3000);
        }else{
            $('#alert-box').slideDown();
            setTimeout(()=>{
                $('#alert-box').slideUp();
            },3000);
        }
    });

});