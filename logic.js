function tourPlanner(totalMiles,whm,wht,speed,timeToCharge){
    let totalTime=0;
    let remainingMiles=totalMiles;
    let milesCanGo=wht/whm;
    let timePerMile=60/speed;
    let rideTime=timePerMile*milesCanGo;
    let stops=0;

    while(remainingMiles>0){
	remainingMiles-=milesCanGo;
	totalTime+=rideTime+timeToCharge;
	stops++;
	if(remainingMiles<0){
	   let extraMiles=Math.abs(remainingMiles);
	   remainingMiles=0;
	   
           totalTime-=timePerMile*extraMiles;
	}
    }
    
    //remove final charge stop
    totalTime-=timeToCharge;

    return { 
	"Total Trip Miles"        : totalMiles,
	"Watt Hours Per Mile"     : whm,
	"Useable Watt Hours Total": wht,
	"Average travel speed"    : speed,
	"Average Charge Time"     : timeToCharge,
	"Average Ride Time"       : rideTime,
	

	"Avergae Miles Per Charge": milesCanGo,
	"Number of charge stops"  : stops,

	"Total Time in Min"           : totalTime,
	"Total Time in Hours"         : totalTime/60,
	"Total Charging Time in Min"  : stops*timeToCharge,
	"Total Charging Time in Hours": stops*timeToCharge/60,
	"Riding Time in Min"          : totalTime-stops*timeToCharge,
	"Riding Time in Hours"        : (totalTime-stops*timeToCharge)/60,
    }
}
