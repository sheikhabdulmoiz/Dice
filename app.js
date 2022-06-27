var R = Math.round(Math.random() * 6);
console.log(R);
var userTurn = +prompt("Enter any number from 1-6 in a Dice");
if (userTurn) {


    if (userTurn === R) {
        swal("Congrats! your Dice number is matched " + R)
        swal({
            title: "Perfect!",
            text: "Congrats! your Dice number is matched " + R,
            icon: "success",
        });
    }
    else {
        swal("You loose. Dice number not matched " + R)
    }

}
else {
    alert("Please enter from 1-6")
    var userTurn = +prompt("Enter any number from 1-6 in a Dice");
    if (userTurn === R) {
        swal("Congrats! your Dice number is matched " + R)
        swal({
            title: "Perfect!",
            text: "Congrats! your Dice number is matched " + R,
            icon: "success",
        });
    }
    else {
        swal("You loose. Dice number not matched " + R)
    }
        
}