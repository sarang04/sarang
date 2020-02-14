

let obj = [                             //for rendering the objects as per user wants
    {
        firstname: "Rahul",
        lastname: "Verma"
    },
    {
        firstname: "Vikas",
        lastname: "Jadon"
    },
    {
        firstname: "Omendra",
        lastname: "Pratap"
    },
    {
        firstname: "Nitranjan",
        lastname: "Gandhi"
    },
    {
        firstname: "Chirag",
        lastname: "Jain"
    },
    {
        firstname: "Pradeep",
        lastname: "Sutariya"
    },
    {
        firstname: "Vamil",
        lastname: "Joshi"
    },
    {
        firstname: "Deepika",
        lastname: "Padukone"
    },
    {
        firstname: "Pooja",
        lastname: "Sharma"
    },
    {
        firstname: "Dhiraj",
        lastname: "Suthar"
    },
]

function add_static() {                                 //logic for rendering objects via add_static
    for (i = 0; i < obj.length; i++) {
        let new_name = obj[i].firstname;
        let new_last = obj[i].lastname;

        let table = document.getElementById("data_table");
        let table_len = (table.rows.length) - 0;
        let row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='last_row" + table_len + "'>" + new_last + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Update' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

        document.getElementById("new_name").value = "";
        document.getElementById("new_last").value = "";

    }

}

// Functionality for edit row button    

function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "inline";

    let name = document.getElementById("name_row" + no);
    let last = document.getElementById("last_row" + no);

    let name_data = name.innerHTML;
    let last_data = last.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    last.innerHTML = "<input type='text' id='last_text" + no + "' value='" + last_data + "'>";
}

//update button

function save_row(no) {
    let name_val = document.getElementById("name_text" + no).value;
    let last_val = document.getElementById("last_text" + no).value;

    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("last_row" + no).innerHTML = last_val;

    document.getElementById("edit_button" + no).style.display = "inline";
    document.getElementById("save_button" + no).style.display = "none";
}

// delete button

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

//add row button       
function add_row() {
    let new_name = document.getElementById("new_name").value;
    let new_last = document.getElementById("new_last").value;

    let table = document.getElementById("data_table");
    let table_len = (table.rows.length) - 0;
    let row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='last_row" + table_len + "'>" + new_last + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Update' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_name").value = "";
    document.getElementById("new_last").value = "";
}


