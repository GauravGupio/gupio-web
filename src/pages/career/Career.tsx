import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

import career_bg from "../../assets/images/career_bg.png";
import partner from "../../assets/images/partner.png";

const jobRoles = [
  { title: "Marketing", jobs: ["Digital Marketing Manager"], link: "/career/digital-marketing-manager" },
  { title: "Sales", jobs: ["B2B Sales Intern"], link: "/career/sales-intern" },
  { title: "HR", message: "Dreaming of working with us? Stay connected – we've got more openings coming up!", linkedinMessage: "Till then Follow our LinkedIn Page for Updates" },
  { title: "Finance", jobs: ["Finance Intern"], link: "/career/finance-intern" },
  { title: "Operations", message: "Dreaming of working with us? Stay connected – we've got more openings coming up!", linkedinMessage: "Till then Follow our LinkedIn Page for Updates" },
  { title: "Mobility Management", message: "Dreaming of working with us? Stay connected – we've got more openings coming up!", linkedinMessage: "Till then Follow our LinkedIn Page for Updates" },
  { title: "Tech", jobs: ["Backend Intern", "Backend Developer", "Frontend Intern", "Frontend Developer"], links: ["/career/backend-intern", "/career/backend-developer", "/career/frontend-intern", "/career/frontend-developer"] },
];

