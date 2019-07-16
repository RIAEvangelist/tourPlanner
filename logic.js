function tourPlanner(totalMiles,whm,wht,speed,timeToCharge){
	let totalTime=0;
	let remainingMiles=totalMiles;
	let milesCanGo=wht/whm;
	let rideTime=60/(speed/milesCanGo);
	let stops=0;

	while(remainingMiles>0){
		remainingMiles-=milesCanGo;
		totalTime+=rideTime+timeToCharge;
		stops++;
    }

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
