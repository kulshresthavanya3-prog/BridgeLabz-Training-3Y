let a=prompt("Enter a number: ");
let grade=null;
if(a>=90 && a<=100){
    grade="A+";
    // console.log("Grade A+");
}
else if(a>=80 && a<90){
    grade="A";
    // console.log("Grade A");
}
else if (a>=70 && a<79){
    grade="B";
    // console.log("Grade B");
}
else if (a>=60 && a<69){
    grade="C";
    // console.log("Grade C");
}
else if (a>=40 && a<59){
    grade="D";
    // console.log("Grade D");
}
else {
    grade="F";
    // console.log("Grade F");
}
console.log("Grade: " + grade);
