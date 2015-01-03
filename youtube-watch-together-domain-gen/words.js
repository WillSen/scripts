console.log('in words')
var threeLetterWords = "AbyAnyBayBeyBoyBuyCayCoyCryDayDeyDryFayFeyFlyFoyFryGayGeyGoyGuyHayHeyHoyIcyIvyJayJoyKayKeyLayLeyMayNayOxyPayPlyPryRaySayShySkySlySoySpyStyThyToyTryWayWhyWryYay"
var fourLetterWords = "AblyAchyAeryAglyAhoyAiryAlkyAllyArmyArtyAshyAwayAwnyAwryBabyBevyBodyBogyBonyBoxyBrayBuoyBuryBusyCagyCakyCavyChayCityClayCloyCokyColyConyCopyCoryCosyCowyCozyDavyDefyDemyDenyDewyDexyDidyDobyDogyDopyDoryDotyDoxyDozyDrayDulyDutyEasyEddyEdgyEelyEeryEggyElmyEmmyEnvyEspyEyryFlayFleyFogyFoxyFozyFrayFumyFuryGabyGamyGapyGleyGobyGoryGrayGreyHazyHolyHomyIckyIdlyIffyIllyImmyInbyInkyInlyJivyJoeyJokyJuryLacyLadyLakyLazyLevyLilyLimyLinyLogyLoryLunyManyMazyMiryMityMolyMonyMopyNaryNavyNixyNosyOakyObeyOfayOilyOkayOldyOnlyOozyOrbyOrgyPacyPalyPatyPilyPinyPipyPityPixyPlayPloyPogyPokyPolyPonyPosyPoxyPrayPreyPunyQuayQueyRacyRelyRimyRopyRosyRubyRulySagyScrySexyShaySizySlaySpaySpryStaySteySwayTheyTidyTinyTivyTobyTodyTonyToryTowyTrayTreyTroyTypyUglyUndyUpbyVaryVeryVinyWadyWalyWanyWaryWavyWaxyWheyWilyWinyWiryZany"

var splitWordString = function(input, number){
  var output = [];
  for (var i = 0; i < input.length; i += number) {
    var localword = ""
    for (var j = 0; j < number; j++) {
      localword += input[i+j]
    };
    output.push(localword)
    var localword = ""
  };
  return output;
}

console.log(splitWordString(threeLetterWords, 3))
console.log(splitWordString(fourLetterWords, 4))


var threeLetterWordsArray = ["Aby", "Any", "Bay", "Bey", "Boy", "Buy", "Cay", "Coy", "Cry", "Day", "Dey", "Dry", "Fay", "Fey", "Fly", "Foy", "Fry", "Gay", "Gey", "Goy", "Guy", "Hay", "Hey", "Hoy", "Icy", "Ivy", "Jay", "Joy", "Kay", "Key", "Lay", "Ley", "May", "Nay", "Oxy", "Pay", "Ply", "Pry", "Ray", "Say", "Shy", "Sky", "Sly", "Soy", "Spy", "Sty", "Thy", "Toy", "Try", "Way", "Why", "Wry", "Yay"]
var fourLetterWordsArray = ["Ably", "Achy", "Aery", "Agly", "Ahoy", "Airy", "Alky", "Ally", "Army", "Arty", "Ashy", "Away", "Awny", "Awry", "Baby", "Bevy", "Body", "Bogy", "Bony", "Boxy", "Bray", "Buoy", "Bury", "Busy", "Cagy", "Caky", "Cavy", "Chay", "City", "Clay", "Cloy", "Coky", "Coly", "Cony", "Copy", "Cory", "Cosy", "Cowy", "Cozy", "Davy", "Defy", "Demy", "Deny", "Dewy", "Dexy", "Didy", "Doby", "Dogy", "Dopy", "Dory", "Doty", "Doxy", "Dozy", "Dray", "Duly", "Duty", "Easy", "Eddy", "Edgy", "Eely", "Eery", "Eggy", "Elmy", "Emmy", "Envy", "Espy", "Eyry", "Flay", "Fley", "Fogy", "Foxy", "Fozy", "Fray", "Fumy", "Fury", "Gaby", "Gamy", "Gapy", "Gley", "Goby", "Gory", "Gray", "Grey", "Hazy", "Holy", "Homy", "Icky", "Idly", "Iffy", "Illy", "Immy", "Inby", "Inky", "Inly", "Jivy", "Joey", "Joky", "Jury", "Lacy", "Lady", "Laky", "Lazy", "Levy", "Lily", "Limy", "Liny", "Logy", "Lory", "Luny", "Many", "Mazy", "Miry", "Mity", "Moly", "Mony", "Mopy", "Nary", "Navy", "Nixy", "Nosy", "Oaky", "Obey", "Ofay", "Oily", "Okay", "Oldy", "Only", "Oozy", "Orby", "Orgy", "Pacy", "Paly", "Paty", "Pily", "Piny", "Pipy", "Pity", "Pixy", "Play", "Ploy", "Pogy", "Poky", "Poly", "Pony", "Posy", "Poxy", "Pray", "Prey", "Puny", "Quay", "Quey", "Racy", "Rely", "Rimy", "Ropy", "Rosy", "Ruby", "Ruly", "Sagy", "Scry", "Sexy", "Shay", "Sizy", "Slay", "Spay", "Spry", "Stay", "Stey", "Sway", "They", "Tidy", "Tiny", "Tivy", "Toby", "Tody", "Tony", "Tory", "Towy", "Tray", "Trey", "Troy", "Typy", "Ugly", "Undy", "Upby", "Vary", "Very", "Viny", "Wady", "Waly", "Wany", "Wary", "Wavy", "Waxy", "Whey", "Wily", "Winy", "Wiry", "Zany"]

