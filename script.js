WA.chat.sendChatMessage('Hello world', 'Mr Robot');

// exit-script.ts
WA.room.onEnterZone("exit_to_frachtwerk", () => {
  console.log("Entering exit zone");
  WA.nav.goToPage("https://workadventure.stetigwandel.de/_/global/workadventure.stetigwandel.de/map-storage/frachtwerk/fw-office.tmj");
});