class Ground {
    constructor(image,width, height) {
        this.image = new Image() 
        this.image.src = image 
        this.height = height
        this.width = width
        this.position = {
            x :0,
            y:0
        }



        console.log('ground siap')
    }
    
    create() {
        board.drawImage(this.image,this.position.x,this.position.y)
        //jika ingin image nya bergerak 
        // board.drawImage(this.image,this.position.x,this.position.y, this.position.y, this.position.x -= 5)
    }
}