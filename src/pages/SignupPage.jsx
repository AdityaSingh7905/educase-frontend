import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});

  //Form validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.agency) newErrors.agency = "Please select an option";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id || e.target.name]: e.target.value,
    });
  };

  // Handle radio button change
  const handleRadioChange = (e) => {
    setFormData({ ...formData, agency: e.target.value });
    setErrors({ ...errors, agency: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);

      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        agency: "",
      });

      // Redirect to profile page
      navigate("/profile");
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-[400px] p-6 bg-gray-50 shadow-md rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold text-center mb-4">
          Create your PopX account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="fullName"
              className="absolute left-3 top-1 text-sm font-medium text-purple-600 bg-gray-50 px-1"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-3 mt-4 bg-gray-50 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="phoneNumber"
              className="absolute left-3 top-1 text-sm font-medium text-purple-600 bg-gray-50 px-1"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full p-3 mt-4 bg-gray-50 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="absolute left-3 top-1 text-sm font-medium text-purple-600 bg-gray-50 px-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-4 bg-gray-50 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="absolute left-3 top-1 text-sm font-medium text-purple-600 bg-gray-50 px-1"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-4 bg-gray-50 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="companyName"
              className="absolute left-3 top-1 text-sm font-medium text-purple-600 bg-gray-50 px-1"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="w-full p-3 mt-4 bg-gray-50 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-medium text-black">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="accent-purple-500 scale-150"
                  checked={formData.agency === "yes"}
                  onChange={handleRadioChange}
                />{" "}
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="accent-purple-500 scale-150"
                  checked={formData.agency === "no"}
                  onChange={handleRadioChange}
                />{" "}
                No
              </label>
            </div>
            {errors.agency && (
              <p className="text-red-500 text-sm mt-1">{errors.agency}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 font-bold text-white py-3 rounded-md mt-2 hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
