var index = 0; 
let list1 = document.getElementById('doggo-list'); 
function fetch() 
{ 
    console.log("hello") 
    var request=new XMLHttpRequest(); 
    request.open('get','https://api.thedogapi.com/v1/breeds'); 
    request.send(); 
     request.onload=function(){ 
        var arr = JSON.parse(request.response); 
       for(let i=0;i<10;i++) 
       { 
          let res = `<li src="${arr[i+index].image.url}"></li>`; 
          var str=arr[i+index].temperament;
          const appending_data = ` 
         <li class="container-box">
     <div class="cardBx">
         <div class="imgBx">
             <img src="${arr[i+index].image.url}"/>
         </div>
         <div class="contentBx">
             <h2>Breed Name : ${arr[i+index].name} </h2>
             <h3>Life Span: ${arr[i+index].life_span} </h3>
             <p>Nature : ${str.substring(0,str.indexOf(','))} </p>
         </div>
     </div>
 </li>`
 list1.insertAdjacentHTML('afterbegin', appending_data);
 //console.log(htmlCardData)
       } 
       index++;
     } 
   
  var bttttn = document.getElementById('content-shower');
  bttttn.style.display="block";
} 
document.getElementById("button").addEventListener("click", fetch);