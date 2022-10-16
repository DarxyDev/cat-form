const ref = setReferences();
function setReferences() {
    let obj = {};
    obj.input = {};
    obj.input.password = document.getElementById('input-password');
    obj.input.passwordConfirm = document.getElementById('input-confirmPass');
    return obj;
}

function passwordIsConfirmed() {
    return (ref.input.password.value === ref.input.passwordConfirm.value);
}