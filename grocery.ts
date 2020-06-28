// SWDV-655 - Week 1 - Grocery Homework - M.J. Carrington

class Grocery {
    name: string;
    quantity: number;

    constructor(name:string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}

/**
 * Print out a single grocery object
 * @param grocery 
 */
function getGrocery(grocery: Grocery) {
    return "Grocery Name :: " + grocery.name + " Grocery Qty :: " + grocery.quantity
}

/**
 * Take a Groceries array and print to a table in HTML
 * @param groceries Array of groceries
 */
function printGroceriesTable(groceries: Grocery[]) {

    var html = "<table border='1|1'>";
    html+="<tr><th COLSPAN='2'><h3>Grocery List</h3></th></tr>"
    html+="<th>Item</th><th>Quantity</th>"
    for (var i = 0; i < groceries.length; i++) {
        html+="<tr>";
        html+="<td>"+groceries[i].name+"</td>";
        html+="<td>"+groceries[i].quantity+"</td>";
        html+="</tr>";
    }

    html+="</table>";

    return html;
}

// Create our Groceries array
let groceries: Grocery[] = [{name: 'bananas', quantity: 1}, {name: 'oranges', quantity: 5}, {name: 'strawberries', quantity: 15}]

// Write to HTML to display our list
document.write(printGroceriesTable(groceries))