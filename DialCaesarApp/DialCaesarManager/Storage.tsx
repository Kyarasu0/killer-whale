import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calculator, InverseCalculator } from './Calculator';

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

    // results[0]が存在し、かつresults[0][1]がnullでないことを確認
    if (results[0] && results[0][1] !== null) {
      const dataListValue = results[0][1]; // JSON 形式の文字列を取得

      // JSON.parseを使ってオブジェクトの配列に変換
      const dataArray = JSON.parse(dataListValue);

      // 結果を表示
      console.log(dataArray);

      // dataArray内の各オブジェクトをループ
      for (const item of dataArray) {
        console.log(item); // 現在のアイテムを表示
        if (item.title === title) { // titleを比較
          console.log('取得したデータ:', item); // 取得したデータを表示
          return { title: item.title, chiper: InverseCalculator(item.chiper, keyVector) }; // 取得したデータをオブジェクトとして返す
        } else {
          console.log("エラー２"); // titleが一致しない場合のエラーメッセージ
        }
      }
    } else {
      console.error('データが見つかりませんでした、または無効な値です。'); // データが無効な場合のメッセージ
    }

    return null; // 該当するデータが見つからなかった場合
  } catch (e) {
    console.error('データの取得に失敗しました', e); // エラー処理
    alert('データの取得に失敗しました');
    return null;
  }
};

interface DataItem {
  title: string;
  chiper: string;
}

export const RemoveData = async (title: string): Promise<boolean> => {
  try {
      const allData = await AsyncStorage.getAllKeys(); // すべてのキーを取得
      const results = await AsyncStorage.multiGet(allData); // すべてのデータを取得

      // results[0]が存在し、かつresults[0][1]がnullでないことを確認
      if (results[0] && results[0][1] !== null) {
          const dataListValue = results[0][1]; // JSON形式の文字列を取得

          // JSON.parseを使ってオブジェクトの配列に変換
          const dataArray: DataItem[] = JSON.parse(dataListValue); // DataItem型を指定

          // 指定されたタイトルのデータをフィルタリング
          const newDataArray = dataArray.filter((item) => item.title !== title); // 指定されたタイトルを除外

          // データが削除された場合
          if (newDataArray.length < dataArray.length) {
              // 新しいデータを保存
              await AsyncStorage.setItem('dataList', JSON.stringify(newDataArray));
              console.log(`データ "${title}" を削除しました。`);
              return true; // 成功
          } else {
              console.log(`タイトル "${title}" に該当するデータは見つかりませんでした。`);
              return false; // 削除できなかった
          }
      } else {
          console.error('データが見つかりませんでした、または無効な値です。'); // データが無効な場合のメッセージ
      }

      return false; // 該当するデータが見つからなかった場合
  } catch (e) {
      console.error('データの取得に失敗しました', e); // エラー処理
      alert('データの取得に失敗しました');
      return false; // エラー発生
  }
};





