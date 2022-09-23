const express = require("express")
const nodemailer = require("nodemailer")


// create the transporter
// using ethereal as a fake mail service
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'felton.schaefer@ethereal.email',
        pass: 'hX9Z8E3Tn8mQ4EQJst'
    }
});

// const transporter2 = nodemailer.createTransport({
//     host: 'Gmail',
//     auth: {
//         user: 'yourAccount@gmail.email',
//         pass: 'yourPassword'
//     }
// });

const app = express()


app.post("/email",async (req,res)=>{
    // sending mail
    const info = await transporter.sendMail({
        from: "targeuser@email.com" , // sender address
        to: "fromuser@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        // text: "Hello world?", // plain text body
        html:`
            <h1>this is the content</h1>
        `, // html body
    })
    // check the path to easy access to in via the browser
    const emailPath = nodemailer.getTestMessageUrl(info)
    console.log(emailPath)
    res.send({message:"success"})
})

app.listen(3000,()=>{
    console.log("app is running")
})