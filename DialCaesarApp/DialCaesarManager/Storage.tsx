import AsyncStorage from '@react-native-async-storage/async-storage';
import { InverseCalculator } from './Calculator';

// export const StoreStorage = async (title: string, chiper: string) => {
//   try {
//     await AsyncStorage.setItem(title, chiper);
//     console.log('データを保存しました');
//   } catch (e) {
//     console.error('データの保存に失敗しました', e);
//   }
// };

// データを取得する関数
export const GetData = async (title: string, keyVector: string): Promise<{ title: string; chiper: string } | null> => {
  try {
    const allData = await AsyncStorage.getAllKeys(); // すべてのキーを取得
    const results = await AsyncStorage.multiGet(allData); // すべてのデータを取得

    // resultsは[[key, value], [key, value], ...]の配列
    for (const [key, value] of results) {
      if (key === title) {
        if (value !== null) {
          console.log('取得したデータ:', value);
          return { title: key, chiper: InverseCalculator(value, keyVector) }; // 取得したデータをオブジェクトとして返す
        }else{
          console.log("エラー１")
        }
      }else{
        console.log("エラー２")
      }
    }

    return null; // 該当するデータが見つからなかった場合
  } catch (e) {
    console.error('データの取得に失敗しました', e);
    alert('データの取得に失敗しました');
    return null;
  }
};


// データを削除する関数
export const RemoveData = async (title: string): Promise<void> => {
  try {
    const allKeys = await AsyncStorage.getAllKeys(); // すべてのキーを取得
    const results = await AsyncStorage.multiGet(allKeys); // すべてのデータを取得

    // resultsは[[key, value], [key, value], ...]の配列
    const toRemoveKeys: string[] = []; // 削除対象のキーを格納する配列

    for (const [key, value] of results) {
      if (key === title) {
        toRemoveKeys.push(key); // 一致するキーを削除対象に追加
      }
    }

    // 一致するキーがあれば削除
    if (toRemoveKeys.length > 0) {
      await AsyncStorage.multiRemove(toRemoveKeys);
      console.log('データを削除しました:', toRemoveKeys);
    } else {
      console.log('該当するデータが見つかりませんでした');
    }
  } catch (e) {
    console.error('データの削除に失敗しました', e);
  }
};



