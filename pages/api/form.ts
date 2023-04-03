import apn from 'apn';

const options = {
    token: {
        key: "AuthKey_4HR478DYL7.p8",
        keyId: "4HR478DYL7",
        teamId: "JXRDDKQ33V"
    },
    production: false
};
  
const apnProvider = new apn.Provider(options);

export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    // if (!body.first || !body.last) {
    //   // Sends a HTTP bad request error code
    //   return res.status(400).json({ data: 'Some data missing' })
    // }
  
    let deviceToken = body.devicetoken;//"54f2a44ca63e2674702bef666ae510e82d99332951b4416e675590c12759db47"

    const note = new apn.Notification();

    note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    note.badge = 3;
    note.sound = body.sound;
    note.alert = body.alert;
    note.payload = {'message': body.payload};
    note.topic = body.topic;

    apnProvider.send(note, deviceToken).then( (result) => {
        console.log(result);
        apnProvider.shutdown();
    });

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `Message Sent` })
  }
  