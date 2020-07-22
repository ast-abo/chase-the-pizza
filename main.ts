let mySprite = sprites.create(img`
. . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . 
. . . . . . . . . . . . e e 4 5 5 6 6 2 e 2 e . . . . . . . . . 
. . . . . . . . . . e e 4 5 5 5 6 7 2 3 e 2 6 8 8 . . . . . . . 
. . . . . . . . . e 4 6 7 7 6 6 7 7 2 3 2 e 7 7 7 6 6 8 . . . . 
. . . . . . . . e 4 6 7 4 5 5 5 4 7 7 2 2 2 7 7 7 6 7 7 8 . . . 
. . . . . . . 4 4 4 8 7 4 4 4 4 4 7 7 7 7 6 6 7 7 7 6 7 8 . . . 
. . . . . . 4 5 2 2 e 7 7 7 7 7 7 6 7 7 7 7 6 6 6 7 6 6 6 8 . . 
. . . . . 4 5 2 3 2 2 7 7 6 6 7 2 2 e 6 6 6 e e e e e 8 8 8 . . 
. . . . 4 5 5 2 3 2 e 7 6 6 7 2 3 2 2 e 4 5 5 5 d d d d 4 8 . . 
. . . 4 4 5 6 7 7 7 7 5 5 4 6 2 3 e 4 5 5 d d d d d d d d d 4 . 
. . . e 6 6 7 7 4 5 5 4 4 7 7 e 4 5 5 d d d d 5 5 5 5 4 d d 4 4 
. . e 4 6 7 7 7 4 4 4 6 7 7 e 5 5 d d 5 5 5 5 5 d 5 5 d d d d 4 
. . e 5 6 6 8 6 7 7 6 6 6 e 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 d d e 
. e 4 5 5 4 4 e 8 7 7 6 e 5 d 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 d e 
. e 5 5 4 e e e e 6 6 e 5 d 5 5 5 5 d 5 5 5 5 5 d d d d 5 4 d e 
. e 5 5 e e 4 4 f e e 5 d 5 d 5 5 5 5 5 5 d 5 d 5 d d d d d d e 
e 4 5 4 e e e e f e 4 5 d 5 5 5 5 5 5 5 5 5 5 5 d d 4 d d d e . 
e 5 e 4 e e f f f e 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 d d d d e . . 
e 5 e e 4 e e f f 4 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d d d e . . . 
e 5 e e e e f f e 5 d 5 5 d 5 5 5 d 5 5 5 5 d 5 d d d e . . . . 
e 5 f f e f e e e 5 d 5 5 5 4 5 5 5 5 5 5 5 d d d 4 e . . . . . 
e 5 f f f f f f e 5 4 5 5 5 5 5 5 5 d 5 d 4 d d e e . . . . . . 
e 5 4 e f e f f 4 5 d 5 5 d 5 5 5 5 5 d d d d e . . . . . . . . 
e 5 e e e f f e 5 d d 5 5 5 5 5 4 5 d d d e e . . . . . . . . . 
e 4 e e e f f f 5 d 5 5 5 5 d 5 5 d d d e . . . . . . . . . . . 
e 4 e f e f f f 5 d 5 d 5 5 5 5 5 d 4 e . . . . . . . . . . . . 
. e 4 e f f f e 5 d 5 5 5 5 5 5 d e e . . . . . . . . . . . . . 
. e 5 4 e e e e 5 d 5 4 5 d d 4 e . . . . . . . . . . . . . . . 
. . e 5 5 4 e e 5 d d d d d e e . . . . . . . . . . . . . . . . 
. . . e e 5 5 4 4 d d d e e . . . . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
let PIZZA = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.player2.moveSprite(PIZZA, controller.player1.dx(), 100)
controller.moveSprite(mySprite)
scene.setBackgroundColor(15)
