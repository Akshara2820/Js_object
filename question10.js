var dic={}
for (i=1; i<=5; i++){
    const input=require("readline-sync");
    const n=input.question("enter the name: ")
    const num=input.question("enter the marks: ")
    dic[n]=num
}console.log(dic)