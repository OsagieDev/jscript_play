window.onload= function(){
 
//RELEASE 0: Link this script to the js_dom.html file and analyze what this code does. 
 
document.getElementsByTagName('body')[0].style.backgroundColor = "red"
 
//RELEASE 1:
  //Add code here to select elements of the DOM 

document.querySelector('#mybody').style.backgroundColor = "red"
document.getElementsByTagName("li")[2].innerHTML="innerHTML MODIFIED THIS LIST ITEM";
 
//RELEASE 2: 
  // Add code here to manipulate the DOM.
document.getElementById("larger").style.fontSize = "40px"
document.getElementById('mytable').style.borderColor = "black"
document.getElementById("mytable").style.borderStyle="solid"

 
//RELEASE 3: Event Listener
  // Add the code for the event listener here and replace the console.log code with code that changes the color of some DOM element

document.getElementById("color-switcher").addEventListener('click', function(){
  console.log('Color Switched!!')
  document.getElementById("mytable").style.backgroundColor="white"
}) 

//RELEASE 4 : Experiment on your own
 
document.getElementById("unshower").addEventListener('click', function(){
  console.log('Hidden Stuff')
  document.getElementById('hidenseek').style.visibility='hidden'
})

document.getElementById("shower").addEventListener('click', function(){
  console.log('Showing Stuff')
  document.getElementById('hidenseek').style.visibility='visible'
})

var str = document.getElementsByClassName('goUpper')[0].innerHTML
document.getElementsByClassName('goUpper')[0].innerHTML = str.toUpperCase()
console.log(str)
 
 
}  // end of the window.onload function do not remove or write DOM manipulation below this.