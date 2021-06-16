/*const filterInput =document.getElementById('filterInput').addEventListener('keyup',filterName);

function filterName(){
    //console.log(100);
    let filterValue=document.getElementById('filterInput').value.toUpperCase();
    //console.log(filterValue);
    //get names ul
    const ul=document.getElementById('names');

    //get collection-items
    const li=ul.querySelectorAll('li.collection-item');

    //loop through collection-items lis
    for(let i=0;i<li.length;i++){
        let a=li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue)> -1){
         a.style.display='';
        }
        else{
            a.style.display='none';

        }

    }


}
const filterInput=document.getElementById('filterInput').addEventListener('keyup',filterName);

function filterName(){
    const filterValue=document.getElementById('filterInput').value.toUpperCase();
   // console.log(filterValue);
   const ul=document.getElementById('names');
   const li=ul.querySelectorAll('li.collection-item');

   for(let i=0;i<li.length;i++){
      let a=li[i].getElementsByTagName('a')[0];
   
   if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
       a.style.display='';
   }
   else{
       a.style.display='none';
   }
}
}*/
