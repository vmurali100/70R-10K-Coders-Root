const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports=app=>{
    app.use(createProxyMiddleware('/UserLoginAction',{
        target:"https://e-prathibha.com/apis/login/",
        secure:false,
        changeOrigin:true
    }))
        
}