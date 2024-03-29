import React, { useState, useEffect, useRef } from "react";
import { Form, Col, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactForm = ({ handleModalClose, initialFreightType, style }) => {
  const form = useRef();

  const [freightType, setFreightType] = useState(initialFreightType);
  const [otherFreightType, setOtherFreightType] = useState("");

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    freightType: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // store updated value for freight type into formValues
useEffect(() => {
  if (freightType !== "Other") {
    setFormValues((prevFormValues) => ({ ...prevFormValues, freightType }));
  }
}, [freightType]);

// when otherFreightType changes, update formValues
useEffect(() => {
  if (freightType === "Other") {
    setFormValues((prevFormValues) => ({ ...prevFormValues, freightType: otherFreightType }));
  }
}, [otherFreightType, freightType]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if form is valid
    if (formIsValid()) {
      // Submit form
      console.log(formValues);
      emailjs
        .sendForm(
            "service_qungzev",
            "template_16a8kcp",
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      handleModalClose();

      // Reset form values
      setFormValues({
        name: "",
        email: "",
        phone: "",
        message: "",
        freightType: "",
      });

      setFreightType(initialFreightType);
      setOtherFreightType("");
    }
  };

  const formIsValid = () => {
    let isValid = true;
    const errors = {};

    // Check if required fields are filled
    if (!formValues.name.trim()) {
      errors.name = "This field is required.";
      isValid = false;
    }

    if (!formValues.email.trim()) {
      errors.email = "This field is required.";
      isValid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = "This field is required.";
      isValid = false;
    }

    // Check if email is valid
    if (formValues.email.trim() && !/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Invalid email address.";
      isValid = false;
    }

    // Set errors
    setFormErrors(errors);

    return isValid;
  };

  return (
    <div>
      <Form ref={form} className="myForm" style={{ backgroundColor: '#f5f5f5' }}> 
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label style={{ color: 'black', fontSize: '18px' }}>Name*</Form.Label>
          <Form.Control
            name="name"
            type="name"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            isInvalid={!!formErrors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{ color: 'black', fontSize: '18px' }}>Email*</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            isInvalid={!!formErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridphone">
          <Form.Label style={{ color: 'black', fontSize: '18px' }}>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            placeholder="(012)-345-6789"
            value={formValues.phone}
            onChange={(e) =>
              setFormValues({ ...formValues, phone: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group as={Col} id="formGridmessage">
          <Form.Label style={{ color: 'black', fontSize: '18px' }}>Message*</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            style={{ height: "100px" }}
            placeholder=""
            rows={3}
            value={formValues.message}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
            isInvalid={!!formErrors.message}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.message}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="freight-type" style={style}>
          <Form.Label style={{ color: 'black', fontSize: '18px' }}>Freight Type</Form.Label>
          <Form.Select
            value={freightType}
            onChange={(e) => {
              setFreightType(e.target.value);
              if (e.target.value !== "Other") {
                setOtherFreightType("");
              }
            }}
          >
            <option value="">Select Freight Type</option>
            <option value="Full Truckload">Full Truckload</option>
            <option value="Less Than Truckload">Less Than Truckload</option>
            <option value="Air Freight">Air Freight</option>
            <option value="Intermodal">Intermodal</option>
            <option value="Other">Other</option>
          </Form.Select>
          {freightType === "Other" && (
            <Form.Control
              type="text"
              placeholder="Enter specific freight type"
              value={otherFreightType}
              onChange={(e) => setOtherFreightType(e.target.value)}
            />
          )}
        </div>
        <Button
          className="submit-button"
          style={{ marginTop: "20px", border: "none", borderRadius: "6px" }}
          // variant="primary"
          variant="warning"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
