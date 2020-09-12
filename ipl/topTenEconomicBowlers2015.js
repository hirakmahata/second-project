function topTenEconomicBowlers2015(matches, deliveries) {
    const result = {};
    const outputs = {};
    let players = [];
    let finalOutput={};

    for (let match of matches) {
        if (match.season == 2015) {
            const ID = match.id;
            for (let delivery of deliveries) {

                if (delivery.match_id == ID) {
                    if (result[delivery.bowler]) {
                        result[delivery.bowler].runs += parseInt(delivery.total_runs);
                        
                        if(delivery.wide_runs==0 && delivery.noball_runs==0){
                            result[delivery.bowler].balls += 1;
                        }
                        
                    } else {
                        
                        if(delivery.wide_runs==0 && delivery.noball_runs==0){
                            result[delivery.bowler] = {
                                runs: parseInt(delivery.total_runs),
                                balls: 1
                            };
                        
                        }else{
                            result[delivery.bowler] = {
                                runs: parseInt(delivery.total_runs),
                                balls: 0
                            };
                        }
                    }
                }
            }
        }
    }
    players = Object.keys(result);
    for (let i = 0; i < players.length; i++) {
        
        outputs[`${players[i]}`] = ((result[`${players[i]}`]["runs"]) / (result[`${players[i]}`]["balls"]/6)).toFixed(2);
    }
    finalOutput=topTen(outputs);

    function topTen(allBowlers){
        let arr=Object.keys(allBowlers);
        let arr1=[];
        let arr2=[];
        let result={};
        for(let i=0; i<arr.length; i++){
            let a=allBowlers[`${arr[i]}`];
            arr1.push(parseFloat(a));
        }
        arr1.sort((a,b)=>a-b);
        arr2=arr1.slice(0,10);
        for(let i=0; i<arr2.length; i++){
            for(let j=0; j<arr.length; j++){
                if(arr2[i]==allBowlers[`${arr[j]}`]){
                    result[`${arr[j]}`]=arr2[i];
                }
            }
        }
        return result;
    }
   return finalOutput;

}



module.exports = topTenEconomicBowlers2015;
