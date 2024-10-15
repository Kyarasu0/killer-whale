import SQLite from 'react-native-sqlite-storage';

function Create_DB_Table(){
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
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ChiperTable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, chiper TEXT);'
    );
  });
};

// データの挿入
function InsertDataBase(name,chiper){
  db.transaction(tx => {
    tx.executeSql('INSERT INTO ChiperTable (name, chiper) VALUES (?, ?)', [name,chiper]);
  })
};

//データの検索
function SearchValue(name){
  db.transaction(tx => {
    tx.executeSql('SELECT chiper FROM ChiperTable WHERE name = ?',[name]);
  })
  return chiper
};
