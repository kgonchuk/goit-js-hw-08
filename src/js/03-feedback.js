import throttle from "lodash.throttle";

// ------------------------FIRST VARIANT-------------------

// const LOCAL_KEY = "feedback-form-state";

// const formEl = document.querySelector(".feedback-form");
// const input = document.querySelector(".feedback-form input");
// const textarea = document.querySelector(".feedback-form textarea");

// formEl.addEventListener('input', throttle(onInput, 500));
// formEl.addEventListener('submit', onSubmit );
// popularInputSubmit();

// function onInput(evt){
//     dataEl = {email: input.value.trim(), 
//         message:  textarea.value.trim() };
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(dataEl))
// }
// function onSubmit(evt){
//     evt.preventDefault();
//     if(textarea.value === "" || input.value === ""){
//         return alert(`Please,  fill all fields`)
//     }
//     console.log({email: input.value, message: textarea.value })
//     localStorage.removeItem(LOCAL_KEY);
//     evt.currentTarget.reset()
// }

// function popularInputSubmit(){
//     let messageSaved = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {}
//     if (messageSaved) {
//             let { email, message } = formEl.elements;
//             email.value = messageSaved.email || '';
//             message.value = messageSaved.message || '';
//           }
//         }



const formEl = document.querySelector(".feedback-form");

formEl.addEventListener('input', onInputForm);
formEl.addEventListener('submit', onSubmitForm);
const LOCA_KEY = "feedback-form-state";
const { email, message } = formEl.elements;

function onInputForm(evt){    
dataValue = {email: email.value, message: message.value };
localStorage.setItem(LOCA_KEY, JSON.stringify(dataValue))
}
function onSubmitForm(evt){
    evt.preventDefault();
    if(email.value === "" || message.value === ""){
        return alert (`Please, fill all fields!`)
    }
    console.log({email: email.value, message: message.value});
    localStorage.removeItem(LOCA_KEY);
    evt.currentTarget.reset()
}
function popularInputSubmit(evt){
    let data = JSON.parse(localStorage.getItem(LOCA_KEY));
    if(data){
        let {email, message} = formEl.elements;
        email.value = data.email || "";
        message.value = data.message || "";
    }
}