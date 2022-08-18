var message = "Hello world!"
var textPosition = 0
var speed = 200
var reverse = false

typewriter =() => {
  document.querySelector("#message").innerHTML = "<span>> </span>" + message.substring(0, textPosition) + "<span class=\"blink\">|</span>"

 if (reverse){

  if (textPosition-- == 0) {
    reverse = false
   }
  
 } else {
  if (textPosition++ == message.length) {
    reverse = true
   }
  
 }
 
 setTimeout(typewriter, speed)
    
}

window.addEventListener("load", typewriter)