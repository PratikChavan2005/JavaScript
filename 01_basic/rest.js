const string = "pratik chavana"
let j=0;
 let rev2=""
for(let i = 0; i<string.length;i++){
    if(string[i]==" "){
        let len=j-i+1;
        let reve = string.substring(0,i).split("").reverse().join("")
        console.log(reve)
        rev2=string.substring(i,string.length).split("").reverse().join("")
        
    }
    
    

  
}
console.log(rev2)



