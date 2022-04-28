let user=
        {   name:"manish",age:21
            
        }
        let admin =
        {
            name:"admin"
        }
        console.log(admin.street? "asd":null);
        admin.name = "anme2";
        user.printhello = printhello;
        admin.printhello = printhello;
       
        function printhello()
            {
                console.log('hello ' + admin.age);
            }
        function Main() 
        {

            admin.printhello();
            user.printhello();
        }
        Main();