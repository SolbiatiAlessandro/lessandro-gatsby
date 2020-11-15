var body = document.body || document.getElementsByTagName("body")[0];
["body1", "body2", "body3"].map(
  function(id){
	var existing = document.getElementById(id);
	console.log(existing);
	if (existing === null){
	  console.log("adding body");
	  var div = document.createElement("div");
	  div.setAttribute("id", id);
	  div.setAttribute("style", "height:90px; width:90px; border-radius:50%; position: absolute; background-color:grey;opacity:0.2;");
	  body.appendChild(div);
    }
  }
)