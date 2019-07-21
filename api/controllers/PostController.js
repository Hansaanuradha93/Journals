// dummy database
const post1 = {id: 1, title: 'Title 1', body: 'body1'}
const post2 = {id: 2, title: 'Title 2', body: 'body2'}
const post3 = {id: 3, title: 'Title 3', body: 'body3'}
const allPosts = [post1, post2, post3]

module.exports = {
    // posts endpoint
    posts: function(req, res) {
        res.send(allPosts)
    },

    // create endpoint
    create: function(req, res) {
        // lets get the values from the url
        const title = req.param('title')
        const body = req.param('body')

        // lets print it in the console
        sails.log.warn(title + " " + body)
        // lets create a new post
        const newPost = {id: 4, title: title, body: body}

        // lets push it to the post array
        allPosts.push(newPost)

        res.end()
    },

    // findById endpoint
    findById: function(req, res) {
        const postId = req.param('postId')

        // Extract post with postId
        const filterPosts = allPosts.filter(p => {return p.id == postId})

        // Check to find we have any filtered posts
        if (filterPosts.length > 0) {
            res.send(filterPosts[0])
        } else {
            res.send('Failed to find id: ' + postId)
        }
    }

}