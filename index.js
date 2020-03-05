/*
*@name: Coworking Web App
*@Course Code:SODV1201
*@class: Software Development Diploma Program.
*@author: Andre Albuquerque.
*/

///// Properties

let adminPassword = 0;
//localStorage.clear(); // Used to clear the storage if desired

///// Users

function register(){

    let x = document.getElementById("userNameBox").value;
    let y = document.getElementById("passwordBox").value;
    let z = document.getElementById("ownerorcoworker").value;
    let a = document.getElementById("emailBox").value;
    let b = document.getElementById("phoneBox").value;

    if (!localStorage.getItem("User")){

        let users = [{user: "andre", password: "qwerty", owner: "1", email: "a.azevedo810@mybvc.ca", phone: "0123456789"}];

        var tempUser = {user: x, password: y, owner: z, email: a, phone: b};

        users.push(tempUser);
    
        // Store
        localStorage.setItem("User", JSON.stringify(users));

        console.log(users);
        alert("User " + x + " created successfully.");
        
    } else {

        let users = JSON.parse(localStorage.getItem("User"));
        
        var tempUser = {user: x, password: y, owner: z, email: a, phone: b};

        users.push(tempUser);
        
        // Store
        localStorage.setItem("User", JSON.stringify(users));
       
        console.log(users);
        alert("User " + x + " created successfully.");
    }
}

function login(){

    if (!localStorage.getItem("User")){

        let users = [{user: "andre", password: "qwerty", owner: "1"}];

        // Store
        localStorage.setItem("User", JSON.stringify(users));
        
        console.log("Created the user storage.");

        var tempUsers2 = localStorage.getItem("User");
        let tempUsers = JSON.parse(tempUsers2);
   
        console.log(tempUsers);

        let x = document.getElementById("userNameBox2").value;
        let y = document.getElementById("passwordBox2").value;
    
    for (var i = 0; i < tempUsers.length; i++){
        
        if (x == tempUsers[i].user && y == tempUsers[i].password){
            console.log("Got here!");
            if (tempUsers[i].owner == "1"){
            let z = "1";
            localStorage.setItem("loggedin", JSON.stringify(z));
            }
            else { 
            let z = "0"; 
            localStorage.setItem("loggedin", JSON.stringify(z)); 
            }

            alert("Log is successful! Welcome " + tempUsers[i].user + "!");
            document.getElementById("logout").innerHTML = "Log-Out";
            document.getElementById("logform").innerHTML = '<form><button onclick="logout()">Log Out</button></form>';
            
            }
        }
    }
    else{
    var tempUsers2 = localStorage.getItem("User");
    let tempUsers = JSON.parse(tempUsers2);
   
    console.log(tempUsers);
    
    let x = document.getElementById("userNameBox2").value;
    let y = document.getElementById("passwordBox2").value;
    
    for (var i = 0; i < tempUsers.length; i++){
        
        if (x == tempUsers[i].user && y == tempUsers[i].password){
            
            if (tempUsers[i].owner == "1"){
            let z = "1";
            localStorage.setItem("loggedin", JSON.stringify(z));
            }
            else { 
            let z = "0"; 
            localStorage.setItem("loggedin", JSON.stringify(z)); 
            }

            alert("Log is successful! Welcome " + tempUsers[i].user + "!");
            document.getElementById("logout").innerHTML = "Log-Out";
            document.getElementById("logform").innerHTML = '<form><button onclick="logout()">Log Out</button></form>';
            
            }
        }
    }
}

function logout (){
    localStorage.removeItem("loggedin");
    alert("Logged out successfully.");
}

function checkIndex2(){
    if (localStorage.getItem("loggedin")){
    document.getElementById("logform").innerHTML = '<form><button onclick="logout()">Log Out</button></form>';
    }
}

if (localStorage.getItem("loggedin")){
    
    document.getElementById("logout").innerHTML = "Log-Out";
        
}

// Access to "Manage Properties" page only if logged id as an owner

