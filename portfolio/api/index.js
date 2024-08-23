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

    isEmail = email.includes("@") && email.includes(".");

    if (!name || !email || !message || !isEmail) {
        return res.status(400).send("Invalid data.");
    }
    
    const embed = {
        title: "New Contact Form Submission 📩",
        color: 0x00ff00,
        fields: [
            {
                name: "Name",
                value: name
            },
            {
                name: "Email",
                value: email
            },
            {
                name: "Message",
                value: message
            }
        ]
    }

    const data = JSON.stringify({
        embeds: [embed]
    });

    const config = {
        method: 'post',
        url: webhook,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config).then(response => {
        console.log('Webhook sent successfully');
    }).catch(error => {
        console.error('Failed to send webhook:', error);
    });

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});