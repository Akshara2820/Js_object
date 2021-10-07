var myDict= { 1: 'NAVGURUKUL', 2: 'IN',
3:{
'A' : 'WELCOME', 'B' : 'To', 'C' : 'DHARAMSALA' } }

var i=0
for (i in myDict){
    if (typeof[i]==="object"){
        delete myDict[i]["B"]
    }
}console.log(myDict)
