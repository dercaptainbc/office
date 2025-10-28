WA.room.onEnterLayer("exit_to_frachtwerk").subscribe(() => {
    console.log("Entering exit zone");
    //WA.nav.goToPage("https://workadventure.stetigwandel.de");
});

WA.room.onLeaveLayer("exit_to_frachtwerk").subscribe(() => {
    console.log("Leaving exit zone");
});