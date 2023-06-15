import * as fs from 'node:fs';

const data = {
  body: 'ok',
  bannerBody: '<html><body><h1>this is a banner</h1></body></html>',
};

export default function handler(_req, res) {
 if (!fs.existsSync('/output')) fs.mkdirSync('output');
  try {
    fs.writeFileSync('output/test.html', data.bannerBody);
    console.error('file created succesfully');
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(417).json(err);
  }


}
