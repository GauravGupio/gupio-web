import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import bg_img from "../../assets/images/slide_2.png";
import pattern_2 from "../../assets/images/pattern_2.png";

// Validation Schema
const schema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[a-zA-Z\s]+$/, "Full name should contain only letters and spaces"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  experience: z.string().refine((val) => /^(\d+(\.\d+)?)$/.test(val), {
    message: "Experience must be a number (e.g., 1, 2.5)",
  }),
  role: z.string().min(1, "Role is required"),
  resume: z.any().refine((file) => file?.length > 0, {
    message: "Resume is required",
  }),
});

type FormData = z.infer<typeof schema>;

const FrontendDeveloper: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, reset } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    alert("Application submitted successfully!");
    console.log("Application Data:", data);
    reset();
    setShowForm(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-start text-white"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <h1 className="text-5xl font-bold ml-[5cm]">Frontend Developer</h1>
      </div>

      {/* Section with Pattern Background */}
      <section
        className="relative w-full min-h-screen flex items-start px-10 py-12 text-white bg-[#0F172A]"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 18, 54, 0.85), rgba(4, 10, 25, 0.85)), url(${pattern_2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="relative z-10 rounded-lg max-w-4xl w-full ml-[5cm]">
          <ul className="space-y-4 mb-10 text-lg leading-loose">
            <li><strong>Job Title:</strong> Frontend Developer</li>
            <li><strong>Experience:</strong> 2-4 years</li>
            <li><strong>Location:</strong> Mysore</li>
            <li><strong>Salary:</strong> 4-6 LPA</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4">Key Responsibilities:</h2>
          <ul className="list-disc list-inside space-y-4 mb-10 text-lg leading-loose">
            <li>Develop responsive web applications using HTML, CSS, and JavaScript (or TypeScript).</li>
            <li>Implement front-end frameworks/libraries (React, Angular, Vue.js).</li>
            <li>Ensure cross-browser compatibility and performance optimization.</li>
            <li>Work closely with UX/UI designers on pixel-perfect designs.</li>
            <li>Integrate with backend services (REST, GraphQL).</li>
            <li>Participate in code reviews, pair programming, and stay updated with best practices.</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4">Qualifications & Skills:</h2>
          <ul className="list-disc list-inside space-y-4 mb-10 text-lg leading-loose">
            <li>Bachelor's in Computer Science or relevant field.</li>
            <li>2+ years in front-end development.</li>
            <li>Proficiency in HTML5, CSS3, JavaScript/TypeScript.</li>
            <li>Experience with responsive/adaptive design.</li>
            <li>Familiarity with version control (Git) and modern build tools.</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4">Preferred Skills:</h2>
          <ul className="list-disc list-inside space-y-4 mb-12 text-lg leading-loose">
            <li>Experience with CSS preprocessors or CSS-in-JS libraries.</li>
            <li>Knowledge of testing frameworks.</li>
            <li>Experience with state management tools.</li>
          </ul>

          {/* Actions */}
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-lg text-lg"
            >
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

      {/* Apply Form Popup */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] p-10 rounded-xl shadow-2xl border border-gray-700 w-full max-w-lg relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-yellow-400"
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold mb-8 text-yellow-400">Apply Now</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-7">
              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Full Name *</label>
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Email *</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
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
                <input
                  type="text"
                  {...register("role")}
                  value="Frontend Developer"
                  readOnly
                  className="w-full p-4 border-2 border-yellow-400 bg-gray-700 text-white rounded-lg text-lg"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Upload Resume *</label>
                <input
                  type="file"
                  {...register("resume")}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.resume && <p className="text-red-400 text-sm">{errors.resume.message?.toString()}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 rounded-lg font-bold text-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FrontendDeveloper;
