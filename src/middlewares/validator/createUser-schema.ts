import { body } from "express-validator"


const schema = [
    body("name").notEmpty().withMessage("fild empty"),
    body("email").isEmail().withMessage("email invalid"),
    body("password").isStrongPassword().withMessage("a senha precisa ter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra miníscula, 1 número e 1 símbolo")
]

export { schema as userSchema }