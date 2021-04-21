import React from "react";
import "./editProfile.css";

const EditProfile = () => {
  return (
    <section className="edit-profile-page-container">
      <form className="set-up-profile-page-form">
        <label for="first-name">Enter your first name,</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          id="first-name"
        />
        <label for="last-name">And last name.</label>
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          id="last-name"
        />
        <label for="role">Who are you?</label>
        <input
          type="text"
          name="role"
          placeholder="Photographer etc..."
          id="role"
        />
        <label for="location">Where do you live?</label>
        <input
          type="text"
          name="location"
          placeholder="Country and State"
          id="location"
        />
        <label for="bio">Add bio</label>
        <input type="text" name="bio" placeholder="Short bio" id="bio" />
        <label for="website">Website</label>
        <input type="text" name="website" placeholder="website" id="website" />
        <button>SUBMIT</button>
      </form>
    </section>
  );
};

export default EditProfile;
