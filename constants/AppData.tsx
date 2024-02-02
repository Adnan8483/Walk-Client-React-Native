import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKeys from "../constants/AppDefault";

//Create COMPLETE_JSON Empty Array if not exist
export const createCompleteEmptyJson = async () => { 
  var myArray = [];
  let isDBExist = await AsyncStorage.getItem(storageKeys.COMPLETE_JSON);
   if (isDBExist == null) {
      AsyncStorage.setItem(storageKeys.COMPLETE_JSON, JSON.stringify(myArray))
      .then((value) => {
        getCompletJson();        
      })
   }  
};

//Get COMPLETE_JSON Array
export const getCompletJson = async () => {
//  return await AsyncStorage.getAllKeys()  



try {
    const jsonValue = await AsyncStorage.getItem(storageKeys.COMPLETE_JSON);
    if (jsonValue != null) {
      const data = JSON.parse(jsonValue);
      const newData = {blocks: [...data, {"question":"answer","address":"55045 something!"}]};
      await AsyncStorage.setItem(storageKeys.COMPLETE_JSON, JSON.stringify(newData));
      return newData;
    }
  } catch (e) {
    console.log(e);
  }


  
    console.log("all keys",newData);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  
};


//Replace/Update COMPLETE_JSON
export const replaceCompleteJson = async (json:string) => {
  await AsyncStorage.setItem(storageKeys.COMPLETE_JSON, json);     
}

// //Create HOME_JSON Empty Array
// export const createEmptyHomeJson = async (address: String) => {
//   await AsyncStorage.removeItem(storageKeys.HOME_JSON)
//   await AsyncStorage.setItem(storageKeys.HOME_JSON, JSON.stringify([]));     
// }

// //get HOME_JSON Array
// export const getHomeJson = async () => {
//   try {
//     return JSON.parse(await AsyncStorage.getItem(storageKeys.HOME_JSON));
//   } catch (e) {
//     console.log(e);
//   }
// }

export const addObjectInHomeJson = async (address: String, question: String, answer: String) => {  
  if ((await isHomeExistInCompleteJson(address)).valueOf()) {
    const json = await AsyncStorage.getItem(storageKeys.COMPLETE_JSON);
    const jsonArray = JSON.parse(json);
    const arr = [{'question':question}, {'answer':answer}];
    jsonArray.push(arr);
    replaceCompleteJson(JSON.stringify(jsonArray));

    const json1= await AsyncStorage.getItem(storageKeys.COMPLETE_JSON);
    console.log("@@@@@ Exist addObjectInHomeJson @@@" + JSON.parse(json1));
  } else {

    const json = await AsyncStorage.getItem(storageKeys.COMPLETE_JSON);
    const jsonArray = JSON.parse(json);
    const arr = [{address: {'question': question, 'answer':answer} }];
    jsonArray.push(arr);
    replaceCompleteJson(JSON.stringify(jsonArray));

    const json1= await AsyncStorage.getItem(storageKeys.COMPLETE_JSON);
    console.log("@@@@@ not Exist addObjectInHomeJson @@@" + JSON.parse(json));
  }
}

//get HOME EXIST in COMPLETE_JSON
export const isHomeExistInCompleteJson = async (address: String) => {
  const json = await AsyncStorage.getItem(storageKeys.COMPLETE_JSON);
  const jsonArray = JSON.parse(json);
    if (jsonArray.length > 0) {
      jsonArray.map((value) => {
        if (value.address == address) {          
          return true;   
        } else {          
          return false;   
        }
      })
    } else {
      return false
    }    
}

// //get HOME index in COMPLETE_JSON
// export const getHomeIndexInCompleteJson =async (address: String) => {
//   try {

//     const compJson = getCompletJson();

    
//     return getCompletJson().findIndex(home => {home.address === address});
//   } catch (e) {
//     console.log(e);
//   }
// }

// export const removeHomeFromCompleteJson = async (address: String) => {
//   try {
//     const newJson = getCompletJson.splice(getHomeIndexInCompleteJson(address), 1);
//     replaceCompleteJson(JSON.stringify(newJson))
//   } catch (e) {
//     console.log(e);
//   }
// }

// //Remove COMPLETE_JSON on export
// export const removeCompleteJson = () => {
//   AsyncStorage.removeItem(storageKeys.COMPLETE_JSON);
// };








// import AsyncStorage from '@react-native-async-storage/async-storage';
// export const addCard = async (newCard) => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@MyCards');
//     if (jsonValue != null) {
//       const data = JSON.parse(jsonValue);
//       const newData = {cards: [...data.cards, newCard]};
//       await AsyncStorage.setItem('@MyCards', JSON.stringify(newData));
//       return newData.cards;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };
// export const deleteCard = async (id) => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@MyCards');
//     if (jsonValue != null) {
//       const data = JSON.parse(jsonValue);
//       const filteredCards = data.cards.filter(card => card.id !== id);
//       const newData = {cards: filteredCards};
//       await AsyncStorage.setItem('@MyCards', JSON.stringify(newData));
//       return newData.cards;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };
// export const replaceCard = async (updatedCard) => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@MyCards');
//     if (jsonValue != null) {
//       const data = JSON.parse(jsonValue);
//       const updatedCards = data.cards.map(card => {
//         if (card.id === updatedCard.id) {
//           return updatedCard;
//         } else {
//           return card;
//         }
//       });
//       const newData = {cards: updatedCards};
//       await AsyncStorage.setItem('@MyCards', JSON.stringify(newData));
//       return newData.cards;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };