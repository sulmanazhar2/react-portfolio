import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { meta, contactConfig } from "../../content_option";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialState = {
  name: "",
  email: "",
  message: "",
  loading: false,
  alert: null,
};

export const ContactUs = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setForm((prev) => ({
        ...prev,
        alert: {
          type: "error",
          text: "Contact form is not configured. Please reach out via email instead.",
        },
      }));
      return;
    }

    setForm((prev) => ({ ...prev, loading: true, alert: null }));

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.email,
          user_name: form.name,
          to_name: contactConfig.YOUR_EMAIL,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setForm({
        ...initialState,
        alert: { type: "success", text: "Message sent. Thank you!" },
      });
    } catch (err) {
      setForm((prev) => ({
        ...prev,
        loading: false,
        alert: {
          type: "error",
          text: `Failed to send: ${err?.text || "Please try again."}`,
        },
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Helmet>
        <title>Contact | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        Get in touch
      </h1>
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-2xl">
        {contactConfig.description}
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Email</p>
            <a
              href={`mailto:${contactConfig.YOUR_EMAIL}`}
              className="text-[var(--color-accent)] no-underline hover:underline"
            >
              {contactConfig.YOUR_EMAIL}
            </a>
          </div>
          {contactConfig.location && (
            <div>
              <p className="font-semibold mb-1">Location</p>
              <p className="text-[var(--color-text-secondary)]">
                {contactConfig.location}
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="md:col-span-2">
          {form.alert && (
            <div
              className={`mb-6 px-4 py-3 rounded-md text-sm ${
                form.alert.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
              role="alert"
            >
              {form.alert.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-[var(--color-border)] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-[var(--color-border)] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm border border-[var(--color-border)] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition resize-y"
              />
            </div>
            <button
              type="submit"
              disabled={form.loading}
              className="px-6 py-2.5 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md hover:bg-[var(--color-accent-light)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {form.loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
