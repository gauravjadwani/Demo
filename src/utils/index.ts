import {AsyncStorage} from "react-native";

export async function setStorage(key:string,data:any) {
    try {
        await AsyncStorage.setItem(key,(data));
        return true;
      } catch (error) {
        // Error saving data
        return false;
      }
  }

  export async function getStorage(key:string) {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log('getStorage value',value,key)
        if (value !== null) {
          // We have data!!
        //   console.log(value);
          return (value);
        }else{
            return value;
        }
      } catch (error) {
          return 'false';
        // Error retrieving data
      }
  }
  export async function createUserSession(user:string){

    const state = await setStorage('currentActiveUser',user);
    console.log('createUserSession',state)
    return state;
  }
  export async function getUserSession(){
   
    // let state;
    const state= await getStorage('currentActiveUser')
    console.log('getStorage',state);
    return state;
  }

  export  function getUserSession1(){
      const state=AsyncStorage.getItem('currentActiveUser');   
    console.log('getStorage',state);
    return state;
  }
  export async function deleteUserSessions(key:string){
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch(exception) {
      return false;
    }

}