function checkForOwner(){

    if (localStorage.getItem("loggedin")){

    var x2 = localStorage.getItem("loggedin");
    var x = JSON.parse(x2);

        if (x == "1"){

        }
        else {
            alert("Please log in as an owner to access this page.");
            location.replace("indexhome.html");
        }
    }
    else {
        alert("Please log in as an owner to access this page.");
        location.replace("indexhome.html");
    }
}

/////// Properties

/////// List Properties

function listProperties(){
    
    if (!localStorage.getItem("Properties")){
        let properties = [
            {name: "Tall Offices", location: "Calgary", rooms: 67, address: "100 Merriot Way", neighborhood: "North", squarefeet: 22000, garage: "Yes", publictransport: "No"},
            {name: "Core Mall", location: "Calgary", rooms: 6, address: "250 Nose Hill Drive", neighborhood: "Nose Hill", squarefeet: 2000, garage: "Yes", publictransport: "Yes"},
            {name: "Chinook Cowork", location: "Calgary", rooms: 56, address: "76 Silver Blvd", neighborhood: "Tuscany", squarefeet: 18000, garage: "No", publictransport: "Yes"},
            {name: "West-End Offices", location: "Vancouver", rooms: 34, address: "10 Springfield Road", neighborhood: "Mount Royal", squarefeet: 5000, garage: "No", publictransport: "Yes"},
            {name: "Vancowork", location: "Vancouver", rooms: 14, address: "90 Morefoot Way", neighborhood: "Citadel", squarefeet: 2500, garage: "Yes", publictransport: "No"},
            {name: "Downtown Tall", location: "Vancouver", rooms: 23, address: "8967 Main Drive", neighborhood: "Summit", squarefeet: 3100, garage: "No", publictransport: "No"},
            {name: "Northern Alberta Offices", location: "Edmonton", rooms: 12, address: "520 Edenbold Way", neighborhood: "Royal Oak", squarefeet: 1500, garage: "Yes", publictransport: "Yes"},
            {name: "Edmonton Oilery", location: "Edmonton", rooms: 35, address: "9000 Country Hills Blvd", neighborhood: "Summerset", squarefeet: 12000, garage: "Yes", publictransport: "No"},
            {name: "555 Building", location: "Edmonton", rooms: 43, address: "1000 Stoney Trail", neighborhood: "Auburn Bay", squarefeet: 14000, garage: "No", publictransport: "Yes"},
            {name: "Plus 16", location: "Lethbridge", rooms: 21, address: "235 Hidden Valley Dr", neighborhood: "Downtown", squarefeet: 5600, garage: "No", publictransport: "Yes"},
            {name: "Southern Alberta Tech Institute", location: "Lethbridge", rooms: 23, address: "18 Tuscany Drive", neighborhood: "Hamptons", squarefeet: 8000, garage: "Yes", publictransport: "No"},
            {name: "Leth Offices", location: "Lethbridge", rooms: 8, address: "5656 Pereview Rd", neighborhood: "Castle Ridge", squarefeet: 1000, garage: "No", publictransport: "No"},
            {name: "Mountaineer Cowork", location: "Kamloops", rooms: 15, address: "867 Longview Way", neighborhood: "Kingsland", squarefeet: 1000, garage: "Yes", publictransport: "Yes"},
            {name: "In the Kamloop", location: "Kamloops", rooms: 18, address: "198 Dereks Rd", neighborhood: "Silverado", squarefeet: 700, garage: "No", publictransport: "No"},
            {name: "City Hall Cowork", location: "Kamloops", rooms: 5, address: "523 Gellaford Rd", neighborhood: "Cranston", squarefeet: 800, garage: "No", publictransport: "Yes"},
        ];

        let workspaces = [
            {meetingrooms: 2, privateoffices: 5, opendesks: 25},
            {meetingrooms: 3, privateoffices: 6, opendesks: 45},
            {meetingrooms: 1, privateoffices: 4, opendesks: 36},
            {meetingrooms: 0, privateoffices: 7, opendesks: 20},
            {meetingrooms: 0, privateoffices: 8, opendesks: 12},
            {meetingrooms: 4, privateoffices: 4, opendesks: 23},
            {meetingrooms: 3, privateoffices: 5, opendesks: 45},
            {meetingrooms: 2, privateoffices: 6, opendesks: 23},
            {meetingrooms: 1, privateoffices: 6, opendesks: 22},
            {meetingrooms: 2, privateoffices: 8, opendesks: 11},
            {meetingrooms: 2, privateoffices: 2, opendesks: 10},
            {meetingrooms: 3, privateoffices: 4, opendesks: 18},
            {meetingrooms: 4, privateoffices: 3, opendesks: 34},
            {meetingrooms: 0, privateoffices: 2, opendesks: 22},
            {meetingrooms: 2, privateoffices: 8, opendesks: 21},
        ]

        localStorage.setItem("Properties", JSON.stringify(properties));
        console.log("Here");

        localStorage.setItem("Workspaces", JSON.stringify(workspaces));

        var x = document.getElementById("location").value;
        document.getElementById("listOfProperties").innerHTML = "";

        var local2 = localStorage.getItem("Properties");
        var local = JSON.parse(local2);
        console.log(local);

        var spaces2 = localStorage.getItem("Workspaces");
        var spaces = JSON.parse(spaces2);

        for (var i = 0; i < local.length; i++){
            if (local[i].location == x){
                document.getElementById("listOfProperties").innerHTML += "<b>Property Name: " + local[i].name + "</b><br>Number of total rooms: " + local[i].rooms + ".<br>"+
                "Workspaces available:<br>Meeting Rooms: " + spaces[i].meetingrooms + "<br>Private Offices: " + spaces[i].privateoffices + "<br>Open Desks: "+ spaces[i].opendesks + "<br><br>";
            }
        }

    }
    

    else{
    var x = document.getElementById("location").value;
    document.getElementById("listOfProperties").innerHTML = "";

    var local2 = localStorage.getItem("Properties");
    var local = JSON.parse(local2);
    var spaces2 = localStorage.getItem("Workspaces");
    var spaces = JSON.parse(spaces2);
    console.log(local);

    for (var i = 0; i < local.length; i++){
        if (local[i].location == x){
            document.getElementById("listOfProperties").innerHTML += "<b>Property Name: " + local[i].name + "</b><br>Number of total rooms: " + local[i].rooms +".<br>"+
            "Workspaces available:<br>Meeting Rooms: " + spaces[i].meetingrooms + "<br>Private Offices: " + spaces[i].privateoffices + "<br>Open Desks: "+ spaces[i].opendesks + "<br><br>";
        }
    }
    }
    
}

