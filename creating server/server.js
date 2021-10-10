const http=require('http')
// fs module is used to readfile

const fs=require('fs')

const server =http.createServer((req,res)=>{
    console.log('request made')
    //res.setHeader('Content-Type','text/html');
    //res.write('<h1>hello</h1>');
    //res.write('<h2>hello</h2>');
    //res.write('<h3>hello</h3>');
    //res.end()
    let path='./views'
    console.log(req.url)
    switch(req.url){
        case '/':
            path+='/index.html'
            break;
        case '/about':
            path+='/about.html'
            break;
        default:
            path+='/errorpage.html'
            break;


    }
    fs.readFile(path,(err,filedata)=>{
        if (err) {
            console.log(err)
            
        }
        else{
            res.write(filedata)
            res.end()
        }

    })
/*  fs.readFile('./views/index.html',(err,filedata)=>{
        if (err) {
            console.log(err)
            
        }
        else{
            res.write(filedata)
            res.end()
        }

    })
*/  

})

server.listen(3000,'localhost',()=>{console.log('server is listening 3000')})
