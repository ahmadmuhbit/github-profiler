// TODO: [x] Connect to GitHub API
let https = require('https')

const username = 'ahmadmuhbit'

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: `/users/${username}`,
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
    let profile = JSON.parse(body)
    if(response.statusCode === 200) {
    // TODO: [x] Parse the data
    // Convert String to JSON (Javascript object)
    // TODO: [x] Print the data out
    console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers(s).`)    
    } else {
        console.log(`Profile with username '${username}' not found.`)
        
    }
    
    })
})

request.end()
request.on('error', (e) => {
    console.log(e)
    
})