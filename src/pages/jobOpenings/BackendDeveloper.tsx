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
    .regex(/^[a-zA-Z\s]+$/, "Only letters and spaces allowed"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Must be exactly 10 digits"),
  experience: z.string().refine((val) => /^(\d+(\.\d+)?)$/.test(val), {
    message: "Enter a number (e.g., 1, 2.5)",
  }),
  role: z.string().min(1, "Role is required"),
  resume: z.any().refine((file) => file?.length > 0, {
    message: "Resume is required",
  }),
});

type FormData = z.infer<typeof schema>;

const BackendDeveloper: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, reset } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    alert("Application submitted successfully!");
    console.log("Form Data:", data);
    reset();
    setShowForm(false);
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex flex-col text-white">
      {/* Top Banner */}
      <div
        className="bg-cover bg-center h-96 flex items-center"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <h1
          className="text-5xl font-bold text-yellow-400 drop-shadow-lg"   // Increased from 4xl -> 5xl
          style={{ marginLeft: "5cm" }}
        >
          Backend Developer
        </h1>
      </div>

      {/* Main Content */}
      <section className="flex-1 w-full py-12"> {/* Increased vertical padding */}
        <div
          className="relative shadow-md rounded-lg px-10 py-12 w-full text-white bg-cover bg-center bg-no-repeat min-h-[calc(100vh-24rem)]"
          style={{
            backgroundImage: `linear-gradient(rgba(4, 13, 36, 0.85), rgba(4, 13, 33, 0.85)), url(${patten2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Basic Info */}
          <ul
            className="space-y-4 mb-10 text-lg leading-loose" // text-lg, more vertical space, more line height
            style={{ marginLeft: "5cm" }}
          >
            <li><strong>Job Title:</strong> Backend Developer</li>
            <li><strong>Location:</strong> Mysore</li>
            <li><strong>Salary:</strong> 5-6 LPA</li>
            <li><strong>Experience:</strong> 3+ years</li>
            <li><strong>Department:</strong> Technology</li>
          </ul>

          {/* Key Responsibilities */}
          <h2
            className="text-3xl font-semibold mb-4" // text-3xl and larger margin-bottom
            style={{ marginLeft: "5cm" }}
          >
            Key Responsibilities:
          </h2>
          <ul
            className="list-disc list-inside space-y-4 mb-10 text-lg leading-loose" // text-lg, more spacing
            style={{ marginLeft: "5cm" }}
          >
            <li>Develop and maintain server-side logic using Node.js, Java, Python, .NET, Ruby, etc.</li>
            <li>Build/manage RESTful or GraphQL APIs.</li>
            <li>Handle authentication, authorization, and security best practices.</li>
            <li>Design, optimize, and manage relational & NoSQL databases.</li>
            <li>Write efficient queries, stored procedures, and migration scripts.</li>
            <li>Integrate with third-party APIs.</li>
            <li>Collaborate with DevOps for deployments (cloud/on-prem).</li>
            <li>Write unit/integration tests.</li>
            <li>Diagnose performance/scalability issues.</li>
            <li>Work with frontend teams to define APIs.</li>
            <li>Collaborate with product, design, and QA to deliver features.</li>
            <li>Maintain clear documentation (code/APIs/architecture).</li>
          </ul>

          {/* Qualifications & Skills */}
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ marginLeft: "5cm" }}
          >
            Qualifications & Skills:
          </h2>
          <ul
            className="list-disc list-inside space-y-4 mb-12 text-lg leading-loose"
            style={{ marginLeft: "5cm" }}
          >
            <li>Bachelor's in CS/Software Engineering or equivalent experience.</li>
            <li>3+ years backend development experience.</li>
            <li>Proficiency in at least one backend framework/language.</li>
            <li>Strong DB knowledge (MySQL, PostgreSQL, MongoDB).</li>
            <li>Experience with REST, GraphQL, microservices.</li>
            <li>Understanding of Git/version control.</li>
            <li>Familiarity with CI/CD & containerization (Docker, Kubernetes).</li>
            <li>Good grasp of software best practices, testing, and documentation.</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 justify-start" style={{ marginLeft: "5cm" }}>
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

      {/* Apply Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] p-10 rounded-xl shadow-2xl border border-gray-700 w-full max-w-lg relative">
            {/* Close */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-yellow-400"
            >
              ✖
            </button>

            <h2 className="text-3xl font-bold mb-8 text-yellow-400">Apply Now</h2>

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
                  value="Backend Developer"
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

export default BackendDeveloper;
