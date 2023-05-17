const express = require('express');
const { spawn } = require('child_process');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const { google } = require("googleapis");
const path= require("path");
const fs=require("fs");

const client_id = '823774867075-4vq0do4ntr6648foobhdnt6puundmn8a.apps.googleusercontent.com';
const client_secret = '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';
const rediretURI = 'https://developers.google.com/oauthplayground/';
const api_key = 'AIzaSyDfAMqT_3UeZ-xDYEXev2z9TEAOyGdZnAo';
const refresh_token = '1//04gxSAWVBjcieCgYIARAAGAQSNgF-L9IrLNHC5sSxXDOduGGGOpUSvBYwTAXKbdo5-1GD1vnmF5fhucGR1rlYtCA1XuuzsvDpPw';
const oauthtoclient = new google.auth.OAuth2(
  client_id,
  client_secret,
  rediretURI
);
oauthtoclient.setCredentials({ refresh_token: refresh_token });

var mId = "";
const drive = google.drive({
  version: 'v3',
  auth: oauthtoclient
})

app.use(cors());
app.get("/api", (req, res) => {
  const fileurl = path.join(__dirname, "test.webm");

  async function uploadFile() {
    try {
      const response = await drive.files.create({
        requestBody: {
          name: 'test.webm',
          mimeType: 'video/webm'
        },
        media: {
          mimeType: 'video/webm',
          body: fs.createReadStream(fileurl)
        }
      })
      console.log(response);
      mId = response.id;
    }
    catch (error) {
      console.log(error.message);
    }
  }

  async function getLink() {
    try {
      await uploadFile();
      const file_id = mId;
      await drive.permissions.create({
        fileId: file_id,
        requestBody: {
          role: 'reader',
          type: 'anyone'
        }
      })
      const url = await drive.files.get({
        fileId: file_id,
        fields: 'webViewLink, webContentLink'
      })
      console.log(url);
    } catch (error) {
      console.log(error.message);
    }
  }
  let result = '';
  const pythonProcess=spawn('python',['./script.py']);
  pythonProcess.stdout.on('data',data=>{
    console.log("the data is - "+data.toString());
    // update result variable
    result = data.toString();
  });
  pythonProcess.on('exit', () => {
    // send response after process has completed
    res.json({ result:result});
  });

})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));