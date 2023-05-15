import fsPromises from 'node:fs/promises'

export const backup = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    try {
        await fsPromises.appendFile('./data/post.json', `${JSON.stringify(posts, null, 2)}`)
    }
    catch (err) {
        console.error(err);
    }

    let id;
    const idArr = posts.map((elt) => {
        return (
            id = elt.id
        )
    })
    console.log(idArr);

    await idArr.forEach(async elt => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${elt}/comments`);
        const comments = await response.json();

        try {
            await fsPromises.appendFile('./data/comments.json', `${JSON.stringify(comments, null, 2)}`)
        }
        catch (err) {
            console.error(err);
        }
    });


}