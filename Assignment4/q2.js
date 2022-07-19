const form =document.querySelector('#form-1').addEventListener('submit',(Event)=>{
    Event.preventDefault();
    const name= document.querySelector('#name').value;
    console.log(name);
    const Email= document.querySelector('#Email').value;
    console.log(Email);
    const Phone= document.querySelector('#Phone').value;
    console.log(Phone);
    let gender='';
    const gender_list= document.getElementsByName('Gender');
    for (let i = 0; i < gender_list.length; i++) {
        if (gender_list[i].checked) {
             gender =gender_list[i].value;
        }
    }
    console.log(gender);
    const address= document.querySelector('#Address').value;
    console.log(address);
    const pincode = document.querySelector('#Pincode').value;
    console.log(pincode);
    const password= document.querySelector('#Password').value;
    console.log(password);
    const confirm_password= document.querySelector('#Confirm_password').value;
    console.log(confirm_password);
    const agree= document.querySelector('#Address');
    let agreement=0;
    if (agree.checked) {
         agreement=1;
    }
    let valid=1;
    let err_text='';
    if (name=='') {
        err_text+='Enter Name<br/>';
        valid=0;
    }
    if (Phone=='') {
        err_text+='Enter Phone Number<br/>';
        valid=0;
    }
    if (Email=='') {
        err_text+='Enter Email<br/>';
        valid=0;
    }
    if (address=='') {
        err_text+='Enter Address<br/>';
        valid=0;
    }
    if (gender=='') {
        err_text+='Select Gender<br/>';
        valid=0;
    }
    if (password!=confirm_password) {
        err_text+='password is not confirmed<br/>'
    }
    if (password==0) {
        err_text+='Enter password<br/>'
    }
    if (confirm_password==0) {
        err_text+='password is not confirmed<br/>'
    }
    if (agreement!=1) {
        err_text+='Agree pls';
        valid=0;
    }
    if (valid==0) {
        document.querySelector('#error_msg').innerHTML=err_text;
        document.querySelector('#error_msg').style.color='#ff0000';
    }
    if (valid==1) {
        document.querySelector('#error_msg').style.display='none';
    }

    
})