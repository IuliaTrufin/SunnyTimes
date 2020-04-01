import { Injectable } from "@angular/core";

Injectable({ providedIn: "root" });
export class DataSourceService {
  getDataSource() {
    return [
      {
        id: 1,
        title: "New virus found",
        content:
          "Coronavirus disease (COVID-19) is a new strain that was discovered in 2019.",
        image: "assets/pics/main/main1.jpg"
      },
      {
        id: 2,
        title: "European stocks rising",
        content:
          "European stocks rise amid investor optimism about stimulus measures. Stocks made broad gains in Asia overnight.",
        image: "./assets/pics/main/main2.jpg"
      },
      {
        id: 3,
        title: "Best Hulu movies",
        content:
          "Here are the 15 best movies on Hulu that you can stream right now.",
        image: "./assets/pics/main/main3.jpg"
      },
      {
        id: 4,
        title: "France banned cycling",
        content:
          "There is no question of getting away from home. The rule is containment for everyone, the Ministry of Sport tweeted Thursday.",
        image: "./assets/pics/main/main4.jpg"
      },
      {
        id: 5,
        title: "Swimming with sharks",
        content:
          "Founders who made it on 'Shark Tank' reveal winning pitches, tips to negotiate money-making deals.",
        image: "./assets/pics/main/main5.jpg"
      }
    ];
  }
  getBusinessSource() {
    return [
      {
        id: 1,
        title: "US deep surges in jobless claims",
        content:
          "A jarring new chart shows America needs to immediately brace itself for historic unemployment.",
        image: "assets/pics/business/business2.JPG"
      },
      {
        id: 2,
        title: "'People are freaking out'",
        content:
          "We talked to 6 wealth managers about how they're handling client meltdowns as the markets tank.",
        image: "./assets/pics/business/business3.jpg"
      },
      {
        id: 3,
        title: "Worse than the Quant Quake",
        content:
          "Huge quant names like Schonfeld and Bridgewater are getting slammed as market chaos blows up computer-driven trades.",
        image: "./assets/pics/business/business4.jpg"
      },
      {
        id: 4,
        title: "US recession by July",
        content:
          "The firm forecasts a 2.1% decline in US GDP in the first quarter of 2020 and a 10% contraction in the second quarter of the year. ",
        image: "./assets/pics/business/business5.JPG"
      },
      {
        id: 5,
        title: "Dow fights for gains",
        content:
          "The S&P 500 reversed gains from earlier in the day, falling about 0.4% in midday trading.",
        image: "./assets/pics/business/business7.JPG"
      },
      {
        id: 6,
        title: "Tax Day is now July 15",
        content:
          "There are ways to get your taxes done, some hire a tax preparer, while others do their own using online tax preparation services. ",
        image: "./assets/pics/business/business8.png"
      }
    ];
  }
  getLifeSource() {
    return [
      {
        id: 1,
        title: "Kylie Jenner Shares Her Tips",
        content:
          "The 22-year-old star took to Instagram and revealed how she's been keeping busy at home amid the global coronavirus pandemic.",
        image: "assets/pics/life/life1.jpg"
      },
      {
        id: 2,
        title: "Restrictions on businesses",
        content:
          "Restaurants will be required to screen their employees before allowing them to work.",
        image: "./assets/pics/life/life2.jpg"
      },
      {
        id: 3,
        title: "‘The Mandalorian’ Adds Dawson",
        content:
          "We’re still months away from season 2 dropping on Disney+, but a new scoop reports that a fan favorite will be there waiting for us.",
        image: "./assets/pics/life/life3.jpg"
      },
      {
        id: 4,
        title: "Cheap games",
        content:
          "‘Far Cry 5’, ‘Assassin’s Creed Origins, and Other Ubisoft Games Are Insanely Cheap Right Now.",
        image: "./assets/pics/life/life5.jpg"
      },
      {
        id: 5,
        title: "The Oscars & Coronavirus",
        content:
          "We’re certainly living in uncertain times, and that uncertainty extends all the way to the Academy of Motion Picture Arts.",
        image: "./assets/pics/life/life6.jpg"
      },
      {
        id: 6,
        title: "I 'rented' a Finn for a day",
        content:
          "My Finnish happiness guide Heidi taught me the importance of time in nature, healthy work-life balance, and cinnamon buns.",
        image: "./assets/pics/life/life7.jpg"
      }
    ];
  }
  getSportsSource() {
    return [
      {
        id: 1,
        title: "Premier League to be completed",
        content:
          "The Premier League is expected to reiterate its commitment to completing the season in Thursday's emergency board meeting.",
        image: "assets/pics/sports/sports1.jpg"
      },
      {
        id: 2,
        title: "English football suspended",
        content:
          "Coronavirus: English football will be suspended until at least 30 April because of the continued spread of coronavirus",
        image: "./assets/pics/sports/sports2.jpg"
      },
      {
        id: 3,
        title: "ATP & WTA tours suspended",
        content:
          "The suspension of the professional tennis tours because of coronavirus has been extended to 7 June.",
        image: "./assets/pics/sports/sports3.jpg"
      },
      {
        id: 4,
        title: "Federer record cannot be broken",
        content:
          "Roger Federer is a tennis legend, with a professional history spanning over 20 years.",
        image: "./assets/pics/sports/sports4.jpg"
      },
      {
        id: 5,
        title: "Serena Williams' anxiety",
        content:
          "Serena Williams has revealed she is feeling stressed and dealing with anxiety following the impact of the coronavirus pandemic.",
        image: "./assets/pics/sports/sports5.jpg"
      },
      {
        id: 6,
        title: "COVID-19 ventilator plan",
        content:
          "Many F1 teams working on COVID-19 ventilator plan. Ventilators and respiratory devices are crucial for intensive care units.",
        image: "./assets/pics/sports/sports6.jpg"
      }
    ];
  }
  getNationalSource() {
    return [
      {
        id: 1,
        title: "Teen donates sanitation kits",
        content:
          "They don't have necessities right now that are crucial to remain clean and stay germ-free",
        image: "assets/pics/national/national1.jpg"
      },
      {
        id: 2,
        title: "Blizzard warnings issued for spring",
        content:
          "From intense storms to heavy rain and some snow, the first day of spring will bring a massive storm that's felt from coast to coast.",
        image: "./assets/pics/national/national2.jpg"
      },
      {
        id: 3,
        title: "Disinfecting wipes are being flushed",
        content:
          "Some experts say the wipes, arguably the supply that's been used to clean surfaces in homes the most, are harming sewers.",
        image: "./assets/pics/national/national3.jpg"
      },
      {
        id: 4,
        title: "ICE prisoners & COVID-19",
        content:
          "There are nearly 40,000 people in ICE custody. And there's a big question looming as the novel coronavirus spreads.",
        image: "./assets/pics/national/national4.jpg"
      },
      {
        id: 5,
        title: "Blacks unlikely to work from home",
        content:
          "Here's a lot of misinformation about how much people are able to telework. It's actually quite a small share of the workforce.",
        image: "./assets/pics/national/national5.jpg"
      },
      {
        id: 6,
        title: "Severe storms in Texas",
        content:
          "Properties were damaged in several central Texas communities and forecasters reported severe overnight storms and tornadoes.",
        image: "./assets/pics/national/national8.jpg"
      }
    ];
  }
  getInternationalSource() {
    return [
      {
        id: 1,
        title: "Hong Kong ready for a 2nd wave",
        content:
          "'This is the worst time to relax because we're at the highest risk since this began,' said University of Hong Kong medical dean Gabriel Leung.",
        image: "assets/pics/international/international1.jpg"
      },
      {
        id: 2,
        title: "The UK's pubs, ordered to close",
        content:
          "UK bars, restaurants, gyms, and cinemas will all close as Britain heads towards coronavirus lockdown.",
        image: "./assets/pics/international/international2.jpg"
      },
      {
        id: 3,
        title: "Italian doctor died from COVID-19",
        content:
          "Italian doctor Marcello Natali frequently sounded the alarm about problems with Italy's response to the novel coronavirus crisis.",
        image: "./assets/pics/international/international5.jpg"
      },
      {
        id: 4,
        title: "Highest death tolls is in Spain",
        content:
          "Authorities want Spaniards to stay at home and leave the house only where absolutely essential, to help slow the disease.",
        image: "./assets/pics/international/international6.jpg"
      },
      {
        id: 5,
        title: "Grands Prix postponed",
        content:
          "The Dutch and Spanish Grands Prix have been postponed and the Monaco Grand Prix cancelled due to the coronavirus.",
        image: "./assets/pics/international/international7.jpg"
      },
      {
        id: 6,
        title: "'I have to hunt the Pokémon'!",
        content:
          "A man in Italy gets charged for ignoring the coronavirus lockdown to play 'Pokémon Go'.",
        image: "./assets/pics/international/international8.jpg"
      }
    ];
  }
}
