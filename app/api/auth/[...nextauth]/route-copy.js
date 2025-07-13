import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authenticateUser = async (email, password) => {
  try {
    const response = await fetch('https://oneclickhuman.com/api_request/login', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        'email': email,
        'password': password
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }
    });

    const json = await response.json();

    if (json.login === 'success' || json.login === 'on-verification') {
      return { 
        user_status : json.login, 
        user_id : json.id, 
        time : json.time, 
        user_email : json.user_email, 
        role: json.role 
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    return null;
  }
};


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await authenticateUser(credentials.email, credentials.password);
        if (user) {
          return user;
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  debug: true,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add all fields to the token on login
      if (user) {
        console.log(user);
        token.user_status = user.user_status, 
        token.user_id = user.user_id, 
        token.time = user.time, 
        token.user_email = user.user_email, 
        token.role = user.role 
      }
      return token;
    },
    async session({ session, token }) {
      console.log(token);
      // Make all fields available in the session
      session.user.user_status = token.user_status, 
      session.user.user_id = token.user_id, 
      session.user.time = token.time, 
      session.user.user_email = token.user_email, 
      session.user.role = token.role 

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
