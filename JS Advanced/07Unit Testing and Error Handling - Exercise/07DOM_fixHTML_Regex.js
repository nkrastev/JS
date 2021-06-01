function validate() {

    //adding type='button' prop to BUTTON in HTML, preventing page from reload!!!
    document.querySelector("#submit").type = "button";


    const submitBtn=document.getElementById('submit');
    const isCompanyCheckbox=document.getElementById("company");
    

    submitBtn.addEventListener('click', onFormSubmission);
    isCompanyCheckbox.addEventListener('change', onCheckboxChange);
    isEverythingValid=true;

    function onFormSubmission(event) {
        
        
        const username=document.getElementById('username').value; 
        const password=document.getElementById('password').value; 
        const confirmPassword=document.getElementById('confirm-password').value; 
        const email=document.getElementById('email').value; 
        const companyNumber=document.getElementById('companyNumber').value; 

        isEverythingValid=true;
        validateUsername(username);
        validatePasswords(password, confirmPassword);
        validateEmail(email);
        validateCompany(Number(companyNumber));
        
        if (isEverythingValid==true) {
            document.getElementById('valid').style.display='block';
        }else{
            document.getElementById('valid').style.display='none';
        }
        
    }

    function validateCompany(value) {
        //first check if div is visible and checkbox is checked
        if (isCompanyCheckbox.checked==true) {
            //TODO can the number be float?
            if (Number.isInteger(value) && value>=1000 && value <=9999) {
                document.getElementById('companyNumber').style.borderColor='';                           
            }else{
                document.getElementById('companyNumber').style.borderColor = "red"; 
                isEverythingValid=false;
            }
        }
    }

    function onCheckboxChange(event) {
        if (event.target.checked == true) {
            document.getElementById('companyInfo').style.display='block';
        }else{
            document.getElementById('companyInfo').style.display='none';
        }
    }

    function validateEmail(value) {
        const regexEmail = new RegExp(/^[^@.]+@[^@]*\.[^@]*$/);        
        if (!regexEmail.test(value)) {
            document.getElementById('email').style.borderColor = "red";
            isEverythingValid=false;            
        }else{
            document.getElementById('email').style.borderColor='';            
        }
    }

    function validatePasswords(password, confirmation) {
        const regexPassword = new RegExp('^[0-9a-zA-Z_]{5,15}$');
        //validation first pass
        if (!regexPassword.test(password)) {
            document.getElementById('password').style.borderColor = "red"; 
            isEverythingValid=false;           
        }else{
            document.getElementById('password').style.borderColor='';            
        }
        //validation second
        if (!regexPassword.test(confirmation)) {
            document.getElementById('confirm-password').style.borderColor = "red";
            isEverythingValid=false;            
        }else{
            document.getElementById('confirm-password').style.borderColor='';            
        }
        //validation if match
        if (password!=confirmation) {
            document.getElementById('password').style.borderColor = "red";
            document.getElementById('confirm-password').style.borderColor = "red"; 
            isEverythingValid=false;
            console.log('DONT MATCH');
        }

    }

    function validateUsername(value) {
        const regexUsername = new RegExp('^[0-9a-zA-Z]{3,20}$');        
        if (!regexUsername.test(value)) {
            document.getElementById('username').style.borderColor = "red"; 
            isEverythingValid=false;           
        }else{
            document.getElementById('username').style.borderColor='';            
        }
    }
}
