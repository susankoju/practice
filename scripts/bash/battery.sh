#!/bin/bash

#battery= upower -e | grep battery | (read path; upower -i $path) | grep percentage | tr -dc '0-9'
battery_level=`acpi -b | grep -P -o '[0-9]+(?=%)'`
#low_power=50

if [ $battery_level -ge 35 ]; then  
	notify-send "Battery low! Only ${battery_level}% left... Please connect the charger!"   
fi


