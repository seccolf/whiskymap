
const whiskies=[

    {
    family: "5",
    color: "rgba(239, 218, 156, 1)",
    members:[
      {name: "Glenmorangie 10 Original", x: 0.484, y:0.789, image:"images/Glenmorangie10Original.jpg", info:"144 reviewers have identified notes of vanilla, caramel, mild spice, butterscotch and honey in this whisky", score:"8.40", scorestddev:"0.41", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Glenfiddich 12", x: 0.349, y:0.880, image:"images/Glenfiddich12.jpg", info:"139 reviewers have identified notes of honey, sweet, vanilla, spice and cherry in this whisky", score:"8.08", scorestddev:"0.26", family:"C", examples:"e.g., Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Glenlivet 12", x: 0.427, y:0.857, image:"images/Glenlivet12.jpg", info:"127 reviewers have identified notes of vanilla, oak, honey, floral and spice in this whisky", score:"8.06", scorestddev:"0.33", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Glenlivet 16 Nadurra", x: 0.442, y:0.851, image:"images/Glenlivet16Nadurra.jpg", info:"93 reviewers have identified notes of vanilla, creamy, cinnamon, smoke and spice in this whisky", score:"8.83", scorestddev:"0.22", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Johnnie Walker Black Label", x: 0.325, y:0.781, image:"images/JohnnieWalkerBlackLabel.jpg", info:"95 reviewers have identified notes of vanilla, smooth, peat, caramel and smoke in this whisky", score:"8.23", scorestddev:"0.44", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Old Pulteney 12", x: 0.335, y:0.707, image:"images/OldPulteney12.jpg", info:"89 reviewers have identified notes of brine, honey, salty, salt caramel and spice in this whisky", score:"8.33", scorestddev:"0.46", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Dalwhinnie 15", x: 0.356, y:0.823, image:"images/Dalwhinnie15.jpg", info:"78 reviewers have identified notes of honey, vanilla, smoke, sweet and smooth in this whisky", score:"8.51", scorestddev:"0.38", family:"C", examples:"e.g., Glenfiddich 12 and Aberfeldy 12"},
  {name: "AnCnoc 12", x: 0.447, y:0.807, image:"images/AnCnoc12.jpg", info:"69 reviewers have identified notes of sweet, smooth, citrus, rich and spice in this whisky", score:"8.50", scorestddev:"0.37", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Monkey Shoulder", x: 0.346, y:0.886, image:"images/MonkeyShoulder.jpg", info:"53 reviewers have identified notes of vanilla, oak, malt, honey and sweet in this whisky", score:"8.28", scorestddev:"0.38", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Chivas Regal 12", x: 0.429, y:0.826, image:"images/ChivasRegal12.jpg", info:"56 reviewers have identified notes of honey, sweet, vanilla, spice and caramel in this whisky", score:"7.69", scorestddev:"0.48", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Cragganmore 12", x: 0.396, y:0.714, image:"images/Cragganmore12.jpg", info:"51 reviewers have identified notes of honey, sweet, peat, cereal and smooth in this whisky", score:"8.30", scorestddev:"0.30", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Macallan 10 Fine Oak", x: 0.518, y:0.832, image:"images/Macallan10FineOak.jpg", info:"37 reviewers have identified notes of oak, sweet, raisin, honey and malt in this whisky", score:"8.27", scorestddev:"0.34", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Glenkinchie 12", x: 0.424, y:0.829, image:"images/Glenkinchie12.jpg", info:"37 reviewers have identified notes of honey, sweet, vanilla, smoke and citrus in this whisky", score:"8.20", scorestddev:"0.27", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Jura 10 Origin", x: 0.410, y:0.696, image:"images/Jura10Origin.jpg", info:"36 reviewers have identified notes of sweet, peat, honey, oak and smoke in this whisky", score:"7.95", scorestddev:"0.35", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Cardhu 12", x: 0.350, y:0.733, image:"images/Cardhu12.jpg", info:"34 reviewers have identified notes of sweet, spice, vanilla, smoke and citrus in this whisky", score:"8.05", scorestddev:"0.50", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Aberfeldy 12", x: 0.418, y:0.761, image:"images/Aberfeldy12.jpg", info:"33 reviewers have identified notes of sweet, smoke, apple, pepper and malt in this whisky", score:"8.12", scorestddev:"0.33", family:"C", examples:"e.g., Glenfiddich 12 and Dalwhinnie 15"},
  {name: "Hakushu 12", x: 0.404, y:0.836, image:"images/Hakushu12.jpg", info:"27 reviewers have identified notes of spice, vanilla, creamy, sweet and smoke in this whisky", score:"8.72", scorestddev:"0.24", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Aberlour 18", x: 0.406, y:0.819, image:"images/Aberlour18.jpg", info:"24 reviewers have identified notes of sherry, caramel, cherry, honey and rich in this whisky", score:"8.74", scorestddev:"0.28", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Speyburn 10", x: 0.346, y:0.818, image:"images/Speyburn10.jpg", info:"25 reviewers have identified notes of honey, caramel, peat, pepper and fruit in this whisky", score:"8.06", scorestddev:"0.33", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},
  {name: "Yamazaki 18", x: 0.414, y:0.815, image:"images/Yamazaki18.jpg", info:"14 reviewers have identified notes of sweet, balance, raisin, citrus and complex in this whisky", score:"9.11", scorestddev:"0.27", family:"C", examples:"e.g., Glenfiddich 12, Aberfeldy 12 and Dalwhinnie 15"},

]
},


    {
    family: "1",
    color: "rgba(255, 87, 51, 1)",
    members:[
      {name: "Glenmorangie 12 Quinta Ruban", x: 0.597, y:0.620, image:"images/Glenmorangie12QuintaRuban.jpg", info:"136 reviewers have identified notes of spice, smooth, honey, rich and creamy in this whisky", score:"8.58", scorestddev:"0.42", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Balvenie 12 Doublewood", x: 0.561, y:0.714, image:"images/Balvenie12Doublewood.jpg", info:"125 reviewers have identified notes of honey, vanilla, butter, leather and spice in this whisky", score:"8.40", scorestddev:"0.32", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "GlenDronach 12 Original", x: 0.680, y:0.471, image:"images/GlenDronach12Original.jpg", info:"97 reviewers have identified notes of spice, vanilla, fruit, creamy and smooth in this whisky", score:"8.59", scorestddev:"0.24", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "GlenDronach 15 Revival", x: 0.738, y:0.539, image:"images/GlenDronach15Revival.jpg", info:"94 reviewers have identified notes of spice, rich, creamy, raisin and caramel in this whisky", score:"8.84", scorestddev:"0.27", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenfarclas 105 Cask Strength", x: 0.652, y:0.533, image:"images/Glenfarclas105CaskStrength.jpg", info:"92 reviewers have identified notes of spice, oak, sherry, fig and cinnamon in this whisky", score:"8.73", scorestddev:"0.36", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenfiddich 15", x: 0.587, y:0.680, image:"images/Glenfiddich15.jpg", info:"83 reviewers have identified notes of honey, spice, vanilla, sweet and fruit in this whisky", score:"8.54", scorestddev:"0.29", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenmorangie 12 Nectar D'Or", x: 0.655, y:0.665, image:"images/Glenmorangie12NectarD'Or.jpg", info:"80 reviewers have identified notes of honey, sweet, vanilla, malt and fruit in this whisky", score:"8.70", scorestddev:"0.29", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenmorangie 12 Lasanta", x: 0.666, y:0.640, image:"images/Glenmorangie12Lasanta.jpg", info:"81 reviewers have identified notes of honey, sweet, vanilla, spice and sherry in this whisky", score:"8.39", scorestddev:"0.36", family:"A", examples:"e.g., Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Aberlour 12 Double Cask Matured", x: 0.570, y:0.754, image:"images/Aberlour12DoubleCaskMatured.jpg", info:"69 reviewers have identified notes of sherry, sweet, fruit, spice and raisin in this whisky", score:"8.35", scorestddev:"0.25", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenfiddich 18", x: 0.584, y:0.725, image:"images/Glenfiddich18.jpg", info:"64 reviewers have identified notes of vanilla, sweet, apple, oak and cinnamon in this whisky", score:"8.55", scorestddev:"0.37", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Bunnahabhain 18", x: 0.560, y:0.459, image:"images/Bunnahabhain18.jpg", info:"56 reviewers have identified notes of toffee, smoke, salt, chocolate and oak in this whisky", score:"8.99", scorestddev:"0.21", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Balvenie 21 Portwood", x: 0.630, y:0.686, image:"images/Balvenie21Portwood.jpg", info:"55 reviewers have identified notes of vanilla, sherry, honey, oak and port in this whisky", score:"8.76", scorestddev:"0.37", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenfarclas 25", x: 0.569, y:0.586, image:"images/Glenfarclas25.jpg", info:"49 reviewers have identified notes of vanilla, sherry, oak, spice and honey in this whisky", score:"8.75", scorestddev:"0.28", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenfarclas 17", x: 0.559, y:0.582, image:"images/Glenfarclas17.jpg", info:"48 reviewers have identified notes of sherry, cinnamon, honey, sweet and oak in this whisky", score:"8.74", scorestddev:"0.26", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenfarclas 15", x: 0.604, y:0.638, image:"images/Glenfarclas15.jpg", info:"44 reviewers have identified notes of spice, sherry, oak, honey and vanilla in this whisky", score:"8.63", scorestddev:"0.45", family:"A", examples:"e.g., Glenmorangie 12 Lasanta and Macallan 12 Double Cask"},
  {name: "Balvenie 17 Doublewood", x: 0.764, y:0.634, image:"images/Balvenie17Doublewood.jpg", info:"43 reviewers have identified notes of vanilla, honey, oak, creamy and cinnamon in this whisky", score:"8.63", scorestddev:"0.31", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Balvenie 12 Single Barrel", x: 0.630, y:0.709, image:"images/Balvenie12SingleBarrel.jpg", info:"40 reviewers have identified notes of vanilla, honey, caramel, sweet and apple in this whisky", score:"8.72", scorestddev:"0.37", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenfarclas 21", x: 0.713, y:0.515, image:"images/Glenfarclas21.jpg", info:"39 reviewers have identified notes of spice, honey, oak, vanilla and sherry in this whisky", score:"8.65", scorestddev:"0.28", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Redbreast 12", x: 0.605, y:0.787, image:"images/Redbreast12.jpg", info:"37 reviewers have identified notes of honey, spice, apple, oak and vanilla in this whisky", score:"8.71", scorestddev:"0.41", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Edradour 10", x: 0.536, y:0.460, image:"images/Edradour10.jpg", info:"33 reviewers have identified notes of sweet, oak, chocolate, sherry and spice in this whisky", score:"8.24", scorestddev:"0.68", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Macallan 15 Fine Oak", x: 0.607, y:0.677, image:"images/Macallan15FineOak.jpg", info:"29 reviewers have identified notes of oak, honey, vanilla, spice and sherry in this whisky", score:"8.45", scorestddev:"0.48", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Arran 18", x: 0.671, y:0.552, image:"images/Arran18.jpg", info:"25 reviewers have identified notes of oak, fruit, cinnamon, spice and caramel in this whisky", score:"8.93", scorestddev:"0.15", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Macallan 12 Double Cask", x: 0.619, y:0.656, image:"images/Macallan12DoubleCask.jpg", info:"25 reviewers have identified notes of oak, honey, raisin, cinnamon and vanilla in this whisky", score:"8.42", scorestddev:"0.34", family:"A", examples:"e.g., Glenmorangie 12 Lasanta and Glenfarclas 15"},
  {name: "Chivas Regal 18", x: 0.530, y:0.737, image:"images/ChivasRegal18.jpg", info:"12 reviewers have identified notes of honey, vanilla, smoke, spice and malt in this whisky", score:"8.12", scorestddev:"0.58", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},

]
},


    {
    family: "7",
    color: "rgba(255, 195, 0, 1)",
    members:[
      {name: "Macallan 12 Sherry", x: 0.436, y:0.714, image:"images/Macallan12Sherry.jpg", info:"109 reviewers have identified notes of sherry, oak, sweet, metallic and dark fruit in this whisky", score:"8.55", scorestddev:"0.41", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Balvenie 14 Caribbean Cask", x: 0.563, y:0.697, image:"images/Balvenie14CaribbeanCask.jpg", info:"109 reviewers have identified notes of vanilla, sweet, spice, rum and oak in this whisky", score:"8.53", scorestddev:"0.34", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Glenfarclas 12", x: 0.440, y:0.701, image:"images/Glenfarclas12.jpg", info:"87 reviewers have identified notes of spice, vanilla, sweet, oak and sherry in this whisky", score:"8.58", scorestddev:"0.32", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Macallan Cask Strength", x: 0.528, y:0.594, image:"images/MacallanCaskStrength.jpg", info:"77 reviewers have identified notes of raisin, sherry, chocolate, spice and oak in this whisky", score:"9.04", scorestddev:"0.38", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Aberlour 12", x: 0.505, y:0.728, image:"images/Aberlour12NonChillFiltered.jpg", info:"63 reviewers have identified notes of raisin, sweet, nutmeg, sherry and plum in this whisky", score:"8.83", scorestddev:"0.22", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Auchentoshan Three Wood", x: 0.468, y:0.663, image:"images/AuchentoshanThreeWood.jpg", info:"60 reviewers have identified notes of rich, smooth, honey, sherry and cherry in this whisky", score:"8.28", scorestddev:"0.41", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Dalmore 12", x: 0.537, y:0.664, image:"images/Dalmore12.jpg", info:"49 reviewers have identified notes of sherry, honey, dark chocolate, sweet and oak in this whisky", score:"8.34", scorestddev:"0.31", family:"B", examples:"e.g., Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Amrut Fusion", x: 0.473, y:0.641, image:"images/AmrutFusion.jpg", info:"44 reviewers have identified notes of vanilla, smoke, peat, oak and spice in this whisky", score:"8.89", scorestddev:"0.23", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Aberlour 16 Double Cask Matured", x: 0.437, y:0.694, image:"images/Aberlour16DoubleCaskMatured.jpg", info:"43 reviewers have identified notes of vanilla, oak, sweet, sherry and fruit in this whisky", score:"8.61", scorestddev:"0.17", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Auchentoshan 12", x: 0.371, y:0.705, image:"images/Auchentoshan12.jpg", info:"44 reviewers have identified notes of vanilla, caramel, sweet, honey and fruit in this whisky", score:"8.29", scorestddev:"0.27", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Bruichladdich Black Art 2.2", x: 0.318, y:0.693, image:"images/BruichladdichBlackArt2.2.jpg", info:"28 reviewers have identified notes of sherry, oak, spice, sweet and smoke in this whisky", score:"9.03", scorestddev:"0.24", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Aberlour A'bunadh", x: 0.442, y:0.761, image:"images/AberlourA'bunadhBatch#45.jpg", info:"24 reviewers have identified notes of sherry, spice, sweet, cherry and chocolate in this whisky", score:"8.99", scorestddev:"0.22", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Glenmorangie 18", x: 0.374, y:0.802, image:"images/Glenmorangie18.jpg", info:"24 reviewers have identified notes of oak, honey, sweet, fruit and vanilla in this whisky", score:"8.72", scorestddev:"0.27", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "BenRiach 12 Sherry Matured", x: 0.483, y:0.764, image:"images/BenRiach12SherryMatured.jpg", info:"22 reviewers have identified notes of sherry, spice, sweet, cherry and oak in this whisky", score:"8.63", scorestddev:"0.21", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},
  {name: "Oban 18", x: 0.324, y:0.563, image:"images/Oban18.jpg", info:"21 reviewers have identified notes of vanilla, apple, honey, brown sugar and toffee in this whisky", score:"8.77", scorestddev:"0.21", family:"B", examples:"e.g., Dalmore 12, Auchentoshan 12 and Aberlour A'bunadh"},

]
},


    {
    family: "6",
    color: "rgba(255, 87, 51, 1)",
    members:[
      {name: "Glenlivet 18", x: 0.699, y:0.674, image:"images/Glenlivet18.jpg", info:"65 reviewers have identified notes of oak, vanilla, honey, ginger and citrus in this whisky", score:"8.56", scorestddev:"0.24", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Arran 10", x: 0.643, y:0.644, image:"images/Arran10.jpg", info:"64 reviewers have identified notes of vanilla, spice, honey, tropical fruit and lemon in this whisky", score:"8.55", scorestddev:"0.27", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenlivet 15 French Oak Reserve", x: 0.674, y:0.752, image:"images/Glenlivet15FrenchOakReserve.jpg", info:"65 reviewers have identified notes of oak, vanilla, smooth, sweet and apple in this whisky", score:"8.37", scorestddev:"0.27", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Nikka Whisky From The Barrel", x: 0.612, y:0.721, image:"images/NikkaWhiskyFromTheBarrel.jpg", info:"57 reviewers have identified notes of caramel, oak, vanilla, toffee and nutty in this whisky", score:"8.79", scorestddev:"0.34", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Bruichladdich The Classic Laddie", x: 0.617, y:0.501, image:"images/BruichladdichTheClassicLaddieScottishBarley.jpg", info:"57 reviewers have identified notes of vanilla, malt, sweet, brine and green apple in this whisky", score:"8.56", scorestddev:"0.33", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Tomatin 12", x: 0.730, y:0.601, image:"images/Tomatin12.jpg", info:"43 reviewers have identified notes of sweet, cinnamon, oak, caramel and vanilla in this whisky", score:"8.09", scorestddev:"0.40", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Arran 14", x: 0.726, y:0.586, image:"images/Arran14.jpg", info:"40 reviewers have identified notes of sweet, malty, vanilla, spice and oak in this whisky", score:"8.68", scorestddev:"0.25", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Craigellachie 13", x: 0.534, y:0.535, image:"images/Craigellachie13.jpg", info:"39 reviewers have identified notes of oak, vanilla, sweet, caramel and cinnamon in this whisky", score:"8.41", scorestddev:"0.51", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Glenmorangie Signet", x: 0.628, y:0.855, image:"images/GlenmorangieSignet.jpg", info:"35 reviewers have identified notes of chocolate, coffee, spice, oak and dark chocolate in this whisky", score:"8.95", scorestddev:"0.35", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "AnCnoc 16", x: 0.689, y:0.776, image:"images/AnCnoc16.jpg", info:"23 reviewers have identified notes of honey, vanilla, oak, sweet and spice in this whisky", score:"8.73", scorestddev:"0.33", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},
  {name: "Hibiki Harmony", x: 0.536, y:0.886, image:"images/HibikiJapaneseHarmony.jpg", info:"22 reviewers have identified notes of honey, vanilla, apple, caramel and floral in this whisky", score:"8.34", scorestddev:"0.48", family:"A", examples:"e.g., Glenmorangie 12 Lasanta, Macallan 12 Double Cask and Glenfarclas 15"},

]
},


    {
    family: "4",
    color: "rgba(102, 99, 90, 1)",
    members:[
      {name: "Lagavulin 16", x: 0.263, y:0.319, image:"images/Lagavulin16.jpg", info:"189 reviewers have identified notes of peat, smoke, sherry, leather and vanilla in this whisky", score:"9.10", scorestddev:"0.35", family:"E", examples:"e.g., Ardbeg 10 and Laphroaig 10"},
  {name: "Ardbeg 10", x: 0.227, y:0.361, image:"images/Ardbeg10.jpg", info:"189 reviewers have identified notes of smoke, peat, oak, pepper and vanilla in this whisky", score:"8.88", scorestddev:"0.35", family:"E", examples:"e.g., Lagavulin 16 and Laphroaig 10"},
  {name: "Talisker 10", x: 0.253, y:0.371, image:"images/Talisker10.jpg", info:"185 reviewers have identified notes of peat, smoke, oak, black pepper and brine in this whisky", score:"8.82", scorestddev:"0.22", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Laphroaig 10", x: 0.115, y:0.310, image:"images/Laphroaig10.jpg", info:"168 reviewers have identified notes of peat, smoke, salt, vanilla and iodine in this whisky", score:"8.78", scorestddev:"0.29", family:"E", examples:"e.g., Lagavulin 16 and Ardbeg 10"},
  {name: "Laphroaig Quarter Cask", x: 0.249, y:0.377, image:"images/LaphroaigQuarterCask.jpg", info:"164 reviewers have identified notes of peat, rich, smoke, spice and creamy in this whisky", score:"8.96", scorestddev:"0.30", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Caol Ila 12", x: 0.209, y:0.470, image:"images/CaolIla12.jpg", info:"121 reviewers have identified notes of fruit, spice, rich, peat and creamy in this whisky", score:"8.72", scorestddev:"0.18", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Ardbeg Corryvreckan", x: 0.348, y:0.292, image:"images/ArdbegCorryvreckan.jpg", info:"112 reviewers have identified notes of fruit, vanilla, spice, smoke and peat in this whisky", score:"9.06", scorestddev:"0.33", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Kilchoman Machir Bay", x: 0.225, y:0.528, image:"images/KilchomanMachirBay.jpg", info:"89 reviewers have identified notes of peat, smoke, vanilla, spice and apple in this whisky", score:"8.77", scorestddev:"0.24", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Laphroaig 18", x: 0.305, y:0.245, image:"images/Laphroaig18.jpg", info:"86 reviewers have identified notes of peat, smoke, sweet, vanilla and brine in this whisky", score:"9.01", scorestddev:"0.26", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Ledaig 10", x: 0.258, y:0.419, image:"images/Ledaig10.jpg", info:"79 reviewers have identified notes of smoke, vanilla, brine, pepper and peat in this whisky", score:"8.49", scorestddev:"0.40", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Bowmore 12", x: 0.248, y:0.456, image:"images/Bowmore12.jpg", info:"66 reviewers have identified notes of smoke, peat, vanilla, salt and caramel in this whisky", score:"8.38", scorestddev:"0.30", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Lagavulin 8", x: 0.267, y:0.299, image:"images/Lagavulin8.jpg", info:"58 reviewers have identified notes of smoke, peat, sweet, cereal and pepper in this whisky", score:"8.85", scorestddev:"0.25", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Talisker Storm", x: 0.309, y:0.279, image:"images/TaliskerStorm.jpg", info:"50 reviewers have identified notes of smoke, pepper, sweet, brine and peat in this whisky", score:"8.59", scorestddev:"0.26", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Talisker 57° North", x: 0.275, y:0.410, image:"images/Talisker57°North.jpg", info:"42 reviewers have identified notes of smoke, spice, honey, sweet and pepper in this whisky", score:"8.92", scorestddev:"0.26", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Port Charlotte 10", x: 0.362, y:0.341, image:"images/PortCharlotte10.jpg", info:"43 reviewers have identified notes of peat, sweet, honey, smoke and vanilla in this whisky", score:"8.70", scorestddev:"0.26", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Laphroaig Lore", x: 0.311, y:0.260, image:"images/LaphroaigLore.jpg", info:"41 reviewers have identified notes of smoke, peat, ash, vanilla and chocolate in this whisky", score:"8.68", scorestddev:"0.31", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Ardbeg An Oa", x: 0.352, y:0.421, image:"images/ArdbegAnOa.jpg", info:"39 reviewers have identified notes of smoke, peat, honey, vanilla and sweet in this whisky", score:"8.80", scorestddev:"0.26", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Ardbeg 5 Wee Beastie", x: 0.147, y:0.378, image:"images/Ardbeg5WeeBeastie.jpg", info:"38 reviewers have identified notes of smoke, peat, salty, brine and pepper in this whisky", score:"8.79", scorestddev:"0.25", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},
  {name: "Talisker 25", x: 0.296, y:0.396, image:"images/Talisker25.jpg", info:"25 reviewers have identified notes of smoke, oak, pepper, peat and spice in this whisky", score:"8.94", scorestddev:"0.29", family:"E", examples:"e.g., Lagavulin 16, Ardbeg 10 and Laphroaig 10"},

]
},


    {
    family: "0",
    color: "rgba(88, 24, 69, 1)",
    members:[
      {name: "Ardbeg Uigeadail", x: 0.381, y:0.192, image:"images/ArdbegUigeadail.jpg", info:"192 reviewers have identified notes of peat, smoke, sherry, salt and iodine in this whisky", score:"9.19", scorestddev:"0.37", family:"F", examples:"e.g., Laphroaig PX Cask, Bowmore 15 and Springbank 15"},
  {name: "Springbank 15", x: 0.452, y:0.350, image:"images/Springbank15.jpg", info:"72 reviewers have identified notes of smoke, honey, sherry, sweet and apple in this whisky", score:"8.78", scorestddev:"0.23", family:"F", examples:"e.g., Laphroaig PX Cask and Bowmore 15"},
  {name: "Laphroaig Triplewood", x: 0.400, y:0.231, image:"images/LaphroaigTriplewood.jpg", info:"60 reviewers have identified notes of peat, sweet, smoke, sherry and spice in this whisky", score:"8.66", scorestddev:"0.35", family:"F", examples:"e.g., Laphroaig PX Cask, Bowmore 15 and Springbank 15"},
  {name: "Talisker 18", x: 0.558, y:0.022, image:"images/Talisker18.jpg", info:"48 reviewers have identified notes of smoke, brine, vanilla, pepper and sweet in this whisky", score:"9.09", scorestddev:"0.22", family:"F", examples:"e.g., Laphroaig PX Cask, Bowmore 15 and Springbank 15"},
  {name: "Laphroaig PX Cask", x: 0.438, y:0.172, image:"images/LaphroaigPXCask.jpg", info:"46 reviewers have identified notes of peat, sweet, smoke, iodine and sherry in this whisky", score:"8.54", scorestddev:"0.62", family:"F", examples:"e.g., Bowmore 15 and Springbank 15"},
  {name: "Octomore 6.1", x: 0.475, y:0.116, image:"images/Octomore6.1.jpg", info:"44 reviewers have identified notes of smoke, peat, brine, sweet and spice in this whisky", score:"8.79", scorestddev:"0.30", family:"F", examples:"e.g., Laphroaig PX Cask, Bowmore 15 and Springbank 15"},
  {name: "Bowmore 15", x: 0.396, y:0.311, image:"images/Bowmore15Darkest.jpg", info:"45 reviewers have identified notes of peat, smoke, chocolate, raisin and sherry in this whisky", score:"8.54", scorestddev:"0.35", family:"F", examples:"e.g., Laphroaig PX Cask and Springbank 15"},
  {name: "Kilchoman Sanaig", x: 0.622, y:0.045, image:"images/KilchomanSanaig.jpg", info:"31 reviewers have identified notes of smoke, peat, sweet, brown sugar and oak in this whisky", score:"8.70", scorestddev:"0.25", family:"F", examples:"e.g., Laphroaig PX Cask, Bowmore 15 and Springbank 15"},
  {name: "Springbank 18", x: 0.638, y:0.075, image:"images/Springbank18.jpg", info:"27 reviewers have identified notes of vanilla, smoke, spice, sweet and oak in this whisky", score:"8.95", scorestddev:"0.22", family:"F", examples:"e.g., Laphroaig PX Cask, Bowmore 15 and Springbank 15"},
  {name: "Highland Park 25", x: 0.468, y:0.279, image:"images/HighlandPark25.jpg", info:"26 reviewers have identified notes of peat, smoke, vanilla, honey and oak in this whisky", score:"9.18", scorestddev:"0.18", family:"F", examples:"e.g., Laphroaig PX Cask, Bowmore 15 and Springbank 15"},

]
},


    {
    family: "2",
    color: "rgba(175, 124, 3, 1)",
    members:[
      {name: "Highland Park 12", x: 0.285, y:0.638, image:"images/HighlandPark12.jpg", info:"171 reviewers have identified notes of honey, smoke, peat, vanilla and caramel in this whisky", score:"8.59", scorestddev:"0.34", family:"D", examples:"e.g., Oban 14 and Bunnahabain 12"},
  {name: "Bunnahabhain 12", x: 0.384, y:0.584, image:"images/Bunnahabhain12.jpg", info:"145 reviewers have identified notes of rich, creamy, spice, smooth and fruit in this whisky", score:"8.70", scorestddev:"0.26", family:"D", examples:"e.g., Highland Park 12 and Oban 14 "},
  {name: "Springbank 10", x: 0.413, y:0.455, image:"images/Springbank10.jpg", info:"115 reviewers have identified notes of rich, smoke, fruit, vanilla and pineapple in this whisky", score:"8.72", scorestddev:"0.28", family:"D", examples:"e.g., Highland Park 12, Bunnahabain 12 and Oban 14"},
  {name: "Oban 14", x: 0.298, y:0.631, image:"images/Oban14.jpg", info:"106 reviewers have identified notes of salty, honey, spice, orange and malt in this whisky", score:"8.48", scorestddev:"0.38", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Clynelish 14", x: 0.504, y:0.609, image:"images/Clynelish14.jpg", info:"92 reviewers have identified notes of vanilla, honey, spice, wax and black pepper in this whisky", score:"8.73", scorestddev:"0.29", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Highland Park 18", x: 0.431, y:0.414, image:"images/HighlandPark18.jpg", info:"86 reviewers have identified notes of smoke, honey, toffee, fruit and vanilla in this whisky", score:"9.03", scorestddev:"0.23", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Johnnie Walker Green Label", x: 0.391, y:0.535, image:"images/JohnnieWalkerGreenLabel.jpg", info:"90 reviewers have identified notes of sweet, vanilla, honey, spice and smoke in this whisky", score:"8.55", scorestddev:"0.34", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Benromach 10", x: 0.433, y:0.546, image:"images/Benromach10.jpg", info:"67 reviewers have identified notes of smoke, peat, rich, creamy and vanilla in this whisky", score:"8.62", scorestddev:"0.33", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Longrow Peated", x: 0.266, y:0.616, image:"images/LongrowPeated.jpg", info:"55 reviewers have identified notes of smoke, peat, honey, brine and oily in this whisky", score:"8.74", scorestddev:"0.20", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Yamazaki 12", x: 0.453, y:0.621, image:"images/Yamazaki12.jpg", info:"55 reviewers have identified notes of oak, honey, spice, sweet and caramel in this whisky", score:"8.67", scorestddev:"0.29", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Johnnie Walker Blue Label", x: 0.447, y:0.540, image:"images/JohnnieWalkerBlueLabel.jpg", info:"51 reviewers have identified notes of smoke, toffee, apple, vanilla and oak in this whisky", score:"8.53", scorestddev:"0.48", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Port Charlotte Scottish Barley", x: 0.328, y:0.381, image:"images/PortCharlotteScottishBarley.jpg", info:"48 reviewers have identified notes of smoke, peat, vanilla, malt and barley in this whisky", score:"8.70", scorestddev:"0.26", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Jura Superstition", x: 0.355, y:0.601, image:"images/JuraSuperstition.jpg", info:"45 reviewers have identified notes of sweet, spice, honey, peat and smoke in this whisky", score:"8.28", scorestddev:"0.45", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Kilkerran 12", x: 0.467, y:0.441, image:"images/Kilkerran12.jpg", info:"41 reviewers have identified notes of vanilla, honey, lemon, creamy and sweet in this whisky", score:"8.84", scorestddev:"0.22", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Compass Box Peat Monster", x: 0.437, y:0.493, image:"images/CompassBoxPeatMonster.jpg", info:"40 reviewers have identified notes of smoke, peat, vanilla, spice and honey in this whisky", score:"8.73", scorestddev:"0.25", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Tobermory 10", x: 0.433, y:0.651, image:"images/Tobermory10.jpg", info:"38 reviewers have identified notes of smoke, sweet, oak, vanilla and apple in this whisky", score:"8.22", scorestddev:"0.39", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Johnnie Walker Double Black", x: 0.358, y:0.572, image:"images/JohnnieWalkerDoubleBlack.jpg", info:"31 reviewers have identified notes of smoke, vanilla, peat, spice and sweet in this whisky", score:"8.35", scorestddev:"0.40", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Johnnie Walker Gold Label", x: 0.474, y:0.551, image:"images/JohnnieWalkerGoldLabel.jpg", info:"28 reviewers have identified notes of smoke, spice, vanilla, sweet and honey in this whisky", score:"8.28", scorestddev:"0.39", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},
  {name: "Octomore 7.2", x: 0.464, y:0.478, image:"images/Octomore7.2.jpg", info:"24 reviewers have identified notes of peat, smoke, fruit, spice and vanilla in this whisky", score:"8.89", scorestddev:"0.44", family:"D", examples:"e.g., Highland Park 12, Oban 14 and Bunnahabain 12"},

]
},


    {
    family: "3",
    color: "rgba(144, 12, 63, 1)",
    members:[
      {name: "GlenDronach 18 Allardice", x: 0.865, y:0.323, image:"images/GlenDronach18Allardice.jpg", info:"54 reviewers have identified notes of dark chocolate, spice, cinnamon, raisin and clove in this whisky", score:"8.83", scorestddev:"0.37", family:"G", examples:"e.g., Dalmore 15, Glenallachie 15 and Macallan 18"},
  {name: "Tomatin 18", x: 0.857, y:0.342, image:"images/Tomatin18.jpg", info:"39 reviewers have identified notes of oak, spice, toffee, orange and vanilla in this whisky", score:"8.65", scorestddev:"0.20", family:"G", examples:"e.g., Dalmore 15, Glenallachie 15 and Macallan 18"},
  {name: "Macallan 18", x: 0.849, y:0.399, image:"images/Macallan18Sherry.jpg", info:"32 reviewers have identified notes of oak, sherry, vanilla, toffee and sweet in this whisky", score:"8.92", scorestddev:"0.31", family:"G", examples:"e.g., Dalmore 15 and Glenallachie 15"},
  {name: "Glen Scotia 15", x: 0.713, y:0.254, image:"images/GlenScotia15.jpg", info:"32 reviewers have identified notes of vanilla, toffee, oak, spice and sweet in this whisky", score:"8.74", scorestddev:"0.33", family:"G", examples:"e.g., Dalmore 15, Glenallachie 15 and Macallan 18"},
  {name: "Dalmore 15", x: 0.746, y:0.450, image:"images/Dalmore15.jpg", info:"32 reviewers have identified notes of oak, sherry, raisin, spice and orange in this whisky", score:"8.37", scorestddev:"0.41", family:"G", examples:"e.g., Glenallachie 15 and Macallan 18"},
  {name: "Bruichladdich Black Art 4.1", x: 0.755, y:0.291, image:"images/BruichladdichBlackArt4.1.jpg", info:"27 reviewers have identified notes of oak, chocolate, plum, spice and oily in this whisky", score:"9.03", scorestddev:"0.24", family:"G", examples:"e.g., Dalmore 15, Glenallachie 15 and Macallan 18"},
  {name: "Glenfarclas 10", x: 0.736, y:0.440, image:"images/Glenfarclas10.jpg", info:"29 reviewers have identified notes of vanilla, sherry, dry, spice and oak in this whisky", score:"8.35", scorestddev:"0.33", family:"G", examples:"e.g., Dalmore 15, Glenallachie 15 and Macallan 18"},
  {name: "Glengoyne 18", x: 0.842, y:0.392, image:"images/Glengoyne18.jpg", info:"26 reviewers have identified notes of oak, honey, vanilla, caramel and spice in this whisky", score:"8.61", scorestddev:"0.34", family:"G", examples:"e.g., Dalmore 15, Glenallachie 15 and Macallan 18"},
  {name: "Glenallachie 15", x: 0.88, y:0.235, image:"images/Glenallachie15.jpg", info:"22 reviewers have identified notes of raisin, spice, dark chocolate, cinnamon and oak in this whisky", score:"8.50", scorestddev:"0.60", family:"G", examples:"e.g., Dalmore 15 and Macallan 18"},

]
},


];
