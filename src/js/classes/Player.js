class Player {
  constructor(props) {
    this.width = props.width
    this.height = props.height
    this.color = props.color
    this.speed = props.speed
    this.position = {
      x: props.position.x,
      y: props.position.y
    }
    //bergantung pada movement yang kita pencet
    this.velocity = {
      x:0,
      y:0
    }
    this.heightJump = 100
    this.grafity = .5
  }

    jump() {
      return  this.velocity.y = -Math.sqrt(2 * this.grafity * this.heightJump)
    }

    moveRight() {
      this.velocity.x = +1 * this.speed
    }
    
    moveLeft() {
      this.velocity.x = -1 * this.speed
    }

//kinematic equation physic (ketika menekan tombol keyUp seperti meloncat(bukan melayang))
//heghtJump = v2 * g * h 
//v1 = sqrt(2 * g * h)


  //untun menggerakan frame +1 
  update() {
    const ground = canvas.height - this.height
    const rightWall = canvas.width - this.width
    this.velocity.y += this.grafity  
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y


    if(player.position.y > ground) {
      this.position.y = ground
      this.velocity.y = -Math.sqrt(2 * this.grafity * this.heightJump)
    }else if(player.position.x > rightWall) {
      this.velocity.x *= -1
    }else if(player.position.x < 0) {
      this.velocity.x *= -1
    }
  }



  create() {
    board.fillStyle = this.color
    board.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}