"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBriefcase, FaUserGraduate, FaFileAlt } from 'react-icons/fa';
import { sendContactForm } from "lib/api";

function JoinUs() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await sendContactForm(data);
      toast.success("Application Submitted Successfully!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
    } catch (error) {
      toast.error("Something Went Wrong!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <ToastContainer />
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[#1e3a8a] text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are always looking for talented professionals to join our firm. Share your details with us, and lets explore how we can work together.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-colors`}
                    placeholder="Your Full Name"
                    {...register("name", { required: "Full name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-colors`}
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-colors`}
                    placeholder="Your Phone Number"
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Position Applied For</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.position ? 'border-red-500' : 'border-gray-200'
                    } focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-colors`}
                    placeholder="Position of Interest"
                    {...register("position", { required: "Position is required" })}
                  />
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-500">{errors.position.message}</p>
                  )}
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Education & Qualifications</label>
                <textarea
                  rows="3"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.education ? 'border-red-500' : 'border-gray-200'
                  } focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-colors resize-none`}
                  placeholder="Brief description of your educational background and qualifications"
                  {...register("education", { required: "Education details are required" })}
                />
                {errors.education && (
                  <p className="mt-1 text-sm text-red-500">{errors.education.message}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Experience</label>
                <textarea
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.experience ? 'border-red-500' : 'border-gray-200'
                  } focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-colors resize-none`}
                  placeholder="Brief description of your relevant work experience"
                  {...register("experience", { required: "Experience details are required" })}
                />
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-500">{errors.experience.message}</p>
                )}
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] outline-none transition-colors resize-none`}
                  placeholder="Any additional information you would like to share"
                  {...register("message")}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-semibold
                  hover:bg-[#1e3a8a]/90 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;