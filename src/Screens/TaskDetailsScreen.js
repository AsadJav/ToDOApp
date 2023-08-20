import React,{useState} from 'react';
import {View,StyleSheet,Platform} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import AppTextInput from '../Components/AppTextInput';
import { COLORS } from '../utils/COLORS';
import AppButton from '../Components/AppButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import DetailsComponent from '../Components/DetailsComponent';


function TaskDetailsScreen({navigation,route}) {
    const data = route.params
    const [title, setTitle] = useState(data?.title || "");
    const [sub, setSub] = useState(data?.sub || "");
    const [dt, setDt] = useState(data?.DnD || "");
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time,setTime] = useState(data?.time || "");
    const [mode,setMode] = useState('date');
    const [updt, setUpdt] = useState(data?.updt || false);

    const showPicker = () => {
      setIsPickerShow(true);
    };
  
    const onChange = (event, value) => {
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
      //console.log(value.toDateString(),"F",date.toDateString())
      const currentDate = value || date;
      setDate(currentDate);
      setDt(date.toDateString())
      console.log("Now",date)
      console.log(date.toDateString())
      let tempDate = new Date(currentDate)
      let fDate = tempDate.toDateString()
      let ftime = tempDate.getHours() +  ':' + tempDate.getMinutes()
      setDt(fDate)
      setTime(ftime)

    };
      const showMode = currentMode => {
    setIsPickerShow(true);
    setMode(currentMode);
  };
    //   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);

//     let tempDate = new Date(currentDate);
//     let fDate = tempDate.toDateString();
//     let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
//     setDt(fDate);
//     setTime(fTime);
//   };
  return (
    <View style={styles.container}>
        <AppHeader icon1={"arrow-back"} onPress1={()=>{navigation.navigate("HomeScreen")}} />
        <View style={styles.detailsStyle}>
        <AppTextInput placeholderTxt={"Task Title"} TxtInputStyle={{marginBottom:hp(3)}} value={title} onChangeText={setTitle}/>
        <AppTextInput placeholderTxt={"Add Sub Tasks"} TxtInputStyle={{marginBottom:hp(3)}} value={sub} onChangeText={setSub}/>
        <DetailsComponent heading="Select Date"
          TextStyle={styles.txt}
          data={dt}
          style={styles.tp1}
          IconName="calendar-outline"
          IconSize={30}
          IconColor={COLORS.white}
          onPress={() => showMode('date')}/>
          <DetailsComponent heading="Select Time"
          TextStyle={styles.txt}
          data={time}
          style={styles.tp}
          IconName="alarm-outline"
          IconSize={30}
          IconColor={COLORS.white}
          onPress={() => showMode('time')}/>
        <AppTextInput placeholderTxt={"DateTimePicker"} TxtInputStyle={{marginBottom:hp(3)}}/>
        <AppButton buttonName={"Save"} color={COLORS.purple} onPress={()=>{navigation.goBack(); if(updt == false){data.addData({id:Math.random(),title:title,sub:sub,DnD:dt,time:time})}else{console.log("Ok..Updated");data.updt({title:title,sub:sub,DnD:dt,time:time})}}}/>
        {isPickerShow && (
        <DateTimePicker
            testID="datetimepicker"
            value={date}
            mode={mode}
            is24Hour={false}
            display="default"
            onChange={onChange}
        />
      )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.purple,
  },
  detailsStyle:{
    marginTop: hp(2),
    alignItems: 'center',
  },
    txt: {
    color: COLORS.white,
    fontSize: 16,
  },
    tp: {
    fontSize: 16,
    color: COLORS.white,
    marginRight: wp(72),
  },
    tp1: {
    fontSize: 16,
    color: COLORS.white,
    marginRight: wp(50),
  },
});

export default TaskDetailsScreen;


// import React, {useState} from 'react';
// import {StyleSheet, Text, View, Platform, Alert} from 'react-native';
// import AppButton from '../components/AppButton';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import {Picker} from '@react-native-picker/picker';
// import AppTextInput from '../components/AppTextInput';
// import {addReminder, updateReminder} from '../Redux/ReminderSlice';
// import {useDispatch} from 'react-redux';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {COLORS} from '../colors/color';
// import HorizontalComponent from '../components/HorizontalComponent';
// import HeaderComponent from '../components/HeaderComponent';

