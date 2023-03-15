const btn=document.querySelector("#btn");
const inp=document.querySelector("#recipe");
const res=document.querySelector(".result");
const url="https://www.themealdb.com/api/json/v1/1/search.php?s=";
let callfunc=()=>{
   let val=document.querySelector("#recipe").value;
   console.log(val);
   fetch(url+`${val}`).then((response)=>response.json()).then((e)=>{
      console.log(e)
      let mymeal=e.meals[0];
      console.log(mymeal.strMealThumb);
        let myarray=[];
        let count=1;
        let measure=0;
        for(let i in mymeal)
                  {
                     if(i.startsWith("strIngredient")&&mymeal[i]!=='')
                     {
                        measure=mymeal[`strMeasure`+count];
                        count+=1;
                        myarray.push(`${measure} ${mymeal[i]}`);
                     }
                  }
                  console.log(myarray);
                   console.log(mymeal.strInstructions);
             res.innerHTML=`<img src="${mymeal.strMealThumb}" id="foodimg">
             <div class="text">
               <h2>${mymeal.strMeal}</h2>
               <h4>${mymeal.strArea}</h4>
               </div>
                <button id="btn1">View Recipe</button>
               <div class="buttonid">
                 <div class="instr">
               ${mymeal.strInstructions}
               </div>
               </div>`
               let list1=document.createElement("div");
               list1.classList.add("ul");
               for(let i of myarray)
               {
                  let list2=document.createElement("li");
                  list2.textContent=i;
                  list1.appendChild(list2);
               }
               res.appendChild(list1);
               const y=document.querySelector("#btn1");
               console.log(y);
               y.addEventListener("click",()=>{
                  const buttonid=document.querySelector(".buttonid");
                  buttonid.style.display='block';
                  y.style.display='none';
               })

inp.value='';
         });
}
btn.addEventListener("click",()=>{
   callfunc();
});