
let gamepadIndex;
window.addEventListener('gamepadconnected', (event) => {
    gamepadIndex = event.gamepad.index;
});

menuPos = 0
menuLimit = false;
inFirstMenu = true;

setInterval(() => {
    if(gamepadIndex !== undefined) {
        
        const myGamepad = navigator.getGamepads()[gamepadIndex];
       
        myGamepad.buttons.map(e => e.pressed).forEach((isPressed, buttonIndex) => {
            if(isPressed) {
                //menu navigation
                if (buttonIndex == dpaddown) {
                    menuPos++
                    if (menuPos > 1 || menuPos < 0) {
                        menuPos = 1
                    }
                    else {
                        playSound(menuCycle, 1 ,0);
                        console.log(menuPos)
                    }
                    
                }
                else if (buttonIndex == dpadup) {
                    menuPos--
                    if (menuPos > 1 || menuPos < 0) {
                        menuPos = 0
                    }
                    else {
                        playSound(menuCycle, 1 ,0);
                        console.log(menuPos)
                    }
                    
                }
                //menu navigation end
                //menu select start
                if (buttonIndex == a && menuPos == 1) {
                    //console.log("options menu")
                    if (inFirstMenu == true) {
                        console.log("options menu")
                        
                        inFirstMenu = false
                        playSound(selectSnd, 1 ,0);
                        menuPos = null
                    }
                }
                else if (buttonIndex == a && menuPos == 0) {
                    //console.log("memory card")
                    if (inFirstMenu == true) {
                        console.log("memory card menu")
                        playSound(selectSnd, 1 ,0);
                        inFirstMenu = false
                    }
                }
            } 
        })
    }
}, 100)