const TrainerList = {
    Trainer000: { //Story-Tulpa-abholen
        name: "Pascal",
        text1: "Warte mal kurz. Wo willst du hin?",
        text2: "Ohne ein Tulpa wirst du nicht weit kommen!",
        text3: "Geh am besten zu Professor Troy",
        text4: "Er braucht immer Hilfe bei der Forschung",
        text5: "Vielleicht hilft er dir...",
    },
    Trainer001: { //Erste echte Trainerin
        name: "Laura",
        text1: "Hallo, ich bin Lady Laura.",
        text2: "Ich bin eine Trainerin und fordere Dich zum Kampf heraus!",
        text3: "Hehehe...",
        text4: "",
        gold: 150,
        Tulpa1: { name: "Kaninchen", Lv: 8, HP: 70, HP_Total: 70 },
        Tulpa2: { name: "Hase", Lv: 10, HP: 90, HP_Total: 90 },
        Tulpa3: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa4: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa5: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa6: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        picture: "Trainer_02", //ClassName for Picture in CSS
    },
    Trainer002: {
        name: "Pascal",
        text1: "Halt Stop !!",
        text2: "Ich bin Hundetrainer Pascal!!",
        text3: "Du und ich kämpfen jetzt!!!",
        text4: "SOFORT!!!!!!!",
        gold: 250,
        Tulpa1: { name: "Streuner", Lv: 12, HP: 90, HP_Total: 90 },
        Tulpa2: { name: "Wachhund", Lv: 15, HP: 105, HP_Total: 105 },
        Tulpa3: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa4: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa5: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa6: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        picture: "Trainer_03",
    },
    Trainer003: {
        name: "Rocky",
        text1: "Ein Häschensammler fordert dich heraus!",
        text2: "Du wirst meine geballte Erfahrung zu spüren bekommen!",
        text3: "Meine Tulpa sind topfit mach dich bereit!",
        text4: "Ich verliere nie gegen Neulinge wie dich!",
        text5: "Zeit für ein kleines Training und du bist mein Übungsgegner!",
        gold: 250,
        Tulpa1: { name: "Treues_Ross", Lv: 50, HP: 200, HP_Total: 200 },
        Tulpa2: { name: "Streitross", Lv: 55, HP: 265, HP_Total: 265 },
        Tulpa3: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa4: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa5: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa6: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        picture: "Trainer_05",
    },
    Trainer004: {
        name: "Piekso",
        text1: "Wen haben wir denn da....!!",
        text2: "Ich habe schon lange auf einen starken Gegner gewartet.",
        text3: "Du kannst so lange nicht gegen Rachel Kämpfen bevor du nicht mich und Rocky besiegt hast",
        text4: "Deshalb lass uns nicht lange quatschen und direkt zum Wesentlichen kommen.!",
        gold: 550,
        Tulpa1: { name: "Wachhund", Lv: 45, HP: 185, HP_Total: 185 },
        Tulpa2: { name: "Schutzhund", Lv: 50, HP: 250, HP_Total: 250 },
        Tulpa3: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa4: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa5: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa6: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        picture: "Trainer_01",
    },
    ArenaLeiter001: {
        name: "Rachel",
        text1: "Okay Okay... wie ich sehe hast du meine Arena Trainer besiegt.!",
        text2: "Ich bin Rachel, ",
        text3: "Arena Leiterin von der Hohen Wiese!!",
        text4: "In meiner Arena zählt Mut mehr als Stärke!",
        text5: "Wenn du meine/n .... willst , dann zeig mir, was du kannst.!",
        text6: "Mach dich bereit.! ",
        btext: "Haha, Du schwächling, willst dich mit mir Messen?",
        btext1:"Besiege erstmal meine Arena Trainer Rocky und Piekso.",
        btext2:"Danach können wir weiter Reden. Tschau...!",
        direction: "d",
        gold: 1500,
        Tulpa1: { name: "Kleiner_Wolf", Lv: 55, HP: 215, HP_Total: 215 },
        Tulpa2: { name: "Wolf", Lv: 60, HP: 255, HP_Total: 255 },
        Tulpa3: { name: "Böser_Wolf", Lv: 65, HP: 295, HP_Total: 295 },
        Tulpa4: { name: "Wehrwolf", Lv: 70, HP: 360, HP_Total: 360 },
        Tulpa5: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        Tulpa6: { name: "", Lv: 0, HP: 0, HP_Total: 0 },
        picture: "Trainer_06",
    },
}
async function Trainer000monolog(Trainer) {
    TrainerDialogBox = document.getElementsByClassName("TrainerDialogBox")[0];
    TrainerDialogBox.innerHTML = Trainer.text1; clearInterval(moveIntervalID);
    TrainerDialogBox.classList.toggle("hidethis", false); await Click();
    TrainerDialogBox.innerHTML = Trainer.text2; await Click();
    TrainerDialogBox.innerHTML = Trainer.text3; await Click();
    TrainerDialogBox.innerHTML = Trainer.text4; await Click();
    TrainerDialogBox.innerHTML = Trainer.text5; await Click();
    TrainerDialogBox.classList.toggle("hidethis", true);
    moveIntervalID = setInterval(() => { if (activeDirection) { moveMap() }; }, moveInterval);
    activeDirection = "a"; moveMap(); await Delay(100);
    activeDirection = null; stopMovement();
}

async function ArenaMonolog(arenaName) {
    TrainerDialogBox = document.getElementsByClassName("TrainerDialogBox")[0];
    TrainerDialogBox.innerHTML = arenaName.btext; clearInterval(moveIntervalID);
    TrainerDialogBox.classList.toggle("hidethis", false);  await Click();
    TrainerDialogBox.innerHTML = arenaName.btext1; await Click();
    TrainerDialogBox.innerHTML = arenaName.btext2; await Click();
    TrainerDialogBox.classList.toggle("hidethis", true);
    moveIntervalID = setInterval(() => { if (activeDirection) { moveMap() }; }, moveInterval);
    activeDirection = arenaName.direction; moveMap(); await Delay(100);
    activeDirection = null; stopMovement();
}