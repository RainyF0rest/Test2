//asyncAwait is for dn and loading API

async function getInfo(){
    const CarData = await fetch("https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=AEL&sta=HOK" )
    const Json = await CarData.json()
    console.log(Json)    
    //Translate code into words
    const STA_NAME={
AWE:"博覧館",
HOK:"香港"
    }
//QuickPath
const Info=Json.data["AEL-HOK"].UP
const currTime=Json.curr_time;
const timeNow=new Date(currTime)
console.log(timeNow)

let result=`<div>${timeNow}</div>`

for(let eachTrain of Info){
result+=`<div>${STA_NAME[eachTrain.dest]}  ${eachTrain.plat}  ${calTTNT(currTime,eachTrain.time)}</div>`

}

    //put words into HTML
document.getElementById("msg").innerHTML=result


//get Time > TimeStamp>calculate
function calTTNT(curr,next){
const ttnt1 = Math.ceil((new Date(next).getTime()-new Date(curr).getTime())/1000/60)
if (ttnt1===1){
return "即將到達"
}
else if(ttnt1<=0){
return "正在開出"
}else{
return `${ttnt1}分鐘`
}
}

}
getInfo();