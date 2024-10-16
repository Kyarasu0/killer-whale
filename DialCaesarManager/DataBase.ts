import SQLite, { SQLiteDatabase, Transaction } from 'react-native-sqlite-storage';

let db: SQLiteDatabase;

function Create_DAT(): void{
  //データベースの定義
  const db = SQLite.openDatabase(
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
};

// データの挿入
function InsertDataBase(name: string,chiper: string): void{
  db.transaction((tx: Transaction) => {
    tx.executeSql('INSERT INTO ChiperTable (name, chiper) VALUES (?, ?)', [name,chiper]);
  })
};

//データの選択
function SearchValue(name: string): Promise<string | null> {
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

