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
        image: "assets/pics/business/business2.jpg"
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
}
