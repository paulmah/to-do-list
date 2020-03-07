/* Javascript To-Do Exercise */

// First capture the form!
var myForm = document.getElementById( 'table-form' );

/**
 * Delete table row element (assuming we click our 'tr > td > button' element.)
 */
function deleteRow( element ) { // Element will be the button we pressed.
    var tableRow = element.parentNode.parentNode; // 2 levels up from our button, to get our row.
    tableRow.parentNode.removeChild( tableRow ); // An element cannot delete itself... so we have to tell the parent to do it for us!
}

// // Grab existing buttons.
// var allButtons = document.querySelectorAll( 'td > button' );
// // Loop through our query selected buttons.
// for ( var i = 0; i < allButtons.length; i++ ) {
//     // Let's add listeners to these!
//     allButtons[i].addEventListener( 'click', function ( event ) {
//         deleteRow( this );
//     } );
// }


// Listen for a form submission...
myForm.addEventListener( 'submit', function ( event ) {
    // Prevent the form from ACTUALLY submitting (would leave or refresh the page, terminating our script.)
    event.preventDefault();

    // Grab your input elements.
    var taskField        = document.querySelector( 'form > label > input' );

    // Extract the values.
    var taskValue        = taskField.value;

    // Create new element (table row.)
    var newRow = document.createElement( 'TR' );

    // Create new cell for the row (table data.)
    var taskCell = document.createElement( 'TD' );
    taskCell.textContent = taskValue; // Add our text to the cell.
    newRow.appendChild( taskCell ); // Add our cell to the table row.


   
   
    // // Create our delete button on the Second data list.
    // var deleteButton = document.createElement( 'BUTTON' );
    // deleteButton.textContent = 'Delete Row'; // Add some text.

    // deleteButton.addEventListener( 'click', function ( event ) {
    //     deleteRow( this ); // Delete the row!
    // } );


    var actionCell = document.createElement( 'TD' ); // Create the actions cell!
    actionCell.appendChild( deleteButton ); // Add the button inside.
    newRow.appendChild( actionCell ); // Don't forget to add this new cell to the row too!

    // Target your table body.
    var tableBody = document.getElementById( 'table-body' );
    tableBody.appendChild( newRow ); // Inject the brand new row, so the user can see it! Yay!
} );
