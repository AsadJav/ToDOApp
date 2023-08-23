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
import {useDispatch} from 'react-redux';
import { updateTask } from '../Redux/TaskSlice';
import AppSubInput from '../Components/AppSubInput';
import { addTasksToFirestore, updateTasksInFirestore } from '../FIrebase/TasksDb';


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
    const [addSub, setAddSub] = useState(0);


    const dispatch = useDispatch();
  
    const onChange = (event, value) => {
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
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
  const updateData = obj => {
    dispatch(updateTask(obj));
    console.log('Task updated')
  };
  return (
    <View style={styles.container}>
        <AppHeader icon1={"arrow-back"} onPress1={()=>{navigation.goBack()}} />
        <View style={styles.detailsStyle}>
        <AppTextInput placeholderTxt={"Task Title"} TxtInputStyle={{marginBottom:hp(3)}} value={title} onChangeText={setTitle}/>
        <AppSubInput placeholderTxt={"Add Sub Task 1"} TxtInputStyle={{marginBottom:hp(3),marginLeft:wp(10),width:wp(80)}} value={sub} onChangeText={setSub} onSubmitEditing={()=>{setAddSub(1)}}/>
        {addSub >= 1 && <AppSubInput placeholderTxt={"Add Sub Tasks 2"} TxtInputStyle={{marginBottom:hp(3),marginLeft:wp(10),width:wp(80)}} onSubmitEditing={()=>{setAddSub(2)}}/>}
        {addSub == 2 && <AppSubInput placeholderTxt={"Add Sub Tasks 3"} TxtInputStyle={{marginBottom:hp(3),marginLeft:wp(10),width:wp(80)}} />}        
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
        {/* <AppTextInput placeholderTxt={"DateTimePicker"} TxtInputStyle={{marginBottom:hp(3)}}/> */}
        <AppButton buttonName={"Save"} color={COLORS.purple} 
        onPress={()=>{navigation.navigate('HomeScreen');
        if(updt == false){
          let randomNumber = Math.random();
          data.addData({id:randomNumber,title:title,sub:sub,DnD:dt,time:time})
          addTasksToFirestore({id:randomNumber,title:title,subTitle:[sub],date:dt,time:time})
        }
        else{
          console.log("Ok..Updated");
          let obj = {id:data?.id,title:title,sub:sub,DnD:dt,time:time,indexNo:data?.indexNo}
          console.log(obj)
          updateData(obj);
          updateTasksInFirestore({id:data?.id,title:title,subTitle:[sub],date:dt,time:time})
        }}}/>
        {isPickerShow && (
        <DateTimePicker
            testID="datetimepicker"
            value={date}
            mode={mode}
            is24Hour={false}
            display="default"
            onChange={onChange}
            minimumDate={new Date()}
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