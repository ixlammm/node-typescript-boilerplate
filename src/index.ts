import express from "express"

function getHello() {
    return "Hello World";
}

/** Top level await expressions are supportedz */

const hello = await getHello();

const app = express()
app.get('/', (req, res) => {
    res.json({ message: hello });
    res.status(200)
    res.end()
})

const port = 3001
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})