// function checkTextInput(a, b, c) {
//   if (!a.trim()) {
//     Alert.alert('Please Enter the Reminder Name');
//     return false;
//   } else if (!b.trim()) {
//     Alert.alert('Please Select the Reminder Date');
//     return false;
//   } else if (!c.trim()) {
//     Alert.alert('Please Select the Reminder Time');
//     return false;
//   } else {
//     return true;
//   }
// }

// function ReminderDetailsScreen({navigation, route}) {
//   const objData = route.params.obj;
//   const userData = route.params.userData;
//   const [title, setTitle] = useState(objData?.title || '');
//   const [date, setDate] = useState(new Date());
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);
//   const [dt, setDt] = useState(objData?.date || '');
//   const [time, setTime] = useState(objData?.time || '');
//   const [selectedValue, setSelectedValue] = useState(objData?.repeat || 'None');
//   const dispatch = useDispatch();

//   function addData(obj) {
//     obj.id = Math.floor(Math.random() * (Date.now() / 1000));
//     dispatch(addReminder(obj));
//     route.params.createNotification(obj);
//   }
//   function updateData(obj) {
//     obj.indexNo = route.params.indexNo;
//     obj.id = route.params.id;
//     dispatch(updateReminder(obj));
//     route.params.updateNotifications(obj);
//   }
//   function addUpdate() {
//     let object = {
//       title: title,
//       date: date.toDateString(),
//       time: time,
//       Nd: date,
//       repeat: selectedValue,
//     };

//     if (checkTextInput(title, dt, time) == true) {
//       if (route.params.edit == true) {
//         object.id = route.params.id;
//         updateData(object);
//       } else {
//         addData(object);
//       }
//       navigation.goBack();
//     }
//   }
//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);

//     let tempDate = new Date(currentDate);
//     let fDate = tempDate.toDateString();
//     let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
//     setDt(fDate);
//     setTime(fTime);
//   };
//   const showMode = currentMode => {
//     setShow(true);
//     setMode(currentMode);
//   };
//   return (
//     <View style={styles.outerContainer}>
//       <HeaderComponent
//         title="Reminder List"
//         IconName1={'arrow-back-outline'}
//         navigation={navigation}
//         userData={userData}
//         onPressIcon1={() => {
//           navigation.goBack();
//         }}
//       />
//       <View style={styles.container}>
//         <Text style={styles.txt}>What is to be done?</Text>
//         <AppTextInput
//           onChangeText={setTitle}
//           value={title}
//           placeholder="Write the Reminder Name"
//         />
//         <HorizontalComponent
//           heading="Date"
//           TextStyle={styles.txt}
//           data={dt}
//           style={styles.tp1}
//           IconName="calendar-outline"
//           IconSize={30}
//           IconColor={COLORS.white}
//           onPress={() => showMode('date')}
//         />
//         <HorizontalComponent
//           heading="Time"
//           TextStyle={styles.txt}
//           data={time}
//           style={styles.tp}
//           IconName="alarm-outline"
//           IconSize={30}
//           IconColor={COLORS.white}
//           onPress={() => showMode('time')}
//         />
//         {show && (
//           <DateTimePicker
//             testID="datetimepicker"
//             value={date}
//             mode={mode}
//             is24Hour={false}
//             display="default"
//             onChange={onChange}
//             minimumDate={date}
//           />
//         )}
//         <Text style={styles.txt}>Repeat</Text>
//         <Picker
//           selectedValue={selectedValue}
//           style={styles.pick}
//           dropdownIconColor={COLORS.white}
//           onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
//           <Picker.Item label="None" value="NONE" />
//           <Picker.Item label="Hourly" value="HOURLY" />
//           <Picker.Item label="Daily" value="DAILY" />
//           <Picker.Item label="Weekly" value="WEEKLY" />
//         </Picker>
//         <AppButton
//           buttonName="Add Reminder"
//           color={styles.btnColor}
//           onPress={() => {
//             addUpdate();
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   outerContainer: {backgroundColor: COLORS.purple, flex: 1},
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.purple,
//     padding: wp(5),
//   },
//   txt: {
//     fontWeight: 'bold',
//     color: COLORS.white,
//     fontSize: 20,
//     marginTop: wp(5),
//     marginBottom: wp(5),
//   },
//   tp: {
//     fontSize: 16,
//     color: COLORS.white,
//     marginRight: wp(72),
//   },
//   tp1: {
//     fontSize: 16,
//     color: COLORS.white,
//     marginRight: wp(50),
//   },
//   pick: {
//     height: hp(5),
//     width: wp(90),
//     color: COLORS.white,
//   },
//   btnColor: {color: COLORS.purple},
// });

// export default ReminderDetailsScreen;