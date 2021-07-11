import React from "react";
import "./style.css";

function Footer() {
  const [data, setData] = React.useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Oops... Something went wrong" });
    }
  }

  React.useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return null;

  return (
    <footer className="footer">
      <span>
        {data.content} -{data.author}
      </span>
    </footer>
  );
}

export default Footer;
