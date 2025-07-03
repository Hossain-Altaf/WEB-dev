let age= prompt("enter age: ")
age=Number.parseInt(age)

const canDrive=(age)=>{
    return age>=18 ? true:false
}

if(canDrive(age)){
    alert("you can drive")
}
else{
    alert("you can't")
}