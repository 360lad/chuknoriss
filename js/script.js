const randomParagraph = document.querySelector(".random");
// console.log(randomParagraph);
const categoriesParagraph=document.querySelector(".category__jokes");
const listJokes=document.querySelector(".list__jokes");
function randomJoke() {
  const randomUrl = "https://api.chucknorris.io/jokes/random";
  const joke = fetch(randomUrl)
    .then((jok) => jok.json())
    .then((data) => {
      // const jokes=document.createElement("div")
    //   console.log(data);
      randomParagraph.innerHTML = `<h2>${data.value}</h2>`;
    });
  // console.log(joke)



}
randomJoke();




function multipleCategories(){
    const listUrl="https://api.chucknorris.io/jokes/categories"
    const list=fetch(listUrl).then((jok)=>jok.json()).then((data)=>{

        data.map(category=>{
            const jokeLi =  document.createElement("li");
            jokeLi.textContent = category;
            listJokes.append(jokeLi);
        })
      console.log(data)
    })
  }
  multipleCategories()

  function categoryJokes(){
    const categoryUrl="https://api.chucknorris.io/jokes/random?category=dev"
      const category=fetch(categoryUrl).then((jok)=>jok.json()).then((data)=>{
        console.log(data)
        categoriesParagraph.innerHTML=`<h3>${data.value}</h3>`
      })
         
    }
      categoryJokes()

(p=0,p>jokeLi.length)
jokeLi[p].addEventlistener("click",()=>{
   categoriesParagraph.innerHTML=`<h3>${data.value}</h3>`

   })   