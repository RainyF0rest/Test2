async function getInfo(){
    const CarData = await fetch("https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=AEL&sta=HOK" )
    const Json = await CarData.json()
    console.log(Json)    
    const STA_NAME={
AWE:"博覧館",
HOK:"香港"

    }

    const Info = Json.data["AEL-HOK"].UP
    document.getElementById("msg").innerHTML=
    `<div>${STA_NAME[Info[0].dest]} ${Info[0].plat} ${Info[0].time}
    </div>`}


getInfo();