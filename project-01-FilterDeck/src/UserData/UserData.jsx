
export const UserCard = (props) => {
    const { name,email,phone,address } = props.sendData;
  //   console.log(name);
     
    return (
      <div>
      <div
        style={{
          maxWidth: "300px",
          padding: "16px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{name}</h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "4px" }}>{email}</p>
        <p style={{ fontSize: "14px", fontWeight: "bold", color: "#333", marginBottom: "4px" }}>
          {phone}
        </p>
        <p style={{ fontSize: "14px", color: "#777" }}>{address.city}</p>
      </div>
    </div>
    
    );
  }; 