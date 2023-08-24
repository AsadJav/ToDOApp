import React, { useState } from 'react';
import {View,StyleSheet, FlatList} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AppHeader from '../Components/AppHeader';
import { COLORS } from '../utils/COLORS';
import AppTextInput from '../Components/AppTextInput';
import DatePicker from 'react-native-date-picker'
import DetailsComponent from '../Components/DetailsComponent';
import AppTextPlacer from '../Components/AppTextPlacer';
import AppButton from '../Components/AppButton';
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import TaskComponent from '../Components/TaskComponent';

function FilterScreen({navigation}) {
  const [rangeView,setRangeView] = useState(false)
  const [dateRange,setDateRange] = useState();
  const [date, setDate] = useState(new Date())
  const [openC1, setOpenC1] = useState(false)
  const [open, setOpen] = useState(false)
  const [ dateFrom, setDateFrom] = useState({date:"",month:"",year:""})
  const [ dateTo, setDateTo] = useState({date:"",month:"",year:""})
  let tasks = []
  const storeData = useSelector(state => state.tasks);
  console.log(storeData)
  console.log(tasks)
  const filterData = ()=>{
    console.log("d", dateFrom);
    console.log("dt", dateTo);
    tasks = storeData.filter(obj=>{
      //console.log(obj.dateNo,"hell")
      let dataObj = obj?.dateNo
      console.log(dataObj?.date)
      if(dataObj?.date >= dateFrom?.date && dataObj?.date <= dateTo?.date){
      //tasks.push(obj);
      return obj;
    }
    //console.log(tasks)
   })
  console.log(tasks);
  navigation.navigate({name:"Filtered",params:{filteredTasks: tasks}})
  }
  
  console.log(date);
  //icon2={"list"} onPress2={()=>{setRangeView(rangeView ? false : true);}}
  console.log(rangeView);
  return (
    <View style={styles.container}>
        <AppHeader icon1={"arrow-back"} onPress1={()=>{navigation.goBack()}}/>
        <View style={styles.rView}>
         <DetailsComponent heading={"Date From"}
         TextStyle={styles.txt}
         data={""+dateFrom.date+"-"+dateFrom.month+"-"+dateFrom.year}
         style={styles.tp1}
          IconName="calendar-outline"
          IconSize={30}
          IconColor={COLORS.purple}
          onPress={() => setOpenC1(true)}/>
          <DetailsComponent heading={"Date To"}
         TextStyle={styles.txt}
         data={""+dateTo.date+"-"+dateTo.month+"-"+dateTo.year}
         style={styles.tp1}
          IconName="calendar-outline"
          IconSize={30}
          IconColor={COLORS.purple}
          onPress={() => setOpen(true)}/>
          </View>
         <AppButton buttonName={"Filter Tasks"} onPress={()=>{filterData();}} color={COLORS.purple}/>
          <DatePicker
        modal
        open={openC1}
        date={date}
        onConfirm={(date) => {
          setOpenC1(false)
          setDate(date)
          setDateFrom({date:date.getDate(), month:date.getMonth()+1, year:date.getFullYear()})
        }}
        onCancel={() => {
          setOpenC1(false)
        }}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setDateTo({date:date.getDate(), month:date.getMonth()+1, year:date.getFullYear()})
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  rView: {
    padding:wp(5),
  },
  tp1: {
    fontSize: 16,
    color: COLORS.purple,
    marginRight: wp(50),
  },
  txt: {
    color: COLORS.purple,
    fontSize: 16,
  },
});

export default FilterScreen;

/*
<DetailsComponent heading="Select Date"
          TextStyle={styles.txt}
          data={dt}
          style={styles.tp1}
          IconName="calendar-outline"
          IconSize={30}
          IconColor={COLORS.white}
          onPress={() => showMode('date')}/>
*/