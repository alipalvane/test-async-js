const { fetchDate } = require("./http");

const loadData = ()=>{
    return fetchDate().then(data=>{
        const title = data.title
        return title
    })
}

const outputTitle = ()=>{
    loadData().then(title=>{
        console.log(title)
    })
}

exports.loadData = loadData
exports.outputTitle = outputTitle
