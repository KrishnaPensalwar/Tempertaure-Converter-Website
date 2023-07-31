function convert(){

    let inputtemp1=document.getElementById("inputtemp").value;
    let intype=document.getElementById("intype").value;
    const OutType=document.getElementById("outtype").value;
    var result ;
    let str="Please Add All Fields";

    
    console.log(inputtemp1);
    console.log(intype);
    console.log(OutType);

    
    if(intype==OutType){

        result=inputtemp1; 
    }
    
    
    if(intype=="C" && OutType=="F"){
        // console.log("ef");
        result = (inputtemp1*9/5) + 32;
    }
    if(intype=="C" && OutType=="K"){
        result = parseFloat(inputtemp1) + 273.15;
    }
    if(intype=="F" && OutType=="C"){
        result = (inputtemp1 - 32) * 5/9;
    }
    if(intype=="F" && OutType=="K"){
        result = (parseFloat(inputtemp1) + 459.67) * 5/9;
    }
    if(intype=="K" && OutType=="C"){
        result = parseFloat(inputtemp1) - 273.15;
    }
    if(intype=="K" && OutType=="F"){
        result = parseFloat(inputtemp1) * 9/5 - 459.67;
    }
    if(intype=="/" || OutType=="/"){
        document.getElementById("demo").innerHTML=str;
         
    }else{
    document.getElementById("demo").innerHTML=result;
    }
    

   
    
    
}