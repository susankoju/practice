let env_mode =process.env.ENV_MODE ||'production';
let config={};
if(env_mode ==='dev'){
    config = {
        basename: '',
        dbname: '',
        host: '',
        port: '',

    };
}
    else{
    config = {
        basename: 'react-messageall',
        dbname: '',
        host: '',
        port: '',

    };
}

module.exports=config;
