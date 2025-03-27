input.onButtonPressed(Button.A, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "set variable \"number\" to count up by 1"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "display most current coordinate"
    )
})
input.onButtonPressed(Button.AB, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "clear screen and reset letter and number to 0,0"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "physically pick up your bot and place it back at 0,0"
    )
})
input.onButtonPressed(Button.B, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "set variable \"letter\" to count up by 1"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "display most current coordinate"
    )
})
function showCoordinate () {
    let number = 0
    let letter = 0
    if (letter == 0 && number == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (letter == 1 && number == 0) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . # . .
            `)
    }
    if (letter == 1 && number == 1) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . # . #
            `)
    }
    if (letter == 1 && number == 2) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . #
            # . # . #
            `)
    }
    if (letter == 1 && number == 3) {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . #
            # . # . #
            # . # . #
            `)
    }
    if (letter == 1 && number == 4) {
        basic.showLeds(`
            # # # . .
            # . # . #
            # # # . #
            # . # . #
            # . # . #
            `)
    }
    if (letter == 1 && number == 5) {
        basic.showLeds(`
            # # # . #
            # . # . #
            # # # . #
            # . # . #
            # . # . #
            `)
    }
    if (letter == 2 && number == 0) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # # . .
            # . # . .
            # # . . .
            `)
    }
    if (letter == 2 && number == 1) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # # . .
            # . # . .
            # # . . #
            `)
    }
    if (letter == 2 && number == 2) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # # . .
            # . # . #
            # # . . #
            `)
    }
    if (letter == 2 && number == 3) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # # . #
            # . # . #
            # # . . #
            `)
    }
    if (letter == 2 && number == 4) {
        basic.showLeds(`
            # # . . .
            # . # . #
            # # # . #
            # . # . #
            # # . . #
            `)
    }
    if (letter == 2 && number == 5) {
        basic.showLeds(`
            # # . . #
            # . # . #
            # # # . #
            # . # . #
            # # . . #
            `)
    }
    if (letter == 3 && number == 0) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
    }
    if (letter == 3 && number == 1) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # . . . .
            # . . . .
            # # # . #
            `)
    }
    if (letter == 3 && number == 2) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # . . . .
            # . . . #
            # # # . #
            `)
    }
    if (letter == 3 && number == 3) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # . . . #
            # . . . #
            # # # . #
            `)
    }
    if (letter == 3 && number == 4) {
        basic.showLeds(`
            # # # . .
            # . . . #
            # . . . #
            # . . . #
            # # # . #
            `)
    }
    if (letter == 3 && number == 5) {
        basic.showLeds(`
            # # # . #
            # . . . #
            # . . . #
            # . . . #
            # # # . #
            `)
    }
    if (letter == 4 && number == 0) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # . # . .
            # . # . .
            # # . . .
            `)
    }
    if (letter == 4 && number == 1) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # . # . .
            # . # . .
            # # . . #
            `)
    }
    if (letter == 4 && number == 2) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # . # . .
            # . # . #
            # # . . #
            `)
    }
    if (letter == 4 && number == 3) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # . # . #
            # . # . #
            # # . . #
            `)
    }
    if (letter == 4 && number == 4) {
        basic.showLeds(`
            # # . . .
            # . # . #
            # . # . #
            # . # . #
            # # . . #
            `)
    }
    if (letter == 4 && number == 5) {
        basic.showLeds(`
            # # . . #
            # . # . #
            # . # . #
            # . # . #
            # # . . #
            `)
    }
    if (letter == 5 && number == 0) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # . . .
            # . . . .
            # # # . .
            `)
    }
    if (letter == 5 && number == 1) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # . . .
            # . . . .
            # # # . #
            `)
    }
    if (letter == 5 && number == 2) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # . . .
            # . . . #
            # # # . #
            `)
    }
    if (letter == 5 && number == 3) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # . . #
            # . . . #
            # # # . #
            `)
    }
    if (letter == 5 && number == 4) {
        basic.showLeds(`
            # # # . .
            # . . . #
            # # . . #
            # . . . #
            # # # . #
            `)
    }
    if (letter == 5 && number == 5) {
        basic.showLeds(`
            # # # . #
            # . . . #
            # # . . #
            # . . . #
            # # # . #
            `)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "move up the number of spaces corresponding to the number of times button A was pressed"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "turn right 90 degrees"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "move right the number of spaces corresponding to the number of times button B was pressed"
    )
})
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New-Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Setup Code for Teacher Below:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"micro:bit LED Display is upside-down on bot:"
)
display.rotateTo(display.Direction.UpsideDown)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Setup Code for Student Below:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"set letter variable to zero"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"set number variable to zero"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"display most current coordinates"
)
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Ver 0.2.0: 25-0326-1750"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2025 Quest Institute. All rights reserved."
    )
})
