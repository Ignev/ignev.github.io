const birthdayDay = +prompt("Day of Birth",);
const birthdayMonth = +prompt("Month of Birth",);
const birthdayYear = +prompt("Year of Birth",);
let now = new Date();
function getAge(){
    let age = now.getFullYear() - birthdayYear;
    if(birthdayMonth < now.getMonth()){
        age++;
    }
    else if (birthdayMonth == now.getMonth()){
        if(now.getDate() < birthdayDay || now.getDate() == birthdayDay){
            age++;
        }
        else if(now.getDate() > birthdayDay){
            age--;
        }
    }
    else{
        age--;
    }
    return age;
}

console.log(getAge());