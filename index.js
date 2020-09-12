const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRunConcededByEachTeam2016 = require("./ipl/extraRunConcededByEachTeam2016");
const topTenEconomicBowlers2015 = require("./ipl/topTenEconomicBowlers2015");
const centuriesOfBatsmans2019 = require("./ipl/centuriesOfBatsmans2019");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          let result = {};
          result.matchesPlayedPerYear = matchesPlayedPerYear(matches);
          result.matchesWonByEachTeam = matchesWonByEachTeam(matches);
          result.extraRunConcededByEachTeam2016 = extraRunConcededByEachTeam2016(matches, deliveries);
          result.topTenEconomicBowlers2015 = topTenEconomicBowlers2015(matches, deliveries);
          result.centuriesOfBatsmans2019 = centuriesOfBatsmans2019(matches, deliveries)
          saveData(result);
        });
    });
}

function saveData(result) {
  const jsonData = result;
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();

