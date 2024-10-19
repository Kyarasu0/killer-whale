import SQLite, { SQLiteDatabase, Transaction } from 'react-native-sqlite-storage';
import { View, Text, FlatList } from 'react-native'//追加 
import React, { useEffect, useState } from "react";//追加

let db: SQLiteDatabase;

export function CreateDataBase(): Promise<void> {
  return new Promise((resolve, reject) => {
    db = SQLite.openDatabase(
      {
        name: 'ChipersDataBase.db',
        location: 'default',
      },
      () => {
        db.transaction((tx: Transaction) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS ChipersTable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, chiper TEXT);',
            [],
            () => {
              resolve(); // 成功時に解決
            },
            (tx, error) => {
              console.log('テーブル作成エラー:', error);
              reject(error); // エラー時に拒否
            }
          );
        });
      },
      (error) => {
        console.log('データベースオープンエラー:', error);
        reject(error);
      }
    );
  });
}

// データの挿入
export function InsertDataBase(name: string,chiper: string): void{
  db.transaction((tx: Transaction) => {
    tx.executeSql('INSERT INTO ChipersTable (name, chiper) VALUES (?, ?)', 
    [name,chiper],
    () => {
      console.log('データが挿入されました');
    },
    (tx, error) => {
      console.log(error);
    }
  );
  })
};

//データの選択
export function SearchValue(name: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        'SELECT chiper FROM ChipersTable WHERE name = ?',
        [name],
        (_, resultSet) => {
          if (resultSet.rows.length > 0) {
            resolve(resultSet.rows.item(0).chiper);
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}

//ここから先追加
export function GetAllData(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM ChipersTable",
        [],
        (_, resultSet) => {
          const data: any[] = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            data.push(resultSet.rows.item(i));
          }
          resolve(data);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}

const DisplayDataBase = () => {
  const [data, setData] = useState<{ id: number; name: string; chiper: string; }[]>([]);

  useEffect(() => {
    GetAllData()
      .then((result) => {
        setData(result); // 取得したデータを設定
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text>ChiperList</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} : {item.chiper}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DisplayDataBase
