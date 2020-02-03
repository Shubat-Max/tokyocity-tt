import React from "react";
import NameInput from "../../FormComponents/NameInput";
import EmailInput from "../../FormComponents/EmailInput";
import Select from "../../FormComponents/InterestsSelect";
import Textarea from "../../FormComponents/Textarea";
import { Form, Heading } from "./CandidateForm.sc";
import { useSelector } from "react-redux";
import Button from "../../FormComponents/Button";

const CandidateForm = () => {
  const checkForm = data => {
    return Object.keys(data)
      .map(key => {
        if (data[key].required === undefined || data[key].required === false) {
          /* If input field IS NOT required we assume field is correct by default */
          return false;
        } else {
          if (data[key].value !== undefined && data[key].value) {
            if (data[key].valid !== undefined) {
              /* If input field has validation - field has state either validation passed or not */
              return !data[key].valid;
            }
            /* If input field IS required and IS NOT empty - field is correct */
            return false;
          }
          /* If input field IS required and IS empty - field is incorrect */
          return true;
        }
      })
      .includes(true);
  };

  const formData = useSelector(state => state.formModule.form);

  return (
    <Form>
      <Heading>Candidate Info</Heading>
      <NameInput tag="name" />
      <EmailInput tag="email" />
      <Textarea placeholder="About Yourself" tag="about" />
      <Select tag="interests" />

      <Heading>Additional Info</Heading>
      <Textarea placeholder="About Your School" tag="school" />

      <Button
        type="button"
        disabled={checkForm(formData)}
        onClick={() => {
          alert(JSON.stringify(formData));
        }}
      >
        Apply
      </Button>
    </Form>
  );
};

export default CandidateForm;
