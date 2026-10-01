let Str = "My name is Pratik"
let result = ""

    let j = 0;
    for(let i=0;i<Str.length;i++){
        let count = 0;
        if(Str.charAt(i)===" ") continue
        for(let j=0;j<Str.length;j++){
                
    if(Str.charAt(i)===Str.charAt(j) ){
        count++;
    }
}
console.log(Str.charAt(i) + count)
    
    }
    

