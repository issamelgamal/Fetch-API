let thePosts = document.querySelector(".show-data")
function getposts() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    .then(posts =>{
        console.log(posts)
        posts.forEach((post)=>{
            // create main div Element 
            let mainDiv = document.createElement("div");
            mainDiv.className = 'main-div'
            // create posts id and add class name
            let postsId = document.createElement("div")
            postsId.className = 'posts-id';
            let Postsid = document.createTextNode(`Post num.${post.id}`);
            postsId.appendChild(Postsid)
            // create posts title and add class name
            let postsTitle = document.createElement("div")
            postsTitle.className = 'posts-title';
            let PostsName = document.createTextNode(post.title);
            postsTitle.appendChild(PostsName)
            
            // create posts body and add class name
            let postsbody = document.createElement("div")
            let PostBody = document.createTextNode(post.body);
            postsbody.appendChild(PostBody)
            postsbody.className = 'posts-body';

            //append postname to main div
            mainDiv.appendChild(postsTitle);
            //append post body to main div
            mainDiv.appendChild(postsbody);
            //append postsid to main div
            mainDiv.appendChild(postsId);
            //append main div to container
            thePosts.appendChild(mainDiv);
        })
    })
}
getposts()