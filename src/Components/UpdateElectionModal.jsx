import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UiActions } from "../Store/ui-slice";

const UpdateElectionModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const dispatch = useDispatch();

  // close add election
  const closeModal = () => {
    dispatch(UiActions.closeUpdateElectionModal());
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
    }
  };

  return (
    <section className="modal">
      <div className="modal_content">
        <header className="modal_header">
          <h4>Edit Election</h4>
          <button className="modal_close" onClick={closeModal}>
            <IoMdClose />
          </button>
        </header>
        <form>
          <div>
            <h6>Election Title</h6>
            <input
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              required
            />
          </div>
          <div>
            <h6>Election Description</h6>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              required
            />
          </div>
          <div>
            <h6>Election Thumbnail</h6>
            <input
              type="file"
              name="thumbnail"
              onChange={handleFileChange}
              accept="png, jpg, jpeg, webp, avif"
            />
            {thumbnail && <p>{thumbnail.name}</p>}
          </div>
          <button type="submit" className="btn primary">
            Update Election
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateElectionModal;
