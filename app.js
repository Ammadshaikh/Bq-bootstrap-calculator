function get_num(num){
    //console.log(result)    
    //console.log(num);
    document.getElementById("result").value += num 
    
    }
    
    function clear_result(){
        document.getElementById("result").value = "" 
    
    }
    
    function getResult(){
        document.getElementById("result").value = eval(document.getElementById("result").value)
    }
    function clear_num(){
        var result =document.getElementById("result").value
        document.getElementById("result").value = document.getElementById("result").value.slice(0,result.length-1);
    }