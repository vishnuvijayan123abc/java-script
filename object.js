var student={
    id:525,
    name:"vishnu",
    course:"django"
}

console.log(student.name);
console.log(student["name"]);


student["email"]="vishnu@gmail.com"

console.log(student);

console.log("name" in student);
console.log("contact" in student);