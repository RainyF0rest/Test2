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
//translate Time>TimeStamp>How much time left
    const Info = Json.data["AEL-HOK"].UP
 const now=Json.curr_time
    const nowTimeStamp=new Date(now).getTime();

const train1Time=Info[0].time
const train1TimeStamp=new Date(train1Time).getTime();

const nextTrain1=Math.ceil((train1TimeStamp-nowTimeStamp)/1000/60);

//automatic the process of calculate instead of writing code for every train
function getTimeDifferent(curr,next){
    const nowTimeStamp=new Date(curr).getTime();
    const train1TimeStamp=new Date(next).getTime();
    const nextTrain1=Math.ceil((train1TimeStamp-nowTimeStamp)/1000/60);

if (nextTrain1 === 1 ){
return `即將到達`}
else if (nextTrain1 <= 0 ){
return `稍微延遲`}
else {
    return `${nextTrain1}分鐘`
}
}
//Write=/=CallFunction , we can call the fc out now
const train1TimeDif=getTimeDifferent(now,Info[0].time)
const train2TimeDif=getTimeDifferent(now,Info[1].time)



//put the words back into the HTML
    document.getElementById("msg").innerHTML=
    `<div>${STA_NAME[Info[0].dest]} ${Info[0].plat} ${train1TimeDif}
    </div>
    <div>${STA_NAME[Info[1].dest]} ${Info[1].plat} ${train2TimeDif}
    </div>`
   
}


getInfo();