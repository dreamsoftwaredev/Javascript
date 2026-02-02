document.getElementById('myButton').addEventListener('click', function OnClick(event) {
    console.log("Clicked the button", event)
});

console.log("Script Loaded");

setTimeout(function () {
    console.log("Button is clicked after 3 seconds")
}, 3000);

console.log("End of Script");