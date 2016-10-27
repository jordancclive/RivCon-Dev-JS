function clock_angles(hour, minute) {
	
	/*
	360degrees or zero is when the hands are the same number.  ...assume this answer is zero.
	
	the numbers run from 0 to 12  so 0 to 1 should be 360/12 = 30 degrees
					0 and 3 = (360/12) *3 = 90
					2 & 3 = (360/12) * (3-2) = 30 degrees
	*/

	if (hour===minute) return 0;
	let segment = (hour>minute) ? hour - minute : minute - hour;
	let resultAngle = (360/12)*segment;
	return (resultAngle<180) ? resultAngle : 360 - resultAngle;
}

clock_angles(12,6)
