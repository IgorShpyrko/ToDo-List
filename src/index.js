document.addEventListener("DOMContentLoaded", ready);

function ready() {

	var input = document.createElement("input");
	input.placeholder = "Enter A ToDo";

	document.body.appendChild(input);

	function createButton(name, className) {

		let button = document.createElement("button");
		
		button.innerHTML = name;
		button.className = className;
		document.body.appendChild(button);
	}

	createButton("Add ToDo", "add-btn");
	createButton("Delete ToDo", "del-btn");
	
	var buttonAdd = document.querySelector('.add-btn');
	buttonAdd.addEventListener("click", createToDo);

	var buttonDel = document.querySelector('.del-btn');
	buttonDel.addEventListener("click", deleteToDo);

	var wrapper = document.createElement("div");

	document.body.appendChild(wrapper);

	function createToDo() {
		var todo;

		if (input.value === "") {
			todo = "empty ToDo";
		} else {
			todo = input.value;
			input.value = "";
		}
		var label = document.createElement("label");
		label.innerHTML = "<input type='checkbox'>" + todo + "</input></br>";

		wrapper.appendChild(label);
	}

	function deleteToDo() {
		var labels = wrapper.querySelectorAll('label');

		for (var i = 0; i < labels.length; i++) {
			if (labels[i].children[0].checked == true) {
				labels[i].remove();
			};
		}
	}
}