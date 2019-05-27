import {AsyncStorage} from "react-native";

export async function setStorage(key:string,data:Object) {
    console.log('setstaorage',key,data)
    // AsyncStorage.setItem(key, JSON.stringify(data));
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        return true;
      } catch (error) {
        // Error saving data
        return false;
      }
  }

  export async function getStorage(key:string) {
    // AsyncStorage.getItem(key);
    // for(let i=0;i<100;i++){
    //     console.log(i);
    // }
    // AsyncStorage.clear();
    try {
        const value = await AsyncStorage.getItem(key);
        console.log('valiue',value)
        if (value !== null) {
          // We have data!!
        //   console.log(value);
          return JSON.parse(value);
        }else{
            return value;
        }
      } catch (error) {
          return 'false';
        // Error retrieving data
      }
  }
