// function looping(startnum, endnum , breaknum, contnum ){ 
//     if( startnum==undefined|| endnum==undefined|| breaknum==undefined|| contnum==undefined )
//         {console.log('please enter all numbers')}
//     else{ 
//         for( vari=startnum; i<=endnum; i++){
//             if(i==breaknum) break
//             else if (i==contnum) continue
//             else console.log(i)
//         }}
//     }
//         looping(1)
//         looping(1,20,15,4)



// function getname(){ return'nour'}
// var firstname=getname()

// var firstname="NOURKANDY"
// var lastname="Mohamed"
// var age=23
// var is Graduated=true
// var userData=["NOURKANDY","Mohamed","23",true]


// var numberOfUsers = () => {
    var users=[]
    // function numofusers(){
    // var count = Number(prompt('Enter number of users'));
    // for (var i = 0; i < count; i++) {
    //     addUsers();
    // }
    //  console.log('enter all of users')
    // console.table(users);
    // }
// console.log(numofusers())
// var users = [];
function addUsers() {
   var name = prompt("Enter name:");
    var id = prompt("Enter ID:");
    var balance = prompt("Enter balance:");
      var user = {
        name: name,
        id: id,
        balance: balance
    };
    users.push(user);
}

// function addUser() {
//      name = prompt("Enter user name:");
//     var id = prompt("Enter user ID:");
//     var balance = prompt("Enter user balance:");

//     var user = {
//         name: name,
//         id: id,
//         balance: parseFloat(balance)
//     };

//     users.push(user);
// }
function numberOfUsers() {
    var num = parseInt(prompt("Enter number of users:"));

    for (var i = 0; i < num; i++) {
        
        addUsers(); // Each user is added twice
    }
}

function editUserBalance(id,newBalance) {
    var id= prompt('enter user id to edit')
    var newBalance= prompt('enter new')
    var user = users.find(u => u.id === id);

    if (user) {
        user.balance=newBalance;
        console.log("newBalance")
    } else {
        console.log("User not found.");
    }
}

function removeUserById() {
    var searchId = prompt("Enter the ID of the user to remove:");
    var index = users.findIndex(u => u.id === searchId);

    if (index !== -1) {
        var removedUser = users.splice(index, 1)[0];
        alert(`User ${removedUser.name} with ID ${removedUser.id} removed.`);
    } else {
        alert("User not found.");
    }
}
editUserBalance()
deleteUserByid()