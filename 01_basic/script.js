
const data = [
    {
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },
    { name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"},
    { name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"},
    { name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"}
        ,
        {
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },{
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },{
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },{
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },{
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },{
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },{
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },{
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },{
        name  : "pratik",
        city  : "pune" ,
        email : "pratik@chavan"

    },
]

function createTable(){
    let table=document.createElement("table")
    let tr1 = document.createElement("tr")

    let th1 = document.createElement("th")
    let th2= document.createElement("th")
     let th3 = document.createElement("th")

     

     th1.innerText="name"
     th2.innerText="city"
     th3.innerText="email"
     
     tr1.appendChild(th1)
     tr1.appendChild(th2)
     tr1.appendChild(th3)

      table.appendChild(tr1)
      table.width="800px"
        table.frame="box"
        table.style.margin="auto"
        tr1.style.background="black"
        tr1.style.color="white"
        table.style.color="black"
        table.style.alignItems= "center"
        table.rules="all"
        table.cellPadding="10px"


        for(let value of data){
            let tr = document.createElement("tr")

            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")

            td1.innerText= value.name
             td2.innerText=value.city
            td3.innerText=value.email

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)

            table.appendChild(tr)
        }
    

     let bodyref = document.getElementsByTagName("body")

     bodyref[0].appendChild(table)

    
}