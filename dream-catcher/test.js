import express from 'express'
import 'dotenv/config'

console.log('The Node Environment is set to: ', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode enabled 😎')
}

if (process.env.NODE_ENV !== 'production') {
    console.log('We are not in production mode 👨‍💻')
}

const app = express()

app.get('/', (req, res) => {
    res.send(`<!doctype html><html><body>Hello Express!</body></html>`)
})

const PORT = process.env.PORT || 8001;

app.listen(PORT, '0.0.0.0', () => {
    console.log('Listening on port ${PORT}');
});
