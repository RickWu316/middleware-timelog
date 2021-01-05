
function timelog(req, res, next) {
    let reqTime = new Date()
    let now = reqTime

    res.on('finish', () => {
        let resTime = new Date()
        now = resTime
        const timeDiff = +resTime - +reqTime
        console.log(`需求時間: ${formatDateType(reqTime)} | ${route(req)} | 回傳時間:${formatDateType(resTime)} | total time: ${timeDiff}ms `)
    })

    next()
}

function route(req) {
    const path = req.originalUrl
    const method = req.method

    return method + ' from ' + path
}


function formatDateType(now) {

    const year = now.getYear() + 1900
    const month = now.getMonth() + 1
    const date = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    let time = year + "-" + month + "-" + date + " "
        + (hours < 10 ? "0" + hours : hours)
        + ":"
        + (minutes < 10 ? "0" + minutes : minutes)
        + ":"
        + (seconds < 10 ? "0" + seconds : seconds)
    return time
}

module.exports = { timelog }







