import { InverseCalculator } from '../Calculator';
import { SearchValue } from '../DataBase';

// name(題名)とKeyVectorを受け取ってInverseCalculator関数で複合化してから題名と共に取得
export async function GetDecoder(name: string, KeyVector: string): Promise<string | null> {
    // name(題名) => ChiperText or null
    const ChiperText: string | null = await SearchValue(name);
    
    // ChiperText or null + KeyVector => PlainText or null
    if (ChiperText !== null) {
        const PlainText: string = InverseCalculator(ChiperText, KeyVector);
        return PlainText;
    } else {
        console.error("ChiperText is null for the given name:", name);
        return null;
    }
}
