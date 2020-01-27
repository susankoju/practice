const JOI = require('@hapi/joi');

userValid =(input)=>{

    const schema = JOI.object({
        username: JOI.string()
            .min(3)
            .max(30)
            .required(),
    });
    

return new Promise=(resolve,reject) => {

        const { error, value } = schema.validate(input);
        if (error)
            reject(error);
        else
            resolve(value);
}

    //validation
};

module.exports={
    userValid,
};