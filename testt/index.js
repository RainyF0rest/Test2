//asyncAwait is for dn and loading API

async function getInfo(sta){
    const CarData = await fetch(`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=AEL&sta=${sta}` )
    const Json = await CarData.json()
    console.log(Json)    

    //Translate code into words
    const STA_NAME=
    {
        AWE:"博覧館",
        HOK:"香港",
        KOW:"九龍",
        TSY:"青衣",
        AIR:"機場"
    }

//QuickPath
    let Info=""
    let upInfo=[];

if (Json.data[`AEL-${sta}`].UP)
    {
    upInfo=Json.data[`AEL-${sta}`].UP
    }

    let downInfo=[];
if (Json.data[`AEL-${sta}`].DOWN)
    {
    downInfo=Json.data[`AEL-${sta}`].UP
    }

    const currTime=Json.curr_time;
    const options={
    hour:"numeric",
    minute:"numeric",
}
const timeNow=new Date(currTime).toLocaleString("th-THAI",options);
//define is this up or down


//Topic Div
arrivalTime(upInfo,up-msg);
arrivalTime(downInfo,down-msg);
function arrivalTime(aaray,cssName){
    let result=`<div id="time" ><div id="placeName">${STA_NAME[sta]}</div> 
    <div id="timeNow">${timeNow}</div></div>`

for(let eachTrain of array){
const isEvenNumber=eachTrain.seq%2===0;
console.log(eachTrain.seq%2===0)
let css="";
if(isEvenNumber){
    css="white blue"
}else{
    css="white"
}
result+=`<div class="${css}"><div id="staName">${STA_NAME[eachTrain.dest]}</div>  
<div id="plat">${eachTrain.plat}</div>  <div id="timeLeft">${calTTNT(currTime,eachTrain.time)
}</div>
</div>`

}
document.getElementById(cssName).innerHTML=result;
}

    //put words into HTML



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

getInfo(`HOK`);

function demo(sta){
    console.log(sta)
console.log(`ThankYou Im Fine`)}