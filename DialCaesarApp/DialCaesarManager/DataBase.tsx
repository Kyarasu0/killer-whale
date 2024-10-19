import SQLite, { SQLiteDatabase, Transaction } from 'react-native-sqlite-storage';
import { View, Text, FlatList, StyleSheet } from 'react-native'; 
import React, { useEffect, useState } from "react"; 

let db: SQLiteDatabase;

export function CreateDataBase(): void {
  // データベースの定義
  db = SQLite.openDatabase(
    {
      name: 'Chipers.db',
      location: 'default',
    },
    () => {},
    error => {
      console.log(error);
    }
  );

  // テーブルの定義
  db.transaction((tx: Transaction) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ChiperTable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, chiper TEXT);'
    );
  });
}

// データの挿入
export function InsertDataBase(name: string, chiper: string): void {
  db.transaction((tx: Transaction) => {
    tx.executeSql('INSERT INTO ChiperTable (name, chiper) VALUES (?, ?)', [name, chiper]);
  });
}

// データの選択
export function SearchValue(name: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        'SELECT chiper FROM ChiperTable WHERE name = ?',
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

// ここから先追加
export function GetAllData(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM ChiperTable",
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
    CreateDataBase(); // データベースを作成

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

export default DisplayDataBase;
