
function timelog(req, res, next) {
    const reqTime = new Date()
    const resTime = new Date()
    let now = reqTime

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

    // console.log('test')
    console.log(time + " " + route(req))
    next()
}

function route(req) {
    const path = req.originalUrl
    const method = req.method

    return method + ' from ' + path
}


module.exports = { timelog }







