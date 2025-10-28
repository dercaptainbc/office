const exit_to_frachtwerk = WA.room.area.onEnter("exit_to_frachtwerk").subscribe(() => {
    console.log("Entering exit zone");
    WA.nav.goToPage("https://workadventure.stetigwandel.de/_/global/workadventure.stetigwandel.de/map-storage/frachtwerk/fw-office.tmj");
});


exit_to_frachtwerk.unsubscribe();