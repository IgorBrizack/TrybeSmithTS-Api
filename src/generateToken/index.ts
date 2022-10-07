import jwt from 'jsonwebtoken';
import UserData from '../interfaces/userData.interface';

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  expiresIn: '7d',
};

const generateToken = ({ id, username }:UserData): string => {
  const token = jwt.sign(
    { data: { id, username } },
    secret,
    jwtConfig,
  );
  return token;
};

export default generateToken;