var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
var list1=[]
for (i in my_dict){
    list1.push(my_dict[i])
}
var i=0
var count=0
var list2=[]
while (i<list1.length){
    var j=0
    while (j<list1.length){
        if (list1[j]>list1[j]){
            if (!list1[i].includes (list2)){
                list2.push(list2[i])
            }
        }
        j++
    }
    i++

}
console.log(list2)