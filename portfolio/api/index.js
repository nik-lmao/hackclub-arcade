const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


const webhook = "https://discord.com/api/webhooks/1260132405428355073/bEtlph6iiAPxFeBVCEjInCVBRAaIVcOgcMAslcgg5TFtqIkTNs9Kh_n5ouzxsOfSZ0Zd"

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body)

    if (!name || !email || !message) {
        return res.status(400).send("Missing fields");
    }

    const payload = {
        content: `You received a new contact form submission: \n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
    };

    axios.post(webhook, payload)
        .then(response => {
            console.log('Webhook sent successfully');
        })
        .catch(error => {
            console.error('Failed to send webhook:', error);
        });

    res.status(200).send("OK");

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});