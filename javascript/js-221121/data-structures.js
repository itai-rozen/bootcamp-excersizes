const A = [4,3,2,1,5,2]
const B = [0,1,0,0,0,1]
// 0 - up 1 - down
// upstream - remove from array start
// downstream = remove from array end



const getRemainingFish = (sizeArr,directionArr) => {
    let upstreams = []
    let downstreams = []
    directionArr.forEach((fishDirection,i) => {
        if (fishDirection) {
            downstreams.unshift({
            size :sizeArr[i],
            index : i
        }) 
    } else upstreams.push({
            size: sizeArr[i],
            index: i
        })
    })
    console.log('upstreams: ',upstreams)
    console.log('downstreams: ',downstreams)
    let i = 0
    let j = 0
    let survivors = 0
    while (upstreams.length > 0 && downstreams.length > 0){
        let currentUpStreamer = upstreams[0]
        let currentDownStreamer = downstreams[0]
        if (currentUpStreamer.index < currentDownStreamer.index){
            survivors++
            upstreams.shift()
        } 
        (currentUpStreamer.size > currentDownStreamer.size) ? 
        downstreams.shift() :
        upstreams.shift()   
    }
    console.log('upstreams: ',upstreams)
    console.log('downstreams: ',downstreams)
    
}

console.log(getRemainingFish(A,B))