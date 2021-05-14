var health = 100
var hits = 0

draw()

function draw() {
  let template = `${health}`
  document.getElementById("health").innerHTML = template
}



function slap() {
  health--
  draw()
  // @ts-ignore
  document.getElementById("img").src = "https://srk.shib.live/images/a/a4/%28kenhparry%29.gif"
  // @ts-ignore
  document.getElementById("img-ryu").src = "https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImage, 600)

  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}

function punch() {
  health -= 5
  draw()
  // @ts-ignore
  document.getElementById("img").src = "https://srk.shib.live/images/f/f4/%28kenmp%29.gif"
  // @ts-ignore
  document.getElementById("img-ryu").src = "https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImage, 725)
  if (health <= 0) {
    setTimeout(endGame, 100)
  }

}

function kick() {
  health -= 3
  draw()
  // @ts-ignore
  document.getElementById("img").src = "https://srk.shib.live/images/d/d1/%28kenmk%29.gif"
  // @ts-ignore
  document.getElementById("img-ryu").src = "https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImage, 750)
  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}

function hadouken() {
  health -= 50
  draw()
  // @ts-ignore
  document.getElementById("img").src = "https://srk.shib.live/images/2/2a/%28kenhdk%29.gif"
  // @ts-ignore
  document.getElementById("img-ryu").src = "https://srk.shib.live/images/4/4d/%28ryuw%29.gif"
  setTimeout(resetImage, 2000)
  if (health <= 0) {
    setTimeout(endGame, 100)
  }
}


function reset() {
  health = 100
  draw()
}

function endGame() {
  alert("You won")
  reset()
}

function resetImage() {
  // @ts-ignore
  document.getElementById("img").src = "https://srk.shib.live/images/6/69/Ken3s-stance.gif"
  // @ts-ignore
  document.getElementById("img-ryu").src = "https://srk.shib.live/images/2/20/Ryu3s-stance.gif"
}