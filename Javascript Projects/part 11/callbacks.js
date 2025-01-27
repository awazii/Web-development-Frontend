function b (fun){
    console.log( "i am b ")
    fun()// this is called callback where we simply give function as a value
}
function c (){ 
    console.log( "i am called by using callback")
}
function a(fun){
    console.log( "i am a ")
    setTimeout(b,3000,fun)
}
a(c)
//this is what we called pyramind of doom
function pyrmateofdoom(){
    dom1(
        dom2(
            dom3(
                dom4(
                    dom5(
                        //and so on........
                    )
                )
            )
        )
    )
}