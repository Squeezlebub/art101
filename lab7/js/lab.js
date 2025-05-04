function sortUserName() {

    var userName = window.prompt("What is your name?");
    console.log("userName assigned value " + userName);

    return userName.split('').sort().join('');
}

function main() {
    console.log("Main function started.");

    document.writeln("Here is your better name: " + sortUserName());

}

main();
