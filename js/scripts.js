/* Table Exercise */

// First capture the form!
var myForm = document.getElementById( 'table-form' );

/**
 * Delete table row element (assuming we click our 'tr > td > button' element.)
 */
function deleteRow( element ) { // Element will be the button we pressed.
    var tableRow = element.parentNode.parentNode; // 2 levels up from our button, to get our row.
    tableRow.parentNode.removeChild( tableRow ); // An element cannot delete itself... so we have to tell the parent to do it for us!
}

// Grab existing buttons.
var allButtons = document.querySelectorAll( 'td > button' );
// Loop through our query selected buttons.
for ( var i = 0; i < allButtons.length; i++ ) {
    // Let's add listeners to these!
    allButtons[i].addEventListener( 'click', function ( event ) {
        deleteRow( this );
    } );
}


// Listen for a form submission...
myForm.addEventListener( 'submit', function ( event ) {
    // Prevent the form from ACTUALLY submitting (would leave or refresh the page, terminating our script.)
    event.preventDefault();

    // Grab your input elements.
    var nameField        = document.querySelector( 'form > label > input' ); // Get first input (name field.)

    // Extract the values.
    var nameValue        = nameField.value;

    // Create new element (table row.)
    var newRow = document.createElement( 'TR' );

    // Create new cell for the row (table data.)
    var nameCell = document.createElement( 'TD' );
    nameCell.textContent = nameValue; // Add our text to the cell.
    newRow.appendChild( nameCell ); // Add our cell to the table row.


    // Create our delete button.
    var deleteButton = document.createElement( 'BUTTON' );
    deleteButton.textContent = 'Delete Row'; // Add some text.
    // These elements are being dynamically added - the event listener we
    // added earlier wouldn't see it! We have to add event listeners as
    // we're MAKING them instead here.
    deleteButton.addEventListener( 'click', function ( event ) {
        deleteRow( this ); // Delete the row!
        // In this case, "this" is the element the EVENT is happening to!
        // Remember objects? We used "this" to refer to itself there too!
    } );
    var actionCell = document.createElement( 'TD' ); // Create the actions cell!
    actionCell.appendChild( deleteButton ); // Add the button inside.
    newRow.appendChild( actionCell ); // Don't forget to add this new cell to the row too!

    // Target your table body.
    var tableBody = document.getElementById( 'table-body' );
    tableBody.appendChild( newRow ); // Inject the brand new row, so the user can see it! Yay!
} );
