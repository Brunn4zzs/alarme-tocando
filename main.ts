input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("F B A G E D C C5 ", 120), music.PlaybackMode.UntilDone)
})
