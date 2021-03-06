import { GraphClient } from "./GraphHelper";
import { User, Message } from "@microsoft/microsoft-graph-types"

async function queryMicrosoftGraph() {
    const client = await GraphClient();

    return await client
        .api("/me")
        .version("beta")
        .get()
        .then((res) => {
            debugger;
            console.log(res)
        }).catch((error) => {
            debugger;
        });
}

queryMicrosoftGraph();



// *** app-javascript.js



async function findUsers() {
    const client = await GraphClient();

    return await client
        .api("/users")
        .get()
        .then((res) => {
            debugger;
            // console.log(res)
            let users:User[] = res.value;
            for (let user of users) {
                // console.log(user.displayName, user.mail)
            }
        }).catch((error) => {
            debugger;
        });
}

// findUsers();







let message:Message = {
    subject: "Microsoft Graph TypeScript Sample",
    toRecipients: [{
        emailAddress: {
            address: "dansil@microsoft.com"
        }
    }],
    body: {
        content: "<h1>Microsoft Graph TypeScript Sample</h1>Try modifying the sample",
        contentType: "html" // ***** strongly typed enum - try changing
    }
}

async function sendMail() {
    const client = await GraphClient();

    return await client
        .api("/users/me/sendMail")
        .post({message})
        .then((res) => {
            console.log("Mail sent!")
        }).catch((error) => {
            debugger;
        });
}

// sendMail();