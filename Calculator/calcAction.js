const numbers=document.getElementsByClassName('number');
let h2tag=document.querySelector('h2');
let h4tag=document.querySelector('h4');
const reset=document.getElementsByClassName('reset');
const del=document.getElementsByClassName('delete');
const operatorbutton=document.getElementsByClassName('operator');
const equal=document.getElementsByClassName('equals');
let string1="" ;
let string2="";
let integer1,integer2;
let op1;
let op;
h2tag.innerText="";
h4tag.innerText="";
for(let i=0;i<numbers.length;i++)
{
numbers[i].addEventListener('click',()=>{
   h2tag.innerText +=numbers[i].value;
})
}
reset[0].addEventListener('click',()=>{
   h2tag.innerText="";
   h4tag.innerText="";
})
del[0].addEventListener('click',()=>{
   h2tag.innerText=h2tag.innerText.slice(0,h2tag.innerText.length-1);
   
})

for(let i=0;i<operatorbutton.length;i++)
{
   operatorbutton[i].addEventListener('click',()=>{
      if(h4tag.innerText=="")
   {
      h4tag.innerText=h2tag.innerText+operatorbutton[i].value;
      op=operatorbutton[i].value;
      h2tag.innerText="";
   }
      else{
         op1=operatorbutton[i].value;
         op=h4tag.innerText[h4tag.innerText.length-1];
         string1="";
   string2="";
   for(let i=0;i<h4tag.innerText.length;i++)
   {
      if(h4tag.innerText[i]!=op)
      string1+=h4tag.innerText[i];
   }
   integer1=parseInt(string1);
   string2=h2tag.innerText;
   integer2=parseInt(string2);
   if(op=='+')
   h4tag.innerText=integer1+integer2;
   else if(op=='-')
   h4tag.innerText=integer1-integer2;
   else if(op=='*')
   h4tag.innerText=integer1*integer2;
   else 
   h4tag.innerText=integer1/integer2;
   h2tag.innerText="";
   h4tag.innerText+=op1;
      }
   })
}
equal[0].addEventListener('click',()=>{
   if(h4tag.innerText=="")
   {
      let number=h2tag.innerText;
      h2tag.innerText=number;
   }
   else{
   string1="";
   string2="";
   op=h4tag.innerText[h4tag.innerText.length-1];
   for(let i=0;i<h4tag.innerText.length;i++)
   {
      if(h4tag.innerText[i]!=op)
      string1+=h4tag.innerText[i];
   }
   integer1=parseInt(string1);
   string2=h2tag.innerText;
   integer2=parseInt(string2);
   if(op=='+')
   h2tag.innerText=integer1+integer2;
   else if(op=='-')
   h2tag.innerText=integer1-integer2;
   else if(op=='*')
   h2tag.innerText=integer1*integer2;
   else 
   h2tag.innerText=integer1/integer2;
   h4tag.innerText="";
   }
})
