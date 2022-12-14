import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  expiresIn: '7d',
};

const generateToken = (id:number, username:string): string => {
  const token = jwt.sign(
    { id,
      username },
    secret,
    jwtConfig,
  );
  return token;
};

export default generateToken;