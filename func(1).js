
const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const b4=document.getElementById("b4");
const b5=document.getElementById("b5");
const b6=document.getElementById("b6");
const b7=document.getElementById("b7");
const b8=document.getElementById("b8");
const b9=document.getElementById("b9");
const b10=document.getElementById("b0")
const b11=document.getElementById("b11")
const b=document.getElementById("b+")
const answer=document.getElementById("ans")
const clear=document.getElementById("clear")
const sqrts=document.getElementById("b10")
//const c1=document.getElementById("c1")
b1.addEventListener("click",no1)
b2.addEventListener("click",no2)
//b10.addEventListener("click",plus)
b11.addEventListener("click",equal)
b3.addEventListener("click",no3)
b4.addEventListener("click",no4)
b5.addEventListener("click",no5);
b6.addEventListener("click",no6);
b7.addEventListener("click",no7);
b8.addEventListener("click",no8);
b9.addEventListener("click",no9)
b10.addEventListener("click",no10)
b.addEventListener("click",plus)
clear.addEventListener("click",clears)
sqrts.addEventListener("click",sqrt)
//c1.addEventListener("click",clearone)
var a=""
var bd=""
var c=0
var co=0
var cle=0;
function no1()
{
    a+='1';
    answer.textContent=a
}
function no2()
{
    a+='2';
    answer.textContent=a
    
}
function no3()
{
    a+='3';
    answer.textContent=a
    
}
function no4()
{
    a+='4';
    answer.textContent=a
}
function no5()
{
    a+='5';
    answer.textContent=a
}
function no6()
{
    a+='6';
    answer.textContent=a
}
function no7()
{
    a+='7';
    answer.textContent=a
}
function no8()
{
    a+='8';
    answer.textContent=a
}
function no9()
{
    a+='9';
    answer.textContent=a
}
function no10()
{
    a+='0';
    answer.textContent=a
}
function plus()
{
    
        a+="+"
        co=co+1
        answer.textContent=a
        if(co>1)
        {
             answer.textContent="more plus please clear"
        }
    

}
function equal()
{
      c=eval(a)
    answer.textContent=c
}
function clears()
{

    window.location.href="calc.html"
}
function sqrt()
{

   let ans= Math.sqrt(Number(a));
    answer.textContent=ans;

}
 