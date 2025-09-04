const Contact = () => {
  console.log("Contact page rendered");
  return (
    <div className="mt-30">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <h2>Feel free to reach out!</h2>
      <form>
        <input type="text" placeholder="Name" className="border border-blackp-2 m-2"></input>
        <input type="text" placeholder="E-mail" className="border border-blackp-2 m-2"></input>
        <button className="m-3 p-2 flex bg-black text-white rounded-lg cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
