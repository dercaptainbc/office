const exitToFrachtwerkSubcription = WA.room.onEnterLayer("exit_to_frachtwerk").subscribe(() => {
    WA.chat.sendChatMessage('Preparing to teleport you to Frachtwerk...', { scope: 'local', author: 'Mr Robot' });
    setTimeout(() => {
        WA.nav.goToPage("https://workadventure.stetigwandel.de/_/global/workadventure.stetigwandel.de/map-storage/frachtwerk/fw-office.tmj");
    }, 2000);
});

WA.room.onLeaveLayer("exit_to_frachtwerk").subscribe(() => {
    WA.chat.sendMessage("You have left the exit zone.");
    exitToFrachtwerkSubcription.unsubscribe();
});