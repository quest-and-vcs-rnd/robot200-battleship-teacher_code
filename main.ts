input.onButtonPressed(Button.A, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "set variable \"number\" to count up by 1"
    )
    number += 1
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "display most current coordinate"
    )
    showCoordinate()
})
function Move_1_Block () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    50,
    50,
    quest_Turn_Duration_Enum.msec_2000,
    quest_Debug_Show_Enum.Off
    )
}
input.onButtonPressed(Button.AB, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "clear screen and reset letter and number to 0,0"
    )
    letter = 0
    number = 0
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "physically pick up your bot and place it back at 0,0"
    )
    showCoordinate()
})
input.onButtonPressed(Button.B, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "set variable \"letter\" to count up by 1"
    )
    letter += 1
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "display most current coordinate"
    )
    showCoordinate()
})
function showCoordinate () {
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
            . . . # #
            # . # . #
            # . # . #
            # . # . #
            # . . # #
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
    "move up the number of spaces corresponding to the number of times button B was pressed"
    )
    if (letter == 5) {
        for (let index = 0; index < 5; index++) {
            Move_1_Block()
        }
    } else if (letter == 4) {
        for (let index = 0; index < 4; index++) {
            Move_1_Block()
        }
    } else if (letter == 3) {
        for (let index = 0; index < 3; index++) {
            Move_1_Block()
        }
    } else if (letter == 2) {
        for (let index = 0; index < 2; index++) {
            Move_1_Block()
        }
    } else if (letter == 1) {
        Move_1_Block()
    }
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "turn right 90 degrees"
    )
    quest_Motors.quest_Set_Turn_WithTimer_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    quest_Turn_Type_Enum.Pivot,
    quest_Turn_Direction_Enum.right,
    quest_Turn_Power_Enum.Lo,
    quest_Turn_Duration_Enum.msec_2000,
    quest_Debug_Show_Enum.Off
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "move right the number of spaces corresponding to the number of times button A was pressed"
    )
    if (number == 5) {
        for (let index = 0; index < 5; index++) {
            Move_1_Block()
        }
    } else if (number == 4) {
        for (let index = 0; index < 4; index++) {
            Move_1_Block()
        }
    } else if (number == 3) {
        for (let index = 0; index < 3; index++) {
            Move_1_Block()
        }
    } else if (number == 2) {
        for (let index = 0; index < 2; index++) {
            Move_1_Block()
        }
    } else if (number == 1) {
        Move_1_Block()
    }
})
let letter = 0
let number = 0
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Teacher:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"micro:bit LED Display is upside-down on bot:"
)
display.rotateTo(display.Direction.UpsideDown)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Student:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"set letter variable to zero"
)
number = 0
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"set number variable to zero"
)
letter = 0
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"show most current coordinates"
)
showCoordinate()
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Ver 0.1.0: 25-0401-1930"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2025 Quest Institute. All rights reserved."
    )
})
