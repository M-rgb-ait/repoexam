declare type APIUser = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  picture: string;
};

declare type LoginResponse = {
  token: string;
  user: APIUser;
};
