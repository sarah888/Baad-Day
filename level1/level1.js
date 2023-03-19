function sleep(milliseconds){
    let sleep = ms => {  
        return new Promise(resolve => setTimeout(resolve, ms));  
        };  
          
        document.write("Begin" + "<br>");  
        document.write("Welcome to the javaTpoint.com" + "<br>");  
          
        sleep(2000).then(() => {  
        document.write("End");  
        });  