exports.errorPage = (req,resp)=>{
    // resp.sendFile(Path.join(global ,'/pages/ErrorPage.html'))
    resp.render('Ejs-Pages/ErrorPage' , {Pagetitle: 'Error Page' ,path: 'ErrorPage'})
}