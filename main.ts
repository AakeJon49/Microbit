input.onButtonPressed(Button.A, function () {
    for (let plats = 0; plats <= 2; plats++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - plats)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("Go")
})
