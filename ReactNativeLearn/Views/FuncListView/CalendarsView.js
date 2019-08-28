import React from "react";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

class CalendarsView extends React.Component {
    test(){
      var date = new Date();
      alert(date.format("yyyy-MM-dd HH:mm:ss"));
    }
    render(){
      return(
        // <Agenda/>
        <Calendar
        // Initially visible month. Default = Date()
        current={Date().toString}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2019-08-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2019-09-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {alert(JSON.stringify(day))}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {this.test()}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        // hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => (<Arrow />)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        // onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
        // onPressArrowRight={addMonth => addMonth()}
      />
      )
    }

    
}

export default CalendarsView