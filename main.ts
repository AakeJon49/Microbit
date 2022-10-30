let baslinje = input.magneticForce(Dimension.Strength)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength) - baslinje) > 100) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.No)
    } else {
        basic.clearScreen()
    }
})
