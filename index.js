
let search=document.getElementById('btn')
search.addEventListener('click',()=>{
    getupdatedData()
})

const getupdatedData=async()=>{
    let city=document.getElementById('search').value
    let url=`https://api.weatherapi.com/v1/forecast.json?key=31d53c3765db4ade9a2154656230504&q=${city}&days=14`
   const res=await fetch(url)
   const data=await res.json()
   console.log(data)
    
}

const displayweather=(el)=>{
    let container=document.createElement('div')

}