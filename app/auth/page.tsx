import { Suspense } from "react"
import LoginScreen from "@/components/login-screen"

export default function AuthPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F5F7F5] text-[#1B4D3E]">Loading...</div>}>
            <LoginScreen />
        </Suspense>
    )
}
