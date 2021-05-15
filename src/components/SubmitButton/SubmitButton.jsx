import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";
const SubmitButton = ({ children, onClick, disabled }) => {
    return (
        <Button disabled={disabled} onClick={onClick}>
            {children}
        </Button>
    );
};

SubmitButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default SubmitButton;
