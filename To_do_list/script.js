var todoList = [];

// Function to add a new item to the pending list
function addItem() {
  var newItem = document.getElementById("new-item").value;
  if (newItem !== "") {
    var task = {
      name: newItem,
      completed: false,
      timestamp: new Date()
    };
    todoList.push(task);
    document.getElementById("new-item").value = "";
    updateLists();
  }
}

// Function to toggle the completed status of a task
function toggleItem(index) {
  todoList[index].completed = !todoList[index].completed;
  updateLists();
}

// Function to delete a task from the list
function deleteItem(index) {
  todoList.splice(index, 1);
  updateLists();
}

// Function to update the lists on the page
function updateLists() {
  var pendingItems = document.getElementById("pending-items");
  var completedItems = document.getElementById("completed-items");
  
  // Clear the lists
  pendingItems.innerHTML = "";
  completedItems.innerHTML = "";
  
  // Update the pending and completed lists
  for (var i = 0; i < todoList.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = todoList[i].name;
    li.onclick = (function(index) {
      return function() {
        toggleItem(index);
      };
    })(i);
    
    if (todoList[i].completed) {
      li.classList.add("completed");
      completedItems.appendChild(li);
    } else {
      pendingItems.appendChild(li);
    }
    
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = (function(index) {
      return function() {
        deleteItem(index);
      };
    })(i);
    li.appendChild(deleteButton);
  }
}
