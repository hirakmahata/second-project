function centuriesOfBatsmans2019(matches,deliveries){
    const result = {};
    for (let match of matches) {
        if (match.season == 2019) {
            const ID = match.id;
            let temp={};
            for (let delivery of deliveries) {

                if (delivery.match_id == ID) {
                   if(temp[delivery.batsman]){
                       temp[delivery.batsman]+=parseInt(delivery.batsman_runs);
                   }else{
                       temp[delivery.batsman]=parseInt(delivery.batsman_runs);
                   }
                }
            }
            let arr=Object.keys(temp);
            let max=100;
            for(let i=0; i<arr.length; i++){
                let run=parseInt(temp[`${arr[i]}`]);
                if( run>=100){
                    if(result[`${arr[i]}`]){
                        if(run>result[`${arr[i]}`]){
                            result[`${arr[i]}`]=run;
                        }
                    }else{
                        result[`${arr[i]}`]=run;
                    }
                }
            }       
        }
    }
    return result;
}


module.exports = centuriesOfBatsmans2019;