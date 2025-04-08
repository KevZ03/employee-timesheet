

function convertTimeToMinutesSinceMidnight(timeString) {
    const timeRegex = /^(\d{1,2}):(\d{2})\s?(AM|PM)$/i;
    const match = timeRegex.exec(timeString);
  
    if (!match) {
        return null; // Indicate invalid format
    }
  
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const period = match[3].toUpperCase();
  
    if (period === "PM" && hours !== 12) {
        hours += 12;
    } else if (period === "AM" && hours === 12) {
        hours = 0; // Midnight
    }
    const min = hours * 60 + minutes
    
    return { min: min, hours: min / 60}; // Total minutes since midnight
}

function getEvent(event) {
    const startTime_container = document.getElementById('start-time-select');
    const endTime_container = document.getElementById('end-time-select');
    const weekday_container = document.getElementById('event-day');
    
    event.preventDefault();
    const weekDay = getContent(weekday_container);
    const startTime = getContent(startTime_container);
    const endTime = getContent(endTime_container);

    console.log('Event Details:', weekDay, startTime, endTime);

    const converted_start = convertTimeToMinutesSinceMidnight(startTime[0]);
    const converted_end = convertTimeToMinutesSinceMidnight(endTime[0]);

    if (converted_start !== null && converted_end !== null) {
        const timeDifference_m = converted_end.min - converted_start.min;
        const timeDifference_h = timeDifference_m / 60;
        createEvent(weekDay[0], converted_start.hours, timeDifference_m)
        
        //console.log('Time Difference in Minutes:', timeDifference_m, 'Time Difference in Hours:', timeDifference_h);
    } else {
        //console.error('Invalid time format');
    }

}

function hasRemainder(n) {
    return n % 1 !== 0;
}

function createEvent(day ,startTime, timeDifference_m) {
    const new_event = document.createElement('div')
    new_event.className = 'filled-event-tab'


    const target_day = document.getElementById(day.toLowerCase()+'-grid-rows')
    console.log(target_day)
    let n = 100 / (startTime % 1)
    const blocked_time = 60 / n / 2 * 100 + 'px'
    console.log(blocked_time)
    const target_block = target_day.querySelector(`[start="${Math.floor(startTime)}"]`)
    if (hasRemainder(startTime)) {
        new_event.style.marginTop = blocked_time
    }
    new_event.style.height = timeDifference_m / 2+ 'px'
    target_block.appendChild(new_event)
    console.log(timeDifference_m + "min difference")

}