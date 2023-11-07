import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";
import "dotenv/config";

const secret = process.env.JWT_SECRET || "";

const token = sign({
  exp: Date.now() + 24 * 60 * 60 * 60 * 1000,
  data: {
    sub: "lucas.fiori",
  },
  secret,
});

verify({
  token,
  secret,
});
