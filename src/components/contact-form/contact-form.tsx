import { clsx } from "clsx";
import { ChangeEvent, FormEvent, useState } from "react";
import FormField from "../form/form-field";
import FormControl from "../form/form-control";
import FormItem from "../form/form-item";
import FormMessage from "../form/form-message";
import FormLabel from "../form/form-label";

type FormData = {
  name: string;
  email: string;
};

type Errors = {
  name?: string;
  email?: string;
};

function Form({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: Errors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "" });
      setErrors({});
    }
  };

  return (
    <main className="container">
      <h2 className="title">Contact Form</h2>

      <Form onSubmit={handleSubmit}>
        <FormField
          name="name"
          render={(name) => (
            <FormItem>
              <FormLabel htmlFor={name}>Name</FormLabel>
              <FormControl>
                <input
                  type="text"
                  name={name}
                  id={name}
                  value={formData.name}
                  onChange={handleChange}
                  className={clsx(
                    "form-input",
                    errors.name ? "border-red-500" : "border-gray-600"
                  )}
                />
              </FormControl>
              <FormMessage message={errors.name} />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={(name) => (
            <FormItem>
              <FormLabel htmlFor={name}>Email</FormLabel>
              <FormControl>
                <input
                  type="email"
                  name={name}
                  id={name}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={(e) => {
                    console.log(name, e.target.value);
                  }}
                  className={clsx(
                    "form-input",
                    errors.email ? "border-red-500  " : "border-gray-600"
                  )}
                />
              </FormControl>
              <FormMessage message={errors.email} />
            </FormItem>
          )}
        />

        <button type="submit">Submit</button>
      </Form>
    </main>
  );
}
