import React from 'react';

const ProfileImage = () => {
  return (
    <div className="profile-image-wrapper">
      {/* Make sure this image file exists in the public folder */}
      <img 
        src="/IMG-20250324-WA0002[1].jpg" 
        alt="Prathmesh Deshpande" 
        className="profile-image" 
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x500?text=Prathmesh+Deshpande";
        }}
      />
    </div>
  );
};

export default ProfileImage; 