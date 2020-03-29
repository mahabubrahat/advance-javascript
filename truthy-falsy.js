//falsy{0, null, undefined, "", NaN,  }
//truthy{" ","false", {}, [], "0"}
let num = 0;
if(num || num == 0){
    console.log("This is true");
}
else{
    console.log("This is false");
}