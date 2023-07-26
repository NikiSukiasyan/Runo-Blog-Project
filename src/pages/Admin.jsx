import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Admin.scss";
import { getDatabase, ref, push } from "firebase/database";
import DOMPurify from "dompurify";
import { useArticlesContext } from "../ArticlesContext";

function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const articlesContext = useArticlesContext();

  const handleTitleChange = (content, delta, source, editor) => {
    setTitle(content);
  };

  const handleDescriptionChange = (content, delta, source, editor) => {
    setDescription(content);
  };

  const handleDetailedDescriptionChange = (content, delta, source, editor) => {
    setDetailedDescription(content);
  };

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDetailedDescriptionTypeChange = (
    content,
    delta,
    source,
    editor
  ) => {
    setType(content);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    setSelectedProfile(file);
  };

  const handleAddBlog = () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const trimmedDetailedDescription = detailedDescription.trim();
    const trimmedJob = job.trim();
    const trimmedName = name.trim();
    const trimmedType = type.trim();

    if (
      !trimmedTitle ||
      !trimmedDescription ||
      !trimmedDetailedDescription ||
      !trimmedJob ||
      !trimmedName ||
      !selectedImage ||
      !selectedProfile ||
      !trimmedType
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    const currentDate = new Date();

    const id =
      Date.now().toString() + Math.floor(Math.random() * 1000).toString();

    const imageReader = new FileReader();
    imageReader.onload = () => {
      const imageDataURL = imageReader.result;

      const profileReader = new FileReader();
      profileReader.onload = () => {
        const profileImageDataURL = profileReader.result;

        const sanitizedTitle = title
          .replace(/<p[^>]*>/g, "")
          .replace(/<\/p>/g, "");
        const sanitizedDescription = description
          .replace(/<p[^>]*>/g, "")
          .replace(/<\/p>/g, "");
        const sanitizedDetailedDescription = detailedDescription
          .replace(/<p[^>]*>/g, "")
          .replace(/<\/p>/g, "");
        const sanitizedType = type
          .replace(/<p[^>]*>/g, "")
          .replace(/<\/p>/g, "");

        const blogData = {
          id: id,
          date: currentDate
            .toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })
            .split("/")
            .join("."),
          title: sanitizeHtml(sanitizedTitle),
          description: sanitizeHtml(sanitizedDescription),
          detailedDescription: sanitizeHtml(sanitizedDetailedDescription),
          job: trimmedJob,
          name: trimmedName,
          type: sanitizeHtml(sanitizedType),
          imageURL: imageDataURL,
          profileImageURL: profileImageDataURL,
        };

        const dbRef = ref(getDatabase());

        push(dbRef, blogData)
          .then(() => {
            setTitle("");
            setDescription("");
            setDetailedDescription("");
            setJob("");
            setName("");
            setType("");
            setSelectedImage(null);
            setSelectedProfile(null);

            alert("Blog added successfully!");

            articlesContext.updateArticles([
              ...articlesContext.articles,
              blogData,
            ]);
          })
          .catch((error) => {
            console.error("Error adding blog: ", error);
          });
      };

      if (selectedProfile) {
        profileReader.readAsDataURL(selectedProfile);
      } else {
        alert("Please choose a profile image.");
      }
    };

    if (selectedImage) {
      imageReader.readAsDataURL(selectedImage);
    } else {
      alert("Please choose an image for the blog.");
    }
  };

  const sanitizeHtml = (html) => {
    return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      ["link", "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
    normalize: false,
  };
  const formats = [];

  return (
    <>
      <h1 className="greeting">Welcome To Admin Page</h1>
      <div className="editor-container">
        <p className="hint">Please Choose Your Blogs Image</p>
        <input
          type="file"
          onChange={handleImageChange}
          className="image-choosing-input"
        />
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            className="blog-image"
          />
        )}
      </div>
      <div className="editor-container">
        <p className="hint">Please Choose Your Profile Image</p>
        <input
          type="file"
          onChange={handleProfileChange}
          className="image-choosing-input"
        />
        {selectedProfile && (
          <img
            src={URL.createObjectURL(selectedProfile)}
            alt="Selected Profile"
            className="profile-image"
          />
        )}
      </div>
      <div className="name-input-container">
        <p className="hint">
          Here you should write your name, surname, and job
        </p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          type="text"
          value={job}
          onChange={handleJobChange}
          placeholder="Job"
        />
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title Of Blog"
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={detailedDescription}
          onChange={handleDetailedDescriptionChange}
          placeholder="Detailed Description"
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={type}
          onChange={handleDetailedDescriptionTypeChange}
          placeholder="Type of Blog"
          modules={modules}
          formats={formats}
        />
      </div>
      <button className="add-blog" onClick={handleAddBlog}>
        Add Your Blog
      </button>
    </>
  );
}

export default Admin;
