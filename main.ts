let distance = 0
basic.forever(function () {
    distance = Rover.Ultrasonic()
    Rover.setALLRGB(Rover.hsl(Math.constrain(Rover.Ultrasonic(), 0, 240), 99, 50))
    if (15 < Rover.Ultrasonic()) {
        Rover.Move(150)
    } else {
        Rover.MotorRunDual(-100, 100)
    }
})
