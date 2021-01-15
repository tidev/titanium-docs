---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/Posts/Posts.yml
---
# Modules.Cloud.Posts

<TypeHeader/>

## Examples

### Create Post

This example creates a new post and checks the response.

``` js
Cloud.Posts.create({
    content: 'Man Walks On Moon',
    title: 'News of the day',
    photo: Titanium.Filesystem.getFile('photo.jpg')
}, function (e) {
    if (e.success) {
        var post = e.posts[0];
        alert('Success:\n' +
            'id: ' + post.id + '\n' +
            'title: ' + post.title + '\n' +
            'content: ' + post.content + '\n' +
            'updated_at: ' + post.updated_at);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Show a Post

This example retrieves information about a post and checks the response.

``` js
Cloud.Posts.show({
    post_id: savedPostId
}, function (e) {
    if (e.success) {
        var post = e.posts[0];
        alert('Success:\n' +
            'id: ' + post.id + '\n' +
            'title: ' + post.title + '\n' +
            'content: ' + post.content + '\n' +
            'updated_at: ' + post.updated_at);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Query for Posts

This example requests a list of posts and checks the response.

``` js
Cloud.Posts.query({
    page: 1,
    per_page: 20,
    where: {
        reviews_count: { '$gt': 1.0 }
    }
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.posts.length);
        for (var i = 0; i < e.posts.length; i++) {
            var post = e.posts[i];
            alert('id: ' + post.id + '\n' +
                'id: ' + post.id + '\n' +
                'title: ' + post.title + '\n' +
                'content: ' + post.content + '\n' +
                'updated_at: ' + post.updated_at);
        }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Update a Post

This example updates a post and checks the response.

``` js
Cloud.Posts.update({
    post_id: savedPostId,
    title: 'Lunar Eclipse'
}, function (e) {
    if (e.success) {
        var post = e.posts[0];
        alert('Success:\n' +
            'id: ' + post.id + '\n' +
            'title: ' + post.title + '\n' +
            'content: ' + post.content + '\n' +
            'updated_at: ' + post.updated_at);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Remove a Post

This example deletes a post and checks the response.

``` js
Cloud.Posts.remove({
    post_id: savedPostId
}, function (e) {
    if (e.success) {
        alert('Success');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

<ApiDocs/>
