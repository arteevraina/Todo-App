window.setTimeout(function()
{
	var todos = [];
	var input = prompt("What you want to do?");
	while(input !== "quit")
	{
		if(input === "list")
			displayTodo(todos);
		else if(input === "new")
	        addTodo(todos);
	    else if(input === "delete")
	    	{
	    		deleteTodo(todos);
	    	}
	    input = prompt("What you want to do?");
	}
	console.log("Ok, quit the app");	},500);
	function displayTodo(todos)
	{	
		console.log('************');
		todos.forEach(function(todo,i){
				console.log(i + ": " + todo);
			})
		console.log('************');
	}
	function addTodo(todos)
	{
		
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	   	console.log("Added Todo");
	}
	function deleteTodo(todos)
	{
		var i = Number(prompt("Enter the index you want to delete :"));
		if(i>(todos.length)-1)
			console.log("index does not exists");
		todos.splice(i,1);
	}