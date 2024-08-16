import React from "react";

const Label = ({ htmlFor, name }) => {
    return (
        <label
            className="font-bold text-lg py-2 pt-3 text-slate-800"
            htmlFor={htmlFor}
        >
            {name}
        </label>
    );
};

export default Label;
