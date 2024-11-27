const Form = ({ onSubmit }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = e.target.elements.inputField.value;
  
      // Error Handling: Prevent empty submissions
      if (!data.trim()) {
        alert("Input cannot be empty!");
        return;
      }
  
      onSubmit(data);
      e.target.reset();
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-gray-100">
        <input
          name="inputField"
          type="text"
          placeholder="Enter some data"
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default Form;
  