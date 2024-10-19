import  { Calculator } from '../Calculator';
import  { InsertDataBase } from '../DataBase';

//name(題名)とPlainText(平文)とKeyVectorを受け取ってCalculator関数で暗号化してから題名と共にDataBaseに挿入
export function EncodeInserter(name :string, PlainText: string, KeyVector: string): void{
    //PlainText + KeyVector => ChiperText
    const ChiperText: string = Calculator(PlainText,KeyVector)
    //name(題名)とChiperTextをDataBaseに代入
    InsertDataBase(name,ChiperText);
}

export default EncodeInserter;