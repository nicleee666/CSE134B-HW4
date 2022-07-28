
var poList=[];
//var postWrapper = getElementById("postList");

export function show_add(){
    document.getElementById("add").show();
}



export function add_post(){
    document.getElementById("add").close();
    var tit = document.getElementById("title").value;
    var dat = document.getElementById("date").value;
    var sum = document.getElementById("summ").value;
    const singlePost= tit + ',' + dat +';'+ sum ;
    poList.push(singlePost);

}

export function show_test(){
    document.getElementById("test").innerHTML = poList[0]+poList[1];
}


export function init(listEL) {
        
        for(i = 0; i < poList.length; i++){
            const listItem = document.createElement ('li');
            listItem.appendChild(document.createTextNode(poList[i]));
            listEL.appendChild(listItem);
        }
    
    
    
  }

 

