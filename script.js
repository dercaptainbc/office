const exitToFrachtwerkSubcription = WA.room.onEnterLayer("exit_to_frachtwerk").subscribe(() => {
    WA.chat.sendMessage("You are about to leave to Frachtwerk Office.");
});

WA.room.onLeaveLayer("exit_to_frachtwerk").subscribe(() => {
    WA.chat.sendMessage("You have left the exit zone.");
    exitToFrachtwerkSubcription.unsubscribe();
});