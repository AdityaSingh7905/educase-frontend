import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";
import profilePic from "../utils/images/profile.jpg";

function ProfilePage() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(profilePic);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const onClickHanlder = (event) => {
    navigate("/");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-[450px] rounded-lg shadow-md border border-gray-300 overflow-hidden">
        <div className="bg-white p-4">
          <h2 className="text-2xl font-bold">Account Settings</h2>
        </div>

        <div className="bg-gray-50 p-6">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
              />
              <label htmlFor="file-upload">
                <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer">
                  <Camera size={16} className="text-white" />
                </div>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Marry Doe</h3>
              <p className="text-black">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="mt-6">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>

          <button
            onClick={onClickHanlder}
            className="w-full mt-6 bg-purple-600 font-bold text-white py-3 rounded-md hover:bg-purple-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
