def Calculator(PlainText,KeyVector):

    list_1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    list_2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    list_3 = ["0","1","2","3","4","5","6","7","8","9"]
    String = list(PlainText)
    New_String_List = []

    #入力内容の定義
    KeyVector_Number_Input = KeyVector.split("/")

    #最後の要素にinverseがついていたらそれぞれの成分に-1をかける
    #inverseの処理の後にそれぞれの要素をstrからintにする
    if "inverse" in KeyVector_Number_Input:
        KeyVector_Number_Input.remove("inverse")
        KeyVector_Number_before = list(map(int,KeyVector_Number_Input))
        KeyVector_Number = list(map(lambda x:x*-1,KeyVector_Number_before))
    else:
        KeyVector_Number = list(map(int,KeyVector_Number_Input))



    #New_String_Listのリストの生成
    for i in range(len(String)):
        #list_1と照合
        if String[i] in list_1:
            Before_Number = list_1.index(String[i])
            After_Number = (Before_Number + KeyVector_Number[i % len(KeyVector_Number)]) % 26
            New_String_List.append(list_1[After_Number])
        #list_2と照合
        elif String[i] in list_2:
            Before_Number = list_2.index(String[i])
            After_Number = (Before_Number + KeyVector_Number[i % len(KeyVector_Number)]) % 26
            New_String_List.append(list_2[After_Number])
        #list_3と照合
        elif String[i] in list_3:
            Before_Number = list_3.index(String[i])
            After_Number = (Before_Number + KeyVector_Number[i % len(KeyVector_Number)]) % 10
            New_String_List.append(list_3[After_Number])
        #list_1,list_2以外の文字はそのまま保存
        else:
            New_String_List.append(String[i])

    #New_String_ListからNew_Stringの作成
    New_String = "".join(New_String_List)

    return New_String

        
    
