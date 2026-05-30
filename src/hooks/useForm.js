import { useState, useEffect } from "react";
import { Log } from "../middleware/logger";

/**
 * Custom hook for managing form state with logging
 */
export const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Log(
        "frontend",
        "info",
        "hook",
        "Form submission initiated"
      );

      setIsSubmitting(true);
      await onSubmit(values);

      await Log(
        "frontend",
        "info",
        "hook",
        "Form submitted successfully"
      );
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "hook",
        `Form submission failed: ${error.message}`
      );
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { values, handleChange, handleSubmit, isSubmitting };
};
