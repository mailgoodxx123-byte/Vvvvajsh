import { read } from 'fs';
import  *as https from 'https';
import { proxyAgent} from 'proxy-agent';

const agent = nev proxyAgent();

https.get('https://jsonip.com',{agent},(res)=>{


    console.log(res.statusCode,res.headers);
    res.pipe(process.stdout);

});