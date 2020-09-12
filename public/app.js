
function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();




function visualizeData(data) {

  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  visualizeExtraRunConcededByEachTeam2016(data.extraRunConcededByEachTeam2016);
  visualizeTopTenEconomicBowlers2015(data.topTenEconomicBowlers2015);
  visualizeCenturiesOfBatsmans2019(data.centuriesOfBatsmans2019);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}

function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
  const seriesData = [];
  const teams = [];
  const season = Object.keys(matchesWonByEachTeam).map((season) => season);
  for (let i = 0; i < season.length; i++) {
    teams.push(Object.keys(matchesWonByEachTeam[season[i]]));
  }
  const uniqueTeams = [...new Set([].concat.apply([], teams))];
  for (let i in uniqueTeams) {
    let Array = [];
    for (let j in season) {
      if (matchesWonByEachTeam[season[j]].hasOwnProperty(uniqueTeams[i])) {
        Array.push(matchesWonByEachTeam[season[j]][uniqueTeams[i]]);
      } else {
        Array.push(0);
      }
    }
    seriesData.push({ name: uniqueTeams[i], data: Array });
  }




  Highcharts.chart('matches-Won-By-Each-Team', {
    chart: {
      renderTo: 'matches-Won-By-Each-Team',
      type: 'column'
    },
    title: {
      text: 'matchesWonByEachTeam'
    },
    subtitle: {
      text: 'Source: ipl.com'
    },
    xAxis: {
      categories: [...season],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Teams and Their Winning Matches Numbers'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: seriesData
  });
}

function visualizeExtraRunConcededByEachTeam2016(extraRunConcededByEachTeam2016) {
  const seriesData = [];
  for (let team in extraRunConcededByEachTeam2016) {
    seriesData.push([team, extraRunConcededByEachTeam2016[team]]);
  }
  Highcharts.chart("extra-Run-Conceded-By-Each-Team-In-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "extraRunConcededByEachTeamIn2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}

function visualizeTopTenEconomicBowlers2015(topTenEconomicBowlers2015) {
  const seriesData = [];
  for (let num in topTenEconomicBowlers2015) {
    seriesData.push([num, topTenEconomicBowlers2015[num]]);
  }
  Highcharts.chart("top-Ten-Economic-Bowlers-In-2015", {
    chart: {
      type: "column"
    },
    title: {
      text: "topTenEconomicBowlersIn2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowler",
        data: seriesData
      }
    ]
  });
}

function visualizeTopTenEconomicBowlersEveryYear(topTenEconomicBowlersEveryYear, year) {
  const seriesData = [];
  for (let team in topTenEconomicBowlersEveryYear) {
    seriesData.push([team, topTenEconomicBowlersEveryYear[team]]);
  }
  Highcharts.chart("top-Ten-Economic-Bowlers-Every-Year", {
    chart: {
      type: "column"
    },
    title: {
      text: "top Ten Economic Bowlers In" + year
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowler",
        data: seriesData
      }
    ]
  });
}

function visualizeCenturiesOfBatsmans2019(centuriesOfBatsmans2019) {
  const seriesData = [];
  for (let num in centuriesOfBatsmans2019) {
    seriesData.push([num, centuriesOfBatsmans2019[num]]);
  }

  Highcharts.chart("centuries-Of-Batsmans-In-2019", {
    chart: {
      type: "column"
    },
    title: {
      text: "centuriesOfBatsmansIn2019"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
      }
    },
    series: [
      {
        name: "Batsman",
        data: seriesData
      }
    ]
  });
}

function showEconomicBowler() {
  let season = document.getElementById("bowler_season").value;
  if (season < 2008 || season > 2019) {
    alert("Enter year from 2008 to 2019");
  } else {
    fetch("/economy?year=" + season)
      .then((response) => response.json())
      .then((json) => {
        visualizeTopTenEconomicBowlersEveryYear(json, season);
      });
  }
}