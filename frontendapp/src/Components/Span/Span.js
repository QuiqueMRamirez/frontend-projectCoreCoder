import React from "react";

const Span = (props) => {
  const { flag, pageIndex, pageOptions, onChange } = props;
  return (
    <>
      {flag ? (
        <span>
        | Go to page:{" "}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={onChange}
          style={{ width: "100px" }}
        />
      </span>
      ) : (
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      )}
    </>
  );
};

export default Span;
