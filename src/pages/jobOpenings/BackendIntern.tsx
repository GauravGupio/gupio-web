import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import bg_img from "../../assets/images/slide_2.png";
import patten2 from "../../assets/images/pattern_2.png";

// Validation schema
const schema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[a-zA-Z\s]+$/, "Full name should contain only letters and spaces"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be exactly 10 digits"),
  experience: z.string().refine((val) => /^(\d+(\.\d+)?)$/.test(val), {
    message: "Experience must be a number (e.g., 1, 2.5)",
  }),
  role: z.string().min(1, "Role is required"),
  resume: z.any().refine((file) => file?.length > 0, {
    message: "Resume is required",
  }),
});

type FormData = z.infer<typeof schema>;

const BackendIntern: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, reset } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    alert("Application submitted successfully!");
    console.log("Form data:", data);
    reset();
    setShowForm(false);
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex flex-col">
      {/* Top banner */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-start"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <h1
          className="text-5xl font-bold text-yellow-400 drop-shadow-lg" // increased size
          style={{ marginLeft: "5cm" }}
        >
          Backend Intern
        </h1>
      </div>

      {/* Main content area */}
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
          <ul
            className="space-y-4 mb-10 text-lg leading-loose"
            style={{ marginLeft: "5cm" }}
          >
            <li><strong>Designation:</strong> Backend Intern</li>
            <li><strong>Experience:</strong> Fresher</li>
            <li><strong>Location:</strong> Mysore</li>
            <li><strong>Stipend:</strong> 10-15K (3-6 months)</li>
            <li><strong>CTC:</strong> Depends on conversion to fulltime (Performance based)</li>
          </ul>

          {/* Qualifications & Skills */}
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ marginLeft: "5cm" }}
          >
            Qualifications &amp; Skills:
          </h2>
          <ul
            className="list-disc list-inside space-y-4 mb-10 text-lg leading-loose"
            style={{ marginLeft: "5cm" }}
          >
            <li>Knowledge in at least one backend language or framework (e.g., Node.js, Django, Flask, Spring Boot, .NET).</li>
            <li>Knowledge of database technologies (e.g., MySQL, PostgreSQL, MongoDB).</li>
            <li>Knowledge of RESTful APIs, GraphQL, and microservices architecture.</li>
            <li>Knowledge of version control (e.g., Git).</li>
            <li>Familiarity with CI/CD pipelines and containerization (e.g., Docker, Kubernetes).</li>
            <li>Basic understanding of front-end technologies (HTML, CSS, JavaScript) to collaborate effectively with front-end teams.</li>
          </ul>

          {/* Working Conditions */}
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ marginLeft: "5cm" }}
          >
            Working Conditions:
          </h2>
          <ul
            className="list-disc list-inside space-y-4 mb-10 text-lg leading-loose"
            style={{ marginLeft: "5cm" }}
          >
            <li>May require occasional after-hours work to support deployments or address critical issues.</li>
          </ul>

          {/* Roles & Responsibilities */}
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ marginLeft: "5cm" }}
          >
            Roles &amp; Responsibilities:
          </h2>
          <ul
            className="list-disc list-inside space-y-4 mb-12 text-lg leading-loose"
            style={{ marginLeft: "5cm" }}
          >
            <li>Develop and maintain server-side application logic using languages like Java, Python, Node.js, .NET, Ruby, or others.</li>
            <li>Design, optimize, and maintain relational (e.g., MySQL, PostgreSQL) and/or NoSQL (e.g., MongoDB) databases.</li>
            <li>Write efficient queries, stored procedures, and data migration scripts.</li>
            <li>Integrate with third-party services and APIs as needed.</li>
            <li>Maintain clear and concise documentation of code, API endpoints, and system architecture.</li>
          </ul>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-6 justify-start"
            style={{ marginLeft: "5cm" }}
          >
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

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-xl shadow-2xl border border-gray-700 w-full max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-yellow-400"
            >
              ✖
            </button>
            {/* Form Title */}
            <h2 className="text-3xl font-bold mb-8 text-yellow-400">Apply Now</h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-7">
              {/* Full Name */}
              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Full Name *</label>
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Email *</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
              </div>

              {/* Phone */}
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

              {/* Experience */}
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

              {/* Role */}
              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Applying For *</label>
                <input
                  type="text"
                  {...register("role")}
                  value="Backend Intern"
                  readOnly
                  className="w-full p-4 border-2 border-yellow-400 bg-gray-700 text-white rounded-lg text-lg"
                />
              </div>

              {/* Resume */}
              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Upload Resume *</label>
                <input
                  type="file"
                  {...register("resume")}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.resume && <p className="text-red-400 text-sm">{errors.resume.message?.toString()}</p>}
              </div>

              {/* Submit */}
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
    </div>
  );
};

export default BackendIntern;
