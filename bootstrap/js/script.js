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
        if(((nome,cognome,data,email,pwd,confPwd) != ('')) && (pwd === confPwd) && (pwd.lenght()>8)){
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

            if(nome == ''){
                $('#name').addClass('is-invalid');
                setTimeout(()=>{
                    $('#name').removeClass('is-invalid');
                },3000);
            }

            if(cognome == ''){
                $('#last-name').addClass('is-invalid');
                setTimeout(()=>{
                    $('#last-name').removeClass('is-invalid');
                },3000);
            }

            if(data ==''){
                $('#date').addClass('is-invalid');
                setTimeout(()=>{
                    $('#date').removeClass('is-invalid');
                },3000);
            }

            if(email == ''){
                $('#mail').addClass('is-invalid');
                setTimeout(()=>{
                    $('#mail').removeClass('is-invalid');
                },3000);
            }

            if((pwd == '' ) || (pwd.lenght() < 8)){
                $('#pwd').addClass('is-invalid');
                setTimeout(()=>{
                    $('#pwd').removeClass('is-invalid');
                },3000);
            }

            if(confPwd == ''|| (confPwd.lenght() < 8)){
                $('#conf-pwd').addClass('is-invalid');
                setTimeout(()=>{
                    $('#conf-pwd').removeClass('is-invalid');
                },3000);
            }

        }
    });

    $('#signinbutton').on('click',()=>{
        $('.form-custom').toggle();
        $('.form-custom2').toggle();
        if($('#signinbutton').text() == 'Create an account'){
            $('#signinbutton').text("Log In");
        }else{
            $('#signinbutton').text("Create an account"); 
        }
        
    
    });

    $('#forgot-pwd').on('click',()=>{
        $('.form-custom').hide();
        $('.form-custom2').hide();
        $('.form-custom3').show();
        $('#signinbutton').hide();
        $('#backbutton').show();
    });

    $('#forgot-button').on('click',()=>{
        console.log($('#forgot-mail').val());
    });


});