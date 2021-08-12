input.onButtonPressed(Button.A, function () {
    Basket.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Basket.change(LedSpriteProperty.X, 1)
})
let Ball: game.LedSprite = null
let Basket: game.LedSprite = null
basic.showString("Ball Catcher")
let Player_1_score = 0
let Player_2_score = 0
Basket = game.createSprite(2, 4)
loops.everyInterval(1500, function () {
    Ball = game.createSprite(randint(0, 4), 0)
})
basic.forever(function () {
    music.playMelody("C B D A C5 F B D ", 120)
    if (Ball.get(LedSpriteProperty.Y) == 4 && Basket.isTouching(Ball)) {
        Ball.delete()
    } else {
        if (Ball.get(LedSpriteProperty.Y) == 4 && !(Basket.isTouching(Ball))) {
            Ball.delete()
        }
    }
})
loops.everyInterval(200, function () {
    Ball.change(LedSpriteProperty.Y, 1)
})
