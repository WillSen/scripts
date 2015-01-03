console.log('in words')
var threeLetterWords = "AbyAnyBayBeyBoyBuyCayCoyCryDayDeyDryFayFeyFlyFoyFryGayGeyGoyGuyHayHeyHoyIcyIvyJayJoyKayKeyLayLeyMayNayOxyPayPlyPryRaySayShySkySlySoySpyStyThyToyTryWayWhyWryYay"
var fourLetterWords = "AblyAchyAeryAglyAhoyAiryAlkyAllyArmyArtyAshyAwayAwnyAwryBabyBevyBodyBogyBonyBoxyBrayBuoyBuryBusyCagyCakyCavyChayCityClayCloyCokyColyConyCopyCoryCosyCowyCozyDavyDefyDemyDenyDewyDexyDidyDobyDogyDopyDoryDotyDoxyDozyDrayDulyDutyEasyEddyEdgyEelyEeryEggyElmyEmmyEnvyEspyEyryFlayFleyFogyFoxyFozyFrayFumyFuryGabyGamyGapyGleyGobyGoryGrayGreyHazyHolyHomyIckyIdlyIffyIllyImmyInbyInkyInlyJivyJoeyJokyJuryLacyLadyLakyLazyLevyLilyLimyLinyLogyLoryLunyManyMazyMiryMityMolyMonyMopyNaryNavyNixyNosyOakyObeyOfayOilyOkayOldyOnlyOozyOrbyOrgyPacyPalyPatyPilyPinyPipyPityPixyPlayPloyPogyPokyPolyPonyPosyPoxyPrayPreyPunyQuayQueyRacyRelyRimyRopyRosyRubyRulySagyScrySexyShaySizySlaySpaySpryStaySteySwayTheyTidyTinyTivyTobyTodyTonyToryTowyTrayTreyTroyTypyUglyUndyUpbyVaryVeryVinyWadyWalyWanyWaryWavyWaxyWheyWilyWinyWiryZany"

var splitWordString = function(input, number){
  var output = [];
  for (var i = 0; i < input.length; i += number) {
    console.log(i)
    var localword = ""
    for (var j = 0; j < number; j++) {
      console.log('localword', localword)
      console.log('i+j', i+j)
      console.log(input[i+j])
      localword += input[i+j]
      console.log(localword)
    };
    output.push(localword)
    var localword = ""
  };
  return output;
}

console.log(splitWordString(threeLetterWords, 3))
console.log(splitWordString(fourLetterWords, 4))


var threeLetterWordsArray = ["Aby", "Any", "Bay", "Bey", "Boy", "Buy", "Cay", "Coy", "Cry", "Day", "Dey", "Dry", "Fay", "Fey", "Fly", "Foy", "Fry", "Gay", "Gey", "Goy", "Guy", "Hay", "Hey", "Hoy", "Icy", "Ivy", "Jay", "Joy", "Kay", "Key", "Lay", "Ley", "May", "Nay", "Oxy", "Pay", "Ply", "Pry", "Ray", "Say", "Shy", "Sky", "Sly", "Soy", "Spy", "Sty", "Thy", "Toy", "Try", "Way", "Why", "Wry", "Yay"]