import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoogleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Eye, EyeOff, ViewIcon } from "lucide-react";
import { useState } from "react";

// Asumsikan Anda memiliki gambar latar belakang yang tersimpan di public/image-bg.jpg
// Untuk contoh ini, kita akan menggunakan warna dan URL placeholder

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="max-h-screen h-screen grid lg:grid-cols-2 overflow-hidden">
            <div className="flex flex-col p-8 md:p-12 lg:p-16 text-white justify-center">
                <div className="absolute top-0 left-0 p-8 flex items-center">
                    <span className="text-xl font-semibold tracking-tight">Dynamic Inc.</span>
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <div className="text-left mb-8">
                        <h1 className="text-3xl font-bold mb-2 text-center">Login to your account</h1>
                        <span className="text-gray-400 text-sm text-center block"> Enter your email below to login to your account </span>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-semibold text-gray-200"> Email </Label>
                                <div className="relative">
                                    <Input id="email" type="email" placeholder="m@example.com" className="w-full text-white py-6 rounded-lg border-2 border-neutral-700" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <Label htmlFor="password" className="text-sm font-semibold text-gray-200"> Password </Label>
                                <a href="#" className="text-xs text-neutral-400 font-medium hover:text-white transition-colors duration-200 underline"> Forgot your password? </a>
                            </div>
                            <div className="relative">
                                <Input id="password" type={showPassword ? "text" : "password"} className="w-full text-white py-6 rounded-lg border-2 border-neutral-700" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white" >
                                    {showPassword
                                        ? <Eye size={20} />
                                        : <EyeOff size={20} />
                                    }
                                </button>
                            </div>
                        </div>

                        <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-2">
                            Login
                        </Button>

                        <div className="flex items-center space-x-2 ">
                            <div className="flex-grow border-t border-gray-700"></div>
                            <span className="text-sm capitalize text-gray-500">
                                Or continue with
                            </span>
                            <div className="flex-grow border-t border-gray-700"></div>
                        </div>

                        <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-2" >
                            <img src="icon-google.png" alt="" />
                            <span>Login with Google</span>
                        </Button>
                    </div>

                    <div className="mt-8 text-center font-medium">
                        <span className="inline-block">Don't have an account?</span>
                        <a href="#" className="ml-2 underline inline-block"> Sign up</a>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block max-h-screen">
                <img src='login.png' alt="Background image of buildings" className="h-full w-full object-cover" />
            </div>
        </div >
    );
};

export default Login;