////// List Properties By Number of Rooms

function listPropertiesByRooms(){
    
    if (!localStorage.getItem("Properties")){
        let properties = [
            {name: "Tall Offices", location: "Calgary", rooms: 67, address: "100 Merriot Way", neighborhood: "North", squarefeet: 22000, garage: "Yes", publictransport: "No"},
            {name: "Core Mall", location: "Calgary", rooms: 6, address: "250 Nose Hill Drive", neighborhood: "Nose Hill", squarefeet: 2000, garage: "Yes", publictransport: "Yes"},
            {name: "Chinook Cowork", location: "Calgary", rooms: 56, address: "76 Silver Blvd", neighborhood: "Tuscany", squarefeet: 18000, garage: "No", publictransport: "Yes"},
            {name: "West-End Offices", location: "Vancouver", rooms: 34, address: "10 Springfield Road", neighborhood: "Mount Royal", squarefeet: 5000, garage: "No", publictransport: "Yes"},
            {name: "Vancowork", location: "Vancouver", rooms: 14, address: "90 Morefoot Way", neighborhood: "Citadel", squarefeet: 2500, garage: "Yes", publictransport: "No"},
            {name: "Downtown Tall", location: "Vancouver", rooms: 23, address: "8967 Main Drive", neighborhood: "Summit", squarefeet: 3100, garage: "No", publictransport: "No"},
            {name: "Northern Alberta Offices", location: "Edmonton", rooms: 12, address: "520 Edenbold Way", neighborhood: "Royal Oak", squarefeet: 1500, garage: "Yes", publictransport: "Yes"},
            {name: "Edmonton Oilery", location: "Edmonton", rooms: 35, address: "9000 Country Hills Blvd", neighborhood: "Summerset", squarefeet: 12000, garage: "Yes", publictransport: "No"},
            {name: "555 Building", location: "Edmonton", rooms: 43, address: "1000 Stoney Trail", neighborhood: "Auburn Bay", squarefeet: 14000, garage: "No", publictransport: "Yes"},
            {name: "Plus 16", location: "Lethbridge", rooms: 21, address: "235 Hidden Valley Dr", neighborhood: "Downtown", squarefeet: 5600, garage: "No", publictransport: "Yes"},
            {name: "Southern Alberta Tech Institute", location: "Lethbridge", rooms: 23, address: "18 Tuscany Drive", neighborhood: "Hamptons", squarefeet: 8000, garage: "Yes", publictransport: "No"},
            {name: "Leth Offices", location: "Lethbridge", rooms: 8, address: "5656 Pereview Rd", neighborhood: "Castle Ridge", squarefeet: 1000, garage: "No", publictransport: "No"},
            {name: "Mountaineer Cowork", location: "Kamloops", rooms: 15, address: "867 Longview Way", neighborhood: "Kingsland", squarefeet: 1000, garage: "Yes", publictransport: "Yes"},
            {name: "In the Kamloop", location: "Kamloops", rooms: 18, address: "198 Dereks Rd", neighborhood: "Silverado", squarefeet: 700, garage: "No", publictransport: "No"},
            {name: "City Hall Cowork", location: "Kamloops", rooms: 5, address: "523 Gellaford Rd", neighborhood: "Cranston", squarefeet: 800, garage: "No", publictransport: "Yes"},
        ];

        let workspaces = [
            {meetingrooms: 2, privateoffices: 5, opendesks: 25},
            {meetingrooms: 3, privateoffices: 6, opendesks: 45},
            {meetingrooms: 1, privateoffices: 4, opendesks: 36},
            {meetingrooms: 0, privateoffices: 7, opendesks: 20},
            {meetingrooms: 0, privateoffices: 8, opendesks: 12},
            {meetingrooms: 4, privateoffices: 4, opendesks: 23},
            {meetingrooms: 3, privateoffices: 5, opendesks: 45},
            {meetingrooms: 2, privateoffices: 6, opendesks: 23},
            {meetingrooms: 1, privateoffices: 6, opendesks: 22},
            {meetingrooms: 2, privateoffices: 8, opendesks: 11},
            {meetingrooms: 2, privateoffices: 2, opendesks: 10},
            {meetingrooms: 3, privateoffices: 4, opendesks: 18},
            {meetingrooms: 4, privateoffices: 3, opendesks: 34},
            {meetingrooms: 0, privateoffices: 2, opendesks: 22},
            {meetingrooms: 2, privateoffices: 8, opendesks: 21},
        ]

        localStorage.setItem("Properties", JSON.stringify(properties));
        console.log("Here");
        localStorage.setItem("Workspaces", JSON.stringify(workspaces));

        var x = document.getElementById("numberofrooms").value;
         document.getElementById("listOfPropertiesByRoom").innerHTML = "";

        var local2 = localStorage.getItem("Properties");
        var local = JSON.parse(local2);
        console.log(local);

        if(x == 10){
        for (var i = 0; i < local.length; i++){
            if (local[i].rooms <= x){
                document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
              }
            }
        }
        if(x == 20){
            for (var i = 0; i < local.length; i++){
                if (local[i].rooms <= x && local[i].rooms >= 10){
                    document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
                  }
                }
            }
        if(x == 30){
            for (var i = 0; i < local.length; i++){
                if (local[i].rooms <= x && local[i].rooms >= 20){
                    document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
                    }
                }
            }
        if(x == 40){
            for (var i = 0; i < local.length; i++){
                if (local[i].rooms <= x && local[i].rooms >= 30){
                    document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
                    }
                }
            }
        if(x == 50){
            for (var i = 0; i < local.length; i++){
                if (local[i].rooms >= x){
                    document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
                    }
                }
            }
    }
    
    else{
    var x = document.getElementById("numberofrooms").value;
    document.getElementById("listOfPropertiesByRoom").innerHTML = "";
    console.log(x);
    var local2 = localStorage.getItem("Properties");
    var local = JSON.parse(local2);
    console.log(local);

    if(x == 10){
        for (var i = 0; i < local.length; i++){
            if (local[i].rooms <= x){
                document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
              }
            }
        }
        if(x == 20){
            for (var i = 0; i < local.length; i++){
                if (local[i].rooms <= x && local[i].rooms >= 10){
                    document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
                  }
                }
            }
        if(x == 30){
            for (var i = 0; i < local.length; i++){
                if (local[i].rooms <= x && local[i].rooms >= 20){
                    document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
                    }
                }
            }
        if(x == 40){
            for (var i = 0; i < local.length; i++){
                if (local[i].rooms <= x && local[i].rooms >= 30){
                    document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
                    }
                }
            }
        if(x == 50){
            for (var i = 0; i < local.length; i++){
                if (local[i].rooms >= x){
                    document.getElementById("listOfPropertiesByRoom").innerHTML += "Property Name: " + local[i].name + ", number of total rooms: " + local[i].rooms + ".<br><br>";
                    }
                }
            }
    }
    
}

// Add Properties

function addProperty(){

    if (!localStorage.getItem("Properties")){

        let properties = [
            {name: "Tall Offices", location: "Calgary", rooms: 67, address: "100 Merriot Way", neighborhood: "North", squarefeet: 22000, garage: "Yes", publictransport: "No"},
            {name: "Core Mall", location: "Calgary", rooms: 6, address: "250 Nose Hill Drive", neighborhood: "Nose Hill", squarefeet: 2000, garage: "Yes", publictransport: "Yes"},
            {name: "Chinook Cowork", location: "Calgary", rooms: 56, address: "76 Silver Blvd", neighborhood: "Tuscany", squarefeet: 18000, garage: "No", publictransport: "Yes"},
            {name: "West-End Offices", location: "Vancouver", rooms: 34, address: "10 Springfield Road", neighborhood: "Mount Royal", squarefeet: 5000, garage: "No", publictransport: "Yes"},
            {name: "Vancowork", location: "Vancouver", rooms: 14, address: "90 Morefoot Way", neighborhood: "Citadel", squarefeet: 2500, garage: "Yes", publictransport: "No"},
            {name: "Downtown Tall", location: "Vancouver", rooms: 23, address: "8967 Main Drive", neighborhood: "Summit", squarefeet: 3100, garage: "No", publictransport: "No"},
            {name: "Northern Alberta Offices", location: "Edmonton", rooms: 12, address: "520 Edenbold Way", neighborhood: "Royal Oak", squarefeet: 1500, garage: "Yes", publictransport: "Yes"},
            {name: "Edmonton Oilery", location: "Edmonton", rooms: 35, address: "9000 Country Hills Blvd", neighborhood: "Summerset", squarefeet: 12000, garage: "Yes", publictransport: "No"},
            {name: "555 Building", location: "Edmonton", rooms: 43, address: "1000 Stoney Trail", neighborhood: "Auburn Bay", squarefeet: 14000, garage: "No", publictransport: "Yes"},
            {name: "Plus 16", location: "Lethbridge", rooms: 21, address: "235 Hidden Valley Dr", neighborhood: "Downtown", squarefeet: 5600, garage: "No", publictransport: "Yes"},
            {name: "Southern Alberta Tech Institute", location: "Lethbridge", rooms: 23, address: "18 Tuscany Drive", neighborhood: "Hamptons", squarefeet: 8000, garage: "Yes", publictransport: "No"},
            {name: "Leth Offices", location: "Lethbridge", rooms: 8, address: "5656 Pereview Rd", neighborhood: "Castle Ridge", squarefeet: 1000, garage: "No", publictransport: "No"},
            {name: "Mountaineer Cowork", location: "Kamloops", rooms: 15, address: "867 Longview Way", neighborhood: "Kingsland", squarefeet: 1000, garage: "Yes", publictransport: "Yes"},
            {name: "In the Kamloop", location: "Kamloops", rooms: 18, address: "198 Dereks Rd", neighborhood: "Silverado", squarefeet: 700, garage: "No", publictransport: "No"},
            {name: "City Hall Cowork", location: "Kamloops", rooms: 5, address: "523 Gellaford Rd", neighborhood: "Cranston", squarefeet: 800, garage: "No", publictransport: "Yes"},
        ];

        let workspaces = [
            {meetingrooms: 2, privateoffices: 5, opendesks: 25},
            {meetingrooms: 3, privateoffices: 6, opendesks: 45},
            {meetingrooms: 1, privateoffices: 4, opendesks: 36},
            {meetingrooms: 0, privateoffices: 7, opendesks: 20},
            {meetingrooms: 0, privateoffices: 8, opendesks: 12},
            {meetingrooms: 4, privateoffices: 4, opendesks: 23},
            {meetingrooms: 3, privateoffices: 5, opendesks: 45},
            {meetingrooms: 2, privateoffices: 6, opendesks: 23},
            {meetingrooms: 1, privateoffices: 6, opendesks: 22},
            {meetingrooms: 2, privateoffices: 8, opendesks: 11},
            {meetingrooms: 2, privateoffices: 2, opendesks: 10},
            {meetingrooms: 3, privateoffices: 4, opendesks: 18},
            {meetingrooms: 4, privateoffices: 3, opendesks: 34},
            {meetingrooms: 0, privateoffices: 2, opendesks: 22},
            {meetingrooms: 2, privateoffices: 8, opendesks: 21},
        ]
        var x = document.getElementById("propertyname").value;
        var y = document.getElementById("location").value;
        var z = parseInt(document.getElementById("rooms").value);
        var w = document.getElementById("address").value;
        var k = document.getElementById("neighborhood").value;
        var j = parseInt(document.getElementById("squarefeet").value);
        var u = document.getElementById("hasgarage").value;
        var h = document.getElementById("publictransport").value;

        var a = parseInt(document.getElementById("meetingrooms").value);
        var b = parseInt(document.getElementById("privaterooms").value);
        var c = parseInt(document.getElementById("opendesks").value);
    
        var tempObject = {name: x, location: y, rooms: z, address: w, neighborhood: k, squarefeet: j, garage: u, publictransport: h};
        var tempWorkspace = {meetingrooms: a, privateoffices: b, opendesks: c}

        properties.push(tempObject);
        workspaces.push(tempWorkspace);
        
        // Store
        localStorage.setItem("Properties", JSON.stringify(properties));
        localStorage.setItem("Workspaces", JSON.stringify(workspaces));
        var local2 = localStorage.getItem("Properties");
        var local = JSON.parse(local2);
        console.log(local);
    }
    else {
        var x = document.getElementById("propertyname").value;
        var y = document.getElementById("location").value;
        var z = parseInt(document.getElementById("rooms").value);
        var w = document.getElementById("address").value;
        var k = document.getElementById("neighborhood").value;
        var j = parseInt(document.getElementById("squarefeet").value);
        var u = document.getElementById("hasgarage").value;
        var h = document.getElementById("publictransport").value;

        var a = parseInt(document.getElementById("meetingrooms").value);
        var b = parseInt(document.getElementById("privaterooms").value);
        var c = parseInt(document.getElementById("opendesks").value);

        var tempObject = {name: x, location: y, rooms: z, address: w, neighborhood: k, squarefeet: j, garage: u, publictransport: h};
        var tempWorkspace = {meetingrooms: a, privateoffices: b, opendesks: c}

        let properties = JSON.parse(localStorage.getItem("Properties"));
        properties.push(tempObject);
        localStorage.setItem("Properties", JSON.stringify(properties));
        console.log(properties);

        let workspaces = JSON.parse(localStorage.getItem("Workspaces"));
        workspaces.push(tempWorkspace);
        localStorage.setItem("Workspaces", JSON.stringify(workspaces));

    }
    alert("Property added successfully.");
}

