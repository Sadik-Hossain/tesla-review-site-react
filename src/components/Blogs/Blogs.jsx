import React from "react";

const Blogs = () => {
  return (
    <div style={{ margin: "2rem", lineHeight: "3rem" }}>
      {/* 
      //* question no.1
      */}
      <h1>What is Context API?</h1>
      <p style={{ fontSize: "2rem" }}>
        Context api is a powerful feature of react. It enable us to send data
        between component in a more convenient way. It can pass data that needs
        to be accessible by many components at various nesting level without the
        need of prop drilling.
      </p>
      <br />
      <hr />
      <br />
      {/* 
      //* question no.2
      */}
      <h1>What is sematic Tag?</h1>
      <p style={{ fontSize: "2rem" }}>
        Semantic tags helps to make the HTML more readable , comprehensible by
        defining the different part of sections and layout of the web page{" "}
      </p>
      <br />
      <hr />
      <br />
      {/* 
      //* question no.3
      */}
      <h1>what are the difference between inline and inline-block element?</h1>
      <p style={{ fontSize: "2rem" }}>
        The main difference between inline and inline-block elements is that an inline element don't have any effect on setting height and width. 
        Whereas, inline-block element allows to set height and width.
      </p>
    </div>
  );
};

export default Blogs;
