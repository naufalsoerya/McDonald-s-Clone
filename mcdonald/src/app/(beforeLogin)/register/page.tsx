import { redirect } from "next/navigation";
import Link from "next/link";

export default function register() {
    async function registerAction(formData: FormData) {
      "use server";
  
      const rawFormData = {
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      };
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register`, {
        method: "post",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
      });
      redirect("/login");
    }
  
    return (
      <>
        <div className="pt-20 mb-10">
          <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-sky-500">
              Register
            </h2>
            <form action={registerAction} className="space-y-4">
              <div>
                <label className="absolute left-2 -top-6 text-blue-500 text-sm transition-all">
                  Name
                </label>
                <input
                  className="w-full border-b-2 border-blue-500 p-2 focus:outline-none"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div>
                <input
                  className="w-full border-b-2 border-blue-500 p-2 focus:outline-none"
                  placeholder="Username"
                  type="text"
                  id="username"
                  name="username"
                />
              </div>
              <div>
                <input
                  className="w-full border-b-2 border-blue-500 p-2 focus:outline-none"
                  placeholder="E-mail"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div>
                <input
                  className="w-full border-b-2 border-blue-500 p-2 focus:outline-none"
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                />
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
                type="submit"
              >
                REGISTER
              </button>
              <div className="text-center mt-4 text-sm">
                Already have an account? Please,{" "}
                <Link
                  href={"/login"}
                  className="text-blue-500 hover:text-blue-700"
                >
                  SIGN IN.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }