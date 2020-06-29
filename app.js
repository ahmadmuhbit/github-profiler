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

let request = https.request(options, (result) => {
    console.log('Got response: ', result.statusCode)
})

request.end()
request.on('error', (e) => {
    console.log(e)
    
})

// TODO : Read the data
// TODO : Parse the data
// TODO : Print the data out