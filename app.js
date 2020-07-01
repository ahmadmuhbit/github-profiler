// TODO: [x] Connect to GitHub API

let https = require('https')

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/ahmadmuhbit',
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}

// TODO: [x] Read the data
let request = https.request(options, (response) => {
    let body = ''
    response.on('data', (data) => {
        body = body + data
    })
    response.on('end', () => {
        console.log(body)
        
    })
})

request.end()
request.on('error', (e) => {
    console.log(e)
    
})

// TODO : Parse the data
// TODO : Print the data out