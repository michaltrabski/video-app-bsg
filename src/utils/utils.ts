import axios, { AxiosResponse, AxiosError } from "axios";

export interface AuthData {
  User: {
    Id: number;
    UserName: string;
    FullName: string;
    Email: string;
    Initials: string;
    AvatarUrl: string;
    PhoneNumber: string;
    ClientRoles: [string];
  };
  AuthorizationToken: {
    Token: string;
    TokenExpires: "string";
    RefreshToken: "string";
  };
}

const SIGN_IN_ENDPOINT = "https://thebetter.bsgroup.eu/Authorization/SignInX";

export const login = async () => {
  return new Promise((resolve, reject) => {
    localStorage.clear();

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };

    axios
      .post(SIGN_IN_ENDPOINT, {
        ...config,
        data: {},
      })
      .then((res: AxiosResponse<AuthData>) => {
        const { Token } = res.data.AuthorizationToken;
        localStorage.setItem("token", Token);
        resolve(res.data);
      })
      .catch((err: Error | AxiosError) => {
        console.log(1111111111111, err.message);
        reject(err);
      });
  });
};
