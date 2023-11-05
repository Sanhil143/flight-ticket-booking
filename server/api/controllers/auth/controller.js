import { generateFromEmail } from "unique-username-generator";
import bcrypt from 'bcrypt'
import {emailRegex,phoneNumberRegex} from '../../../validators/validators'

class Controller{
async	userSignup(req,res){
    try {
       const body = req.body;  
		   if(!body){
				return res.status(400).send({status:false,error:"please provide some in body"})
		   }
			 const { firstName, lastName, email, number, password } = body;
    if (!firstName) {
      return res
        .status(400)
        .send({ status: false, message: "firstname is needed" });
    }
    if (!lastName) {
      return res
        .status(400)
        .send({ status: false, message: "lastname is needed" });
    }
    if (
      (email && !emailRegex.test(email)) ||
      (number && !phoneNumberRegex.test(number))
    ) {
      return res
        .status(400)
        .send({ status: false, message: "correct email or number is needed" });
    }

    let user = firstName + lastName;
    let generatedUser;
    if (email) {
      generatedUser = generateFromEmail(email, 4);
    } else {
      generatedUser = generateFromEmail(user, 4);
    }
    req.body.username = generatedUser;
    if (!password || password.length < 6) {
      return res.status(400).send({
        status: false,
        message: "password is needed or minimum length is 6",
      });
    }
    const hashed = await bcrypt.hash(password, 10);
    req.body.password = hashed;
        } catch (error) {
                  
        }
   }
}


export default new Controller();