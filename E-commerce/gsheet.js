

const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(
  "253772463981-0j671e9bu0r589drif8n6ktqmujumi4t.apps.googleusercontent.com",
  "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",
  "urn:ietf:wg:oauth:2.0:oob"
);

oAuth2Client.setCredentials({
    "type": "authorized_user",
    "client_id": "253772463981-0j671e9bu0r589drif8n6ktqmujumi4t.apps.googleusercontent.com",
    "client_secret": "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",
    "refresh_token": "1//0hh9lvfVIvj49CgYIARAAGBESNwF-L9IrEtPlfCzPh_k0zDw1mZtjC0J42fz7g9fNMA5pys5-W49bmfoVQOfN51t7vkFXpqnGkrU"
});

const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

async function read() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: "1BbmwQvqWjDnrEbMKvH3pXuSZNfyyMmZLFspd1V62hOo",
    range: "Products!A2:E",
  });

  const rows = response.data.values;
  if (rows.length) {
    console.log('Name, Major');
    //Print columns A and E, which correspond to indices 0 and 4.
    rows.map((row) => {
        console.log(`${row[0]}, ${row[4]}`);
    });
  } else {
    console.log('No data found.');
  }
}

read();

//async function write(products) {
//  let values = products.map((p) => [p.id, p.name, p.price, p.image, p.stock]);

 // const resource = {
  //  values,
  //};
 // const result = await sheets.spreadsheets.values.update({
 //   spreadsheetId: "1fO4WiyE2EP9AVT8qRLGbGrcdNPYxCAXiTBXwz3IafcM",
 //   range: "Products!A2:E",
  //  valueInputOption: "RAW",
 //   resource,
  //});

  //console.log(result.updatedCells);
//}

// async function readAndWrite() {
//   const products = await read();
//   products[0].stock = 20;
//   await write(products);
// }

// readAndWrite();

//module.exports = {
  //read,
  //write,
//};



//async function read() {
  //  const response = await sheets.spreadsheets.values.get({
    //  spreadsheetId: "1fO4WiyE2EP9AVT8qRLGbGrcdNPYxCAXiTBXwz3IafcM",
      //range: "Products!A2:E",
   // });
  
    //const rows = response.data.values;
    //id: +row[0],
      //name: row[1],
      //price: +row[2],
      //image: row[3],
      //stock: +row[4],
    //}));
  
    //return products;
  //}