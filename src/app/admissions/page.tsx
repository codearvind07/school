import { Metadata } from "next";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import {
  GraduationCap,
  FileText,
  ClipboardCheck,
  Users,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  School,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apply Now - Little Wonders Public School",
  description:
    "Apply for admission at Little Wonders Public School. A nurturing environment where young minds grow.",
};

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="flex-grow pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Admissions Open
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Shape Your Child’s Future
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Join <span className="font-semibold text-gray-900">Little Wonders Public School</span> —  
              a place where curiosity, confidence, and character are nurtured.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT */}
            <div>
              {/* PROCESS */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center gap-3">
                <ClipboardCheck className="w-6 h-6 text-blue-600" />
                Admission Process
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: FileText,
                    title: "Submit Application",
                    desc: "Complete the admission form with accurate student details.",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Document Verification",
                    desc: "Our admissions team reviews all submitted documents.",
                  },
                  {
                    icon: Users,
                    title: "Interaction Session",
                    desc: "A brief interaction may be scheduled for select grades.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Admission Confirmation",
                    desc: "Final decision and next steps are shared via email.",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* DOCUMENTS */}
              <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Required Documents
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Completed application form",
                    "Birth certificate",
                    "Previous academic records",
                    "Address proof",
                    "Passport size photographs",
                    "Transfer certificate (if applicable)",
                  ].map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FORM */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center gap-3">
                <School className="w-6 h-6 text-blue-600" />
                Application Form
              </h2>

              <form className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input icon={User} label="First Name" placeholder="Child’s first name" />
                  <Input icon={User} label="Last Name" placeholder="Child’s last name" />
                </div>

                <Input icon={Calendar} type="date" label="Date of Birth" />
                <Select />

                <Input icon={User} label="Parent / Guardian Name" />
                <Input icon={Mail} type="email" label="Email Address" />
                <Input icon={Phone} type="tel" label="Phone Number" />
                <Textarea icon={MapPin} label="Address" rows={3} />
                <Textarea label="Additional Information" rows={4} />

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                  <p className="text-sm text-gray-600">
                    I agree to the terms and privacy policy.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- Components ---------------- */

const Input = ({ icon: Icon, label, type = "text", placeholder = "" }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  </div>
);

const Textarea = ({ icon: Icon, label, rows }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
      )}
      <textarea
        rows={rows}
        className={`w-full rounded-lg border border-gray-300 ${
          Icon ? "pl-10" : "pl-4"
        } pr-4 py-3 focus:border-blue-500 focus:ring-blue-500`}
      />
    </div>
  </div>
);

const Select = () => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Grade Applying For
    </label>
    <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-blue-500">
      <option value="">Select grade</option>
      {["Nursery", "KG 1", "KG 2", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)].map(
        (g) => (
          <option key={g}>{g}</option>
        )
      )}
    </select>
  </div>
);