////// Remove Property

function removeProperty(){

    if (!localStorage.getItem("Properties")){

        let properties = [
            {name: "Tall Offices", location: "Calgary", rooms: 67, address: "100 Merriot Way", neighborhood: "North", squarefeet: 22000, garage: "Yes", publictransport: "No"},
            {name: "Core Mall", location: "Calgary", rooms: 6, address: "250 Nose Hill Drive", neighborhood: "Nose Hill", squarefeet: 2000, garage: "Yes", publictransport: "Yes"},
            {name: "Chinook Cowork", location: "Calgary", rooms: 56, address: "76 Silver Blvd", neighborhood: "Tuscany", squarefeet: 18000, garage: "No", publictransport: "Yes"},
            {name: "West-End Offices", location: "Vancouver", rooms: 34, address: "10 Springfield Road", neighborhood: "Mount Royal", squarefeet: 5000, garage: "No", publictransport: "Yes"},
            {name: "Vancowork", location: "Vancouver", rooms: 14, address: "90 Morefoot Way", neighborhood: "Citadel", squarefeet: 2500, garage: "Yes", publictransport: "No"},
            {name: "Downtown Tall", location: "Vancouver", rooms: 23, address: "8967 Main Drive", neighborhood: "Summit", squarefeet: 3100, garage: "No", publictransport: "No"},
            {name: "Northern Alberta Offices", location: "Edmonton", rooms: 12, address: "520 Edenbold Way", neighborhood: "Royal Oak", squarefeet: 1500, garage: "Yes", publictransport: "Yes"},
            {name: "Edmonton Oilery", location: "Edmonton", rooms: 35, address: "9000 Country Hills Blvd", neighborhood: "Summerset", squarefeet: 12000, garage: "Yes", publictransport: "No"},
            {name: "555 Building", location: "Edmonton", rooms: 43, address: "1000 Stoney Trail", neighborhood: "Auburn Bay", squarefeet: 14000, garage: "No", publictransport: "Yes"},
            {name: "Plus 16", location: "Lethbridge", rooms: 21, address: "235 Hidden Valley Dr", neighborhood: "Downtown", squarefeet: 5600, garage: "No", publictransport: "Yes"},
            {name: "Southern Alberta Tech Institute", location: "Lethbridge", rooms: 23, address: "18 Tuscany Drive", neighborhood: "Hamptons", squarefeet: 8000, garage: "Yes", publictransport: "No"},
            {name: "Leth Offices", location: "Lethbridge", rooms: 8, address: "5656 Pereview Rd", neighborhood: "Castle Ridge", squarefeet: 1000, garage: "No", publictransport: "No"},
            {name: "Mountaineer Cowork", location: "Kamloops", rooms: 15, address: "867 Longview Way", neighborhood: "Kingsland", squarefeet: 1000, garage: "Yes", publictransport: "Yes"},
            {name: "In the Kamloop", location: "Kamloops", rooms: 18, address: "198 Dereks Rd", neighborhood: "Silverado", squarefeet: 700, garage: "No", publictransport: "No"},
            {name: "City Hall Cowork", location: "Kamloops", rooms: 5, address: "523 Gellaford Rd", neighborhood: "Cranston", squarefeet: 800, garage: "No", publictransport: "Yes"},
        ];

        let workspaces = [
            {meetingrooms: 2, privateoffices: 5, opendesks: 25},
            {meetingrooms: 3, privateoffices: 6, opendesks: 45},
            {meetingrooms: 1, privateoffices: 4, opendesks: 36},
            {meetingrooms: 0, privateoffices: 7, opendesks: 20},
            {meetingrooms: 0, privateoffices: 8, opendesks: 12},
            {meetingrooms: 4, privateoffices: 4, opendesks: 23},
            {meetingrooms: 3, privateoffices: 5, opendesks: 45},
            {meetingrooms: 2, privateoffices: 6, opendesks: 23},
            {meetingrooms: 1, privateoffices: 6, opendesks: 22},
            {meetingrooms: 2, privateoffices: 8, opendesks: 11},
            {meetingrooms: 2, privateoffices: 2, opendesks: 10},
            {meetingrooms: 3, privateoffices: 4, opendesks: 18},
            {meetingrooms: 4, privateoffices: 3, opendesks: 34},
            {meetingrooms: 0, privateoffices: 2, opendesks: 22},
            {meetingrooms: 2, privateoffices: 8, opendesks: 21},
        ]

        var x = document.getElementById("propertynamedelete").value;
       
        
        // Store
        localStorage.setItem("Properties", JSON.stringify(properties));
        localStorage.setItem("Workspaces", JSON.stringify(workspaces));
        var local2 = localStorage.getItem("Properties");
        var local = JSON.parse(local2);
        var spaces2 = localStorage.getItem("Workspaces");
        var spaces = JSON.parse(spaces2);
        console.log(local);

        for (var i = 0; i < local.length; i++){
            if (local[i].name == x){
                delete local[i].name;
                delete local[i].location;
                delete local[i].rooms;
                delete local[i].address;
                delete local[i].neighborhood;
                delete local[i].squarefeet;
                delete local[i].garage;
                delete local[i].publictransport;
                delete spaces[i].meetingrooms;
                delete spaces[i].privateoffices;
                delete spaces[i].opendesks;
                alert("Property removed successfully.");
                break;
                }
            if (i == local.length-1){
                alert("Property does not exist."); 
            }
            }

        localStorage.setItem("Properties", JSON.stringify(local));
        localStorage.setItem("Workspaces", JSON.stringify(spaces));


    }
    else {
        var x = document.getElementById("propertynamedelete").value;
        var local2 = localStorage.getItem("Properties");
        var local = JSON.parse(local2);
        var spaces2 = localStorage.getItem("Workspaces");
        var spaces = JSON.parse(spaces2);
        console.log(local);

        for (var i = 0; i < local.length; i++){
            if (local[i].name == x){
                delete local[i].name;
                delete local[i].location;
                delete local[i].rooms;
                delete local[i].address;
                delete local[i].neighborhood;
                delete local[i].squarefeet;
                delete local[i].garage;
                delete local[i].publictransport;
                delete spaces[i].meetingrooms;
                delete spaces[i].privateoffices;
                delete spaces[i].opendesks;
                alert("Property removed successfully.");
                break;
                }
            if (i == local.length-1){
                alert("Property does not exist."); 
            }
        }

        localStorage.setItem("Properties", JSON.stringify(local));
        localStorage.setItem("Workspaces", JSON.stringify(spaces));
    }  
}

function stopAccess(){
    window.stop();
    alert("Please log in as admin to access the Manage Properties page.");
}

// Footer date function
let date = new Date();
function DateFooter(){
    document.getElementById("footerparagraph").innerHTML = "Copyright &copy; " + date.getFullYear() + " All Rights Reserved by CoWorking TM";
    }
DateFooter();

function showPassword() {

    var temp = document.getElementById("passwordBox");

    if (temp.type === "password") {
      temp.type = "text";
    } else {
      temp.type = "password";
    }
}

  function showPassword2() {

    var temp = document.getElementById("passwordBox2");

    if (temp.type === "password") {
      temp.type = "text";
    } else {
      temp.type = "password";
    }
}