const schema = z.object({
  fullName: z.string().min(1, "Full name is required").regex(/^[a-zA-Z\s]+$/, "Full name should contain only letters and spaces"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  experience: z.string().refine((val) => /^(\d+(\.\d+)?)$/.test(val), { message: "Experience must be a number (e.g., 1, 2.5)" }),
  role: z.string().min(1, "Role is required"),
  resume: z.any().refine((file) => file?.length > 0, { message: "Resume is required" }),
});

type FormData = z.infer<typeof schema>;

const Career = () => {
  const [openJob, setOpenJob] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const toggleJob = (title: string) => {
    setOpenJob(openJob === title ? null : title);
  };

  const onSubmit = (data: FormData) => {
    alert("Application submitted successfully!");
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#00021a]  text-white">
      {/* Banner with Career title */}
      <div className="w-full h-64 relative flex items-center">
        <img src={career_bg} alt="Career Banner" className="w-full h-full object-cover" />
        <h1 className="absolute top-1/2 transform -translate-y-1/2 ml-20 text-[56px] font-bold text-yellow-400">
          Career
        </h1>
      </div>

      {/* Main Section */}
      <div className="max-w-10xl mx-auto px-6 py-16 md:flex md:space-x-16 flex-1 w-[80%] ">
        {/* Job Openings Accordion */}
        <div className="md:w-1/2 space-y-10">
          <div className="space-y-6">
            {jobRoles.map((job) => (
              <div
                key={job.title}
                className="bg-yellow-500 rounded-none p-7 min-h-[140px] md:w-[calc(100%+100px)] -ml-[75px] 
                           cursor-pointer shadow transition-transform hover:scale-105 
                           border-2 border-transparent hover:border-yellow-400"
                onClick={() => toggleJob(job.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleJob(job.title);
                }}
                aria-expanded={openJob === job.title}
              >
                <div className="flex justify-between items-center font-bold text-[26px] text-black">
                  <span>{job.title}</span>
                  {openJob === job.title ? (
                    <FaArrowCircleDown color="#000" size={34} />
                  ) : (
                    <FaArrowCircleUp color="#000" size={34} />
                  )}
                </div>

                {openJob === job.title && (
                  <div className="mt-5 text-black bg-yellow-500 rounded-none p-0">
                    {job.jobs && (
                      <div className="space-y-3 mt-2">
                        {job.jobs.map((j, idx) => {
                          const link = job.links?.[idx] || job.link;
                          return (
                            <div key={j} className="flex items-center text-[18px] font-medium">
                              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                              {link ? (
                                <Link
                                  to={link}
                                  className="text-blue-800 hover:text-blue-900 underline font-semibold"
                                >
                                  {j}
                                </Link>
                              ) : (
                                <span>{j}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {job.message && (
                      <div className="mt-4 space-y-2">
                        <p className="italic text-black text-base">{job.message}</p>
                        {job.linkedinMessage && (
                          <a
                            href="https://in.linkedin.com/company/gupio-services-private-limited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 font-medium text-sm"
                          >
                            {job.linkedinMessage}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div
          className="md:w-1/2 p-10 rounded-none shadow-2xl mt-10 md:mt-0 border"
          style={{
            backgroundColor: "#00021a",
            minHeight: "1000px",
            borderColor: "#00021a",
          }}
        >
          <h1 className="text-4xl font-bold mb-6 text-white">JOIN OUR TEAM</h1>
          <p className="mb-10 text-gray-300 text-lg">Your Next Adventure Starts Here!</p>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-8">
            {[
              { label: "Full Name *", type: "text", name: "fullName" },
              { label: "Email *", type: "email", name: "email" },
              { label: "Phone Number *", type: "text", name: "phone", maxLength: 10 },
              { label: "Years of Experience *", type: "text", name: "experience" },
              { label: "Applying For *", type: "text", name: "role" },
            ].map(({ label, type, name, maxLength }) => (
              <div key={name}>
                <label className="block mb-3 text-gray-300 font-semibold text-lg">{label}</label>
                <input
                  type={type}
                  maxLength={maxLength}
                  {...register(name as keyof FormData)}
                  inputMode={name === "phone" || name === "experience" ? "numeric" : undefined}
                  onInput={
                    name === "phone"
                      ? (e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                          setValue("phone", e.currentTarget.value);
                        }
                      : name === "experience"
                      ? (e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, "");
                          setValue("experience", e.currentTarget.value);
                        }
                      : undefined
                  }
                  className="w-full p-4 border-2 border-yellow-300 bg-transparent text-white rounded-none text-lg focus:outline-none"
                />
                {errors[name as keyof FormData] && (
                  <p className="text-red-400 mt-1 text-base">
                    {(errors[name as keyof FormData] as any)?.message}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label className="block mb-3 text-gray-300 font-semibold text-lg">Upload Resume *</label>
              <input
                type="file"
                {...register("resume")}
                className="w-full p-2 border-2 border-yellow-300 bg-transparent text-white rounded-none text-lg 
                           file:mr-3 file:py-2 file:px-4 file:rounded-none file:border-0 
                           file:text-base file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-300"
              />
              {errors.resume && (
                <p className="text-red-400 mt-1 text-base">{errors.resume.message?.toString()}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-4 rounded-none font-bold text-xl shadow hover:scale-105 transition-transform"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>

      {/* Partner CTA */}
      <div className="relative w-full flex justify-center items-center min-h-[400px] bg-[#0F172A] mt-16">
        <img
          src={partner}
          alt="Partner"
          className="w-full h-[420px] object-cover rounded-none shadow-xl border-2 border-yellow-400"
          style={{ maxHeight: "420px", minHeight: "320px", objectFit: "cover" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 py-10"
          style={{
            background: "linear-gradient(to bottom, rgba(15,23,42,0.45), rgba(15,23,42,0.60))",
            borderRadius: "0px",
          }}
        >
          <h2 className="text-white text-4xl md:text-3xl font-bold mb-4 drop-shadow-lg">
            Want to Partner With Gupio?
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-6 drop-shadow-lg">
            Let’s upgrade your facility’s parking, vendors, and vehicle care — intelligently.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <button
              onClick={() => alert("Contact Us clicked")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-none text-xl shadow-xl"
            >
              Contact Us
            </button>
            <button
              onClick={() => alert("Free Trial clicked")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-none text-xl shadow-xl"
            >
              Take 7 Days Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
