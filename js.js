//vanilla js

// function todoList(){
//     var item = document.getElementById("todoInput").value;
//     var text = document.createTextNode(item);
//     var newItem = document.createElement("li");
//     newItem.appendChild(text);
//     document.getElementById("todoList").appendChild(newItem);
//      document.getElementById('todoInput').value = "";
// }


//jquery


var  recrodCount = 0;


function addList(){
    recrodCount +=1;
    var text = $("#todoInput").val();
    $("#todoList").append("<div id='count"+recrodCount+"'><input id='done' onclick='complete("+recrodCount+")' class='btn' type='button' value='Completed'><li id='list"+recrodCount+"' class='list'>"+ text + "<input class='btn' onclick='removeList("+recrodCount+")' type='button' value='delete' id='del'></li></div>");
    $("#todoInput").val("");
}

function removeList(e){
    $("#count" + e).hide();
}

function complete(e){
     $("#list"+ e).css("text-decoration","line-through");
}

$(function(){
    $("#addNew").on("click", addList);

       $('#todoInput').keypress(function(e){
        
        if(e.keyCode==13){
            e.preventDefault();
            recrodCount +=1;
            var text = $("#todoInput").val();
            $("#todoList").append("<div id='count"+recrodCount+"'><input id='done' onclick='complete("+recrodCount+")' class='btn' type='button' value='Completed'><li id='list"+recrodCount+"' class='list'>"+ text + "<input class='btn' onclick='removeList("+recrodCount+")' type='button' value='delete' id='del'></li></div>");
            $("#todoInput").val("");
      }
      
    });
      

    
   
});
