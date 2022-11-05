import React from "react";

const Links = (props) => {
  return (
    <>
      <a
        href={props.url}
        target="blank"
        id={props.id}
        className="link-title link"
      >
        {props.title}

        <span className="link-tooltip">{props.subtext}</span>
      </a>
    </>
  );
};

export default Links;
