import nodemailer from 'nodemailer';

export const sendVerificationMail = async(name,email,userToken) => {
  try {
    const transport = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port:587,
      secure:false,
      requireTLS:true,
      auth:{
        user:'hello@wiraa.com',
        pass:'Singhania17$'
      }
    });
    const mailOption = {
      from:'hello@wiraa.com',
      to:email,
      subject:'for verification mail',
      html:'<p>Hii '+name+' please click here to <a href="https://wiraa-api.azurewebsites.net/api/v1/auth/verifyEmail?token='+userToken+'">verify</a> your mail</p>'
    }

    transport.sendMail(mailOption,(err,info) => {
      if(err){
        return err.message
      }
      else{
        console.log('email has been sent',info.response);
      }
    })
  } catch (error) {
    return error.message
  }
}

export const sendVerificationMailPass = async(name,email,userToken) => {
  try {
    const transport = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port:587,
      secure:false,
      requireTLS:true,
      auth:{
        user:'hello@wiraa.com',
        pass:'Singhania17$'
      }
    });
    const mailOption = {
      from:'hello@wiraa.com',
      to:email,
      subject:'for reset password',
      html:'<p>Hii '+name+' please click here to <a href="https://wiraa-api.azurewebsites.net/api/v1/auth/updatePassword?token='+userToken+'">verify</a> your mail</p>'
    }

    transport.sendMail(mailOption,(err,info) => {
      if(err){
        return err.message
      }
      else{
        console.log('email has been sent',info.response);
      }
    })
  } catch (error) {
    return error.message
  }
}
