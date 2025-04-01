const startTime_container = document.getElementById('start-time-select')
const endTime_container = document.getElementById('end-time-select')
const weekday_container = document.getElementById('event-day')



function getContent(eventObj) {
    const selectedIndex = eventObj.selectedIndex;
    const seletecOption = eventObj.options[selectedIndex]
    return [seletecOption.text, selectedIndex]
}


function getEvent(event) {
    event.preventDefault();


   


    const weekDay = getContent(weekday_container)
    const startTime = getContent(startTime_container)
    const endTime = getContent(endTime_container)

    console.log(weekDay, startTime, endTime)


}

const newEndTime = [
    { value: '1', text: '9:00 AM', id: 'end-time' },
    { value: '2', text: '9:30 AM', id: 'end-time' },
    { value: '3', text: '10:00 AM', id: 'end-time' },
    { value: '4', text: '10:30 AM', id: 'end-time' },
    { value: '5', text: '11:00 AM', id: 'end-time' },
    { value: '6', text: '11:30 AM', id: 'end-time' },
    { value: '7', text: '12:00 PM', id: 'end-time' },
    { value: '8', text: '12:30 PM', id: 'end-time' },
    { value: '9', text: '1:00 PM', id: 'end-time' },
    { value: '10', text: '1:30 PM', id: 'end-time' },
    { value: '11', text: '2:00 PM', id: 'end-time' },
    { value: '12', text: '2:30 PM', id: 'end-time' },
    { value: '13', text: '3:00 PM', id: 'end-time' },
    { value: '14', text: '3:30 PM', id: 'end-time' },
    { value: '15', text: '4:00 PM', id: 'end-time' },
    { value: '16', text: '4:30 PM', id: 'end-time' },
    { value: '17', text: '5:00 PM', id: 'end-time' },
    { value: '18', text: '5:30 PM', id: 'end-time' },
    { value: '19', text: '6:00 PM', id: 'end-time' },
    { value: '20', text: '6:30 PM', id: 'end-time' },
    { value: '21', text: '7:00 PM', id: 'end-time' },
    { value: '22', text: '7:30 PM', id: 'end-time' },
    { value: '23', text: '8:00 PM', id: 'end-time' },
    { value: '24', text: '8:30 PM', id: 'end-time' },
    { value: '25', text: '9:00 PM', id: 'end-time' },
]
  
const startTime_options = document.getElementById('start-time-select')
const endTime_options = document.getElementById('end-time-select')

startTime_options.addEventListener('focusout', function(event) {
    endTime_options.options.length = 0;
    newEndTime.forEach(element => {
        console.log(element)
        endTime_options.remove
        const newItem = document.createElement('option')
        newItem.value = element.value
        newItem.text = element.text
        newItem.id = element.id
        newItem.classList.add('time-tab')
        endTime_options.appendChild(newItem)
    });



    const selectedIndex = startTime_container.selectedIndex
    const removeIndex = []

    for (let i = 0; i < endTime_options.options.length; i++) {


        //console.log([selectedIndex, startTime_options[i].value])

        if (startTime_options[i].value <= selectedIndex+1) {
            //endTime_options[i].remove()
            removeIndex.push(endTime_options[i])
            //console.log('removing '+endTime_options[i].text)
        }
      
    }
    removeIndex.forEach(element => {
        element.remove()
    });

})