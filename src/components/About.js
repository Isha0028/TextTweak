import React from "react";

function About(props) {
  return (
    <div>
      <h1
        className="my-3"
        style={{ color: props.mode === "light" ? "#0d2842" : "white" }}
      >
        About Us
      </h1>
      <div
        className="card mb-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#6c757d",
          color: props.mode === "light" ? "#0d2842" : "white",
        }}
      >
        <div className="card-body">
          <p className="card-text">
            Welcome to our Text Editor Website, your all-in-one tool for
            manipulating text easily and efficiently. Whether you need to
            convert text to uppercase or lowercase, copy text, remove extra
            spaces, capitalize the first letter, or find and replace words, our
            website has got you covered. We strive to provide a user-friendly
            interface that simplifies text editing tasks. We are committed to providing a reliable and user-friendly text
            editing experience. Whether you're a student, professional, or
            casual user, our Text Editor Website aims to make text editing tasks
            seamless and efficient. Start using our website today and unlock the
            power of easy text manipulation.
          </p>
        </div>
      </div>
      <div
        className="card mb-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#6c757d",
          color: props.mode === "light" ? "#0d2842" : "white",
        }}
      >
        <div className="card-body">
          <h4 className="card-title">Key Features</h4>
          <p className="card-text">
            <strong>Text Conversion:</strong> With just a click, you can convert your text to
            uppercase or lowercase, allowing you to adjust the text format
            according to your needs.
            <br /> <strong>Copy Text:</strong> Copying text is a breeze on our website. Simply
            click the copy button, and the text will be instantly copied to your
            clipboard for easy sharing or pasting elsewhere.
            <br /> <strong>Remove Extra Spaces:</strong> Say goodbye to unnecessary extra spaces
            within your text. Our website efficiently removes any extra spaces,
            ensuring your text looks clean and well-formatted.
            <br />
            <strong>Capitalize First Letter:</strong> Need to capitalize the first letter of each
            word? Our website offers a convenient feature that capitalizes the
            first letter of every word, enhancing the appearance of your text.
            <br />
            <strong>Clear Text:</strong> When you want to start fresh, our clear text button
            quickly clears the entire text area, allowing you to begin a new
            writing or editing session. <br />
            <strong>Find and Replace:</strong> Easily search for specific words within your text
            and replace them with new words. Our find and replace feature
            streamlines the process, saving you time and effort. <br />
            <strong>Word Counter:</strong> Keep track of the number of words in your text with
            our built-in word counter. It provides you with an accurate count,
            helping you assess the length of your content.
            <br /> <strong>Reading Time:</strong> Discover how long it will take to read your
            text. Our website calculates the estimated reading time, giving you
            an idea of how much time you or your readers may need to consume the
            content.
            <br /> <strong>Dark Mode:</strong> We understand the importance of visual comfort, so
            we offer a dark mode option. Switch to dark mode to reduce eye
            strain and enjoy a visually pleasing experience while working with
            your text.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
