import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import bg_img from "../../assets/images/slide_2.png";
import patten2 from "../../assets/images/pattern_2.png";

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

const SalesIntern: React.FC = () => {
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
    <>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-start"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <h1
          className="relative text-5xl font-semibold text-yellow-400 z-10"
          style={{ marginLeft: "5cm" }}
        >
          B2B Sales Intern
        </h1>
      </div>

      {/* Job Content */}
      <section className="flex-1 w-full bg-[#0F172A] text-white py-12">
        <div
          className="relative shadow-md rounded-lg px-10 py-12 w-full text-white bg-cover bg-center bg-no-repeat min-h-[calc(100vh-24rem)]"
          style={{
            backgroundImage: `linear-gradient(rgba(4, 14, 40, 0.85), rgba(15, 23, 42, 0.85)), url(${patten2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Job Info */}
          <ul className="space-y-4 mb-10 text-lg leading-loose" style={{ marginLeft: "5cm" }}>
            <li><strong>Job Title:</strong> B2B Sales Intern</li>
            <li><strong>Location:</strong> Pune, Bangalore</li>
            <li><strong>Duration:</strong> 3-6 months</li>
            <li><strong>Department:</strong> Sales</li>
            <li><strong>Reports To:</strong> Field Sales Manager / Sales Lead</li>
            <li><strong>Stipend:</strong> Rs 8,000 + Performance Incentives + Rewards</li>
            <li><strong>Bike/Two Wheeler:</strong> Required</li>
          </ul>

          {/* About Us */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4" style={{ marginLeft: "5cm" }}>About Us:</h2>
            <p className="text-lg leading-relaxed" style={{ marginLeft: "5cm" }}>
              Gupio is a fast-growing company focused on providing high-impact Parking solutions to
              businesses of all sizes. We are expanding our footprint and looking for energetic,
              driven individuals to support our field sales team in driving growth across new and
              existing B2B markets.
            </p>
          </div>

          {/* Internship Overview */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4" style={{ marginLeft: "5cm" }}>Internship Overview:</h2>
            <p className="text-lg leading-relaxed" style={{ marginLeft: "5cm" }}>
              As a B2B Field Sales Intern, you will work closely with the Sales team to identify
              potential clients, pitch our offerings, and support client acquisition. This is a
              field-oriented role that combines strategic planning with on-ground execution, ideal
              for someone passionate about sales and client relationships.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4" style={{ marginLeft: "5cm" }}>Key Responsibilities:</h2>
            <ul className="list-disc list-inside space-y-4 text-lg leading-loose" style={{ marginLeft: "5cm" }}>
              <li>Assist in identifying and qualifying new B2B leads.</li>
              <li>Support the sales team in client meetings, presentations, and demos.</li>
              <li>Collect and analyze customer feedback.</li>
              <li>Maintain accurate CRM records.</li>
              <li>Collaborate with marketing for promotional activities.</li>
              <li>Track daily activities and generate reports.</li>
              <li>Stay updated with industry trends.</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4" style={{ marginLeft: "5cm" }}>Requirements:</h2>
            <ul className="list-disc list-inside space-y-4 text-lg leading-loose" style={{ marginLeft: "5cm" }}>
              <li>Currently pursuing a degree in Business, Marketing, or related field.</li>
              <li>Strong interpersonal and communication skills.</li>
              <li>Willingness to travel within assigned territory.</li>
              <li>Self-motivated and eager to learn.</li>
              <li>Basic knowledge of MS Office.</li>
              <li>Previous sales experience is an advantage.</li>
            </ul>
          </div>

          {/* What You'll Gain */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4" style={{ marginLeft: "5cm" }}>What You'll Gain:</h2>
            <ul className="list-disc list-inside space-y-4 text-lg leading-loose" style={{ marginLeft: "5cm" }}>
              <li>Hands-on experience in B2B sales.</li>
              <li>Industry networking opportunities.</li>
              <li>Mentorship from experienced professionals.</li>
              <li>Potential full-time placement.</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6" style={{ marginLeft: "5cm" }}>
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
                  placeholder=" "
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.fullName && <p className="text-red-400 text-sm mt-2">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Email *</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder=" "
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
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
                  placeholder=" "
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone.message}</p>}
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
                  placeholder=" "
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.experience && <p className="text-red-400 text-sm mt-2">{errors.experience.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Applying For *</label>
                <input
                  type="text"
                  {...register("role")}
                  placeholder=" "
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg"
                />
                {errors.role && <p className="text-red-400 text-sm mt-2">{errors.role.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-gray-300 font-semibold text-lg">Upload Resume *</label>
                <input
                  type="file"
                  {...register("resume")}
                  className="w-full p-4 border-2 border-yellow-400 bg-transparent text-white rounded-lg text-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-300"
                />
                {errors.resume && <p className="text-red-400 text-sm mt-2">{errors.resume.message?.toString()}</p>}
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

export default SalesIntern;
