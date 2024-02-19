
import Button from "./Button";


const FormAddFriends = ({handleSubmit, name,image, setImage, setName}) => {
  

  

  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label>📷Image URL</label>
      <input
      disabled
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriends;
