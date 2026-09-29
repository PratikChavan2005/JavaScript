fetch("https").then(data =>data.json
    
).then((data)=>{
console.log(data);
}).catch(()=>{
    console.log("error")
})

Array.isArray(Array.prototype)