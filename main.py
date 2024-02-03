def on_forever():
    basic.show_number(Rover.ultrasonic())
basic.forever(on_forever)
