function  setup(){


    loadJSON("http://api.nobelprize.org/v1/prize.json", collectInputData)



    function collectInputData(data){
        println (data);
    }




}