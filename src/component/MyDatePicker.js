import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handlePress = () => {
    // Handle the selected date as needed
    console.log('Selected Date:', selectedDate);
  };

  return (
    <View>
      <Text>Select a past date:</Text>
      <DatePicker
        style={{ width: 200 }}
        date={selectedDate}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="1900-01-01"  // Adjust the minDate based on your requirements
        maxDate={new Date()} // Set maxDate to the current date
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={handleDateChange}
      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
};

export default MyDatePicker;
