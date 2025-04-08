const startTime_container = document.getElementById('start-time-select')
const endTime_container = document.getElementById('end-time-select')
const weekday_container = document.getElementById('event-day')



function getContent(eventObj) {
    const selectedIndex = eventObj.selectedIndex;
    const seletecOption = eventObj.options[selectedIndex]
    return [seletecOption.text, selectedIndex]
}



const newEndTime = [
    { value: '1', text: '9:00 AM', id: 'end-time' },
    { value: '2', text: '9:15 AM', id: 'end-time' },
    { value: '3', text: '9:30 AM', id: 'end-time' },
    { value: '4', text: '9:45 AM', id: 'end-time' },
    { value: '5', text: '10:00 AM', id: 'end-time' },
    { value: '6', text: '10:15 AM', id: 'end-time' },
    { value: '7', text: '10:30 AM', id: 'end-time' },
    { value: '8', text: '10:45 AM', id: 'end-time' },
    { value: '9', text: '11:00 AM', id: 'end-time' },
    { value: '10', text: '11:15 AM', id: 'end-time' },
    { value: '11', text: '11:30 AM', id: 'end-time' },
    { value: '12', text: '11:45 AM', id: 'end-time' },
    { value: '13', text: '12:00 PM', id: 'end-time' },
    { value: '14', text: '12:15 PM', id: 'end-time' },
    { value: '15', text: '12:30 PM', id: 'end-time' },
    { value: '16', text: '12:45 PM', id: 'end-time' },
    { value: '17', text: '1:00 PM', id: 'end-time' },
    { value: '18', text: '1:15 PM', id: 'end-time' },
    { value: '19', text: '1:30 PM', id: 'end-time' },
    { value: '20', text: '1:45 PM', id: 'end-time' },
    { value: '21', text: '2:00 PM', id: 'end-time' },
    { value: '22', text: '2:15 PM', id: 'end-time' },
    { value: '23', text: '2:30 PM', id: 'end-time' },
    { value: '24', text: '2:45 PM', id: 'end-time' },
    { value: '25', text: '3:00 PM', id: 'end-time' },
    { value: '26', text: '3:15 PM', id: 'end-time' },
    { value: '27', text: '3:30 PM', id: 'end-time' },
    { value: '28', text: '3:45 PM', id: 'end-time' },
    { value: '29', text: '4:00 PM', id: 'end-time' },
    { value: '30', text: '4:15 PM', id: 'end-time' },
    { value: '31', text: '4:30 PM', id: 'end-time' },
    { value: '32', text: '4:45 PM', id: 'end-time' },
    { value: '33', text: '5:00 PM', id: 'end-time' },
    { value: '34', text: '5:15 PM', id: 'end-time' },
    { value: '35', text: '5:30 PM', id: 'end-time' },
    { value: '36', text: '5:45 PM', id: 'end-time' },
    { value: '37', text: '6:00 PM', id: 'end-time' },
    { value: '38', text: '6:15 PM', id: 'end-time' },
    { value: '39', text: '6:30 PM', id: 'end-time' },
    { value: '40', text: '6:45 PM', id: 'end-time' },
    { value: '41', text: '7:00 PM', id: 'end-time' },
    { value: '42', text: '7:15 PM', id: 'end-time' },
    { value: '43', text: '7:30 PM', id: 'end-time' },
    { value: '44', text: '7:45 PM', id: 'end-time' },
    { value: '45', text: '8:00 PM', id: 'end-time' },
    { value: '46', text: '8:15 PM', id: 'end-time' },
    { value: '47', text: '8:30 PM', id: 'end-time' },
    { value: '48', text: '8:45 PM', id: 'end-time' },
    { value: '49', text: '9:00 PM', id: 'end-time' }
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