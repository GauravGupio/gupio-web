import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import bg_img from "../../assets/images/slide_2.png";
import patten2 from "../../assets/images/pattern_2.png";

// Form validation schema
const schema = z.object({
  fullName: z.string().min(1, "Full name is required").regex(/^[a-zA-Z\s]+$/, "Full name should contain only letters and spaces"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  experience: z.string().refine((val) => /^(\d+(\.\d+)?)$/.test(val), { message: "Experience must be a number (e.g., 1, 2.5)" }),
  role: z.string().min(1, "Role is required"),
  resume: z.any().refine((file) => file?.length > 0, { message: "Resume is required" }),
});

type FormData = z.infer<typeof schema>;

const DigitalMarketingManager: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert("Application submitted successfully!");
    console.log("Application Data:", data);
    reset();
    setShowForm(false);
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex flex-col">
      {/* Top Banner */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-start"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <h1
          className="text-5xl text-yellow-400 drop-shadow-lg font-semibold" // Bigger title
          style={{ marginLeft: "5cm" }}
        >
          Digital Marketing Manager
        </h1>
      </div>

      {/* Content section */}
      <section className="flex-1 w-full py-12">
        <div
          className="relative shadow-md rounded-lg px-10 py-12 w-full text-white bg-cover bg-center bg-no-repeat min-h-[calc(100vh-24rem)]"
          style={{
            backgroundImage: `linear-gradient(rgba(4, 7, 16, 0.75), rgba(15, 23, 42, 0.75)), url(${patten2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Basic Info */}
          <ul className="space-y-4 mb-10 text-lg leading-loose" style={{ marginLeft: "5cm" }}>
            <li><strong>Job Title:</strong> Digital Marketing Manager</li>
            <li><strong>Location:</strong> Mysore</li>
            <li><strong>Package:</strong> 4.5-6 LPA</li>
            <li><strong>Department:</strong> Marketing</li>
          </ul>

          {/* Key Responsibilities */}
          <h2 className="text-3xl font-semibold mb-4" style={{ marginLeft: "5cm" }}>Key Responsibilities:</h2>
          <ul className="list-disc list-inside space-y-4 mb-10 text-lg leading-loose" style={{ marginLeft: "5cm" }}>
            <li><strong>Strategy & Execution:</strong> Develop and implement digital marketing strategies aligned with business goals.</li>
            <li><strong>SEO Leadership:</strong> Lead SEO efforts — on-page, off-page, and technical SEO to increase organic visibility.</li>
            <li><strong>Content & Creative:</strong> Create and oversee engaging digital content and creatives using AI-based platforms.</li>
            <li><strong>AI Integration:</strong> Actively use and explore AI tools to improve campaign efficiency, automate processes, and scale output.</li>
            <li><strong>Lead Generation:</strong> Plan and execute lead generation campaigns using digital channels, data insights, and AI tools.</li>
            <li><strong>Video & Visual Marketing:</strong> Create and manage short-form video content, reels, and motion graphics with AI/video editing tools.</li>
            <li><strong>Team Handling:</strong> Initially work independently, and progressively lead a digital marketing team as the department grows.</li>
          </ul>

          {/* Must-Have Skills */}
          <h2 className="text-3xl font-semibold mb-4" style={{ marginLeft: "5cm" }}>Must-Have Skills:</h2>
          <ul className="list-disc list-inside space-y-4 mb-10 text-lg leading-loose" style={{ marginLeft: "5cm" }}>
            <li>Proven experience in SEO (expert level).</li>
            <li>Proficiency with AI tools for:
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>SEO analysis (e.g., Surfer SEO, Clearscope)</li>
                <li>Content creation (e.g., Jasper, Copy.ai, ChatGPT)</li>
                <li>Design (e.g., Canva AI, Adobe AI plugins)</li>
                <li>Video editing (e.g., Pictory, Descript)</li>
                <li>Lead generation automation tools</li>
              </ul>
            </li>
            <li>Strong analytical skills with Google Analytics, Search Console, etc.</li>
            <li>Ability to work independently and lead a team.</li>
          </ul>

          {/* Good to Have */}
          <h2 className="text-3xl font-semibold mb-4" style={{ marginLeft: "5cm" }}>Good to Have:</h2>
          <ul className="list-disc list-inside space-y-4 mb-12 text-lg leading-loose" style={{ marginLeft: "5cm" }}>
            <li>Email automation, CRM systems, paid ads (Google/Facebook/LinkedIn).</li>
            <li>A/B testing and conversion optimization understanding.</li>
            <li>Knowledge of website CMS, HTML, JavaScript.</li>
          </ul>

          <p className="mb-12 text-lg leading-relaxed" style={{ marginLeft: "5cm" }}>
            <strong>Potential for full-time placement based on performance.</strong>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 justify-start" style={{ marginLeft: "5cm" }}>
            <button onClick={() => setShowForm(true)} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-lg text-lg">
              Apply Now
            </button>
            <Link to="/career">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-lg text-lg">
                Explore Other Roles
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-xl shadow-2xl border border-gray-700 w-full max-w-lg relative">
            <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-white text-2xl hover:text-yellow-400">✖</button>
            <h2 className="text-3xl font-bold mb-8 text-yellow-400">Apply Now</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-7">
              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Full Name *</label>
                <input type="text" {...register("fullName")} className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg" />
                {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Email *</label>
                <input type="email" {...register("email")} className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg" />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Phone Number *</label>
                <input
                  type="text"
                  maxLength={10}
                  {...register("phone")}
                  inputMode="numeric"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                    setValue("phone", e.currentTarget.value);
                  }}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Years of Experience *</label>
                <input
                  type="text"
                  {...register("experience")}
                  inputMode="decimal"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, "");
                    setValue("experience", e.currentTarget.value);
                  }}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.experience && <p className="text-red-400 text-sm">{errors.experience.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Applying For *</label>
                <input type="text" {...register("role")} value="Digital Marketing Manager" readOnly className="w-full p-4 border-2 border-yellow-400 bg-gray-700 text-white rounded-lg text-lg" />
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Upload Resume *</label>
                <input type="file" {...register("resume")} className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg" />
                {errors.resume && <p className="text-red-400 text-sm">{errors.resume.message?.toString()}</p>}
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 rounded-lg font-bold text-lg">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalMarketingManager;
