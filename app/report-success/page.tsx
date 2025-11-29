import { Suspense } from "react"
import ReportSuccess from "@/components/report-success"

export const metadata = {
  title: "Report Submitted",
  description: "Your report has been submitted successfully",
}

export default function ReportSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F5F7F5] text-[#1B4D3E]">Loading...</div>}>
      <ReportSuccess />
    </Suspense>
  )
}
