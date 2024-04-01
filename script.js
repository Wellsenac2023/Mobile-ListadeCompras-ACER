document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var itemInput = document.getElementById("itemInput");
    var itemName = itemInput.value.trim();
    if (itemName !== "") {
        addItemToTable(itemName);
        itemInput.value = "";
    }
});

function addItemToTable(itemName) {
    var table = document.getElementById("shoppingList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    cell1.appendChild(document.createTextNode(itemName));
    
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Excluir";
    deleteButton.addEventListener("click", function() {
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    });
    
    cell2.appendChild(deleteButton);
}
