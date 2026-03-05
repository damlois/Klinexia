"use client";

import { useEffect, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const SUCCESS_DISPLAY_MS = 3500;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]{10,20}$/;

type FormErrors = {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function validateForm(data: {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (data.phone.trim() && !PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number (10–20 digits)";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

const inputBase =
  "w-full rounded-lg border bg-transparent px-4 py-3 font-normal leading-6 text-[#f5f5f5] placeholder:text-[#bfbfbf] text-[16px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-colors focus:outline-none focus:ring-1";
const inputError = "border-[#c9a0a0] focus:border-[#c9a0a0] focus:ring-[#c9a0a0]";
const inputNormal = "border-[rgba(208,213,221,0.7)] focus:border-[#06397d] focus:ring-[#06397d]";

export function GetInTouchSection() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), SUCCESS_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    const formData = { fullName, company, email, phone, message };
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrorMessage(data.error || "Something went wrong. Please try again.");
          setStatus("error");
        }
        return;
      }

      setStatus("success");
      setFullName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setErrorMessage("Failed to send message. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative z-[2] bg-white py-24">
      <div className="mx-auto max-w-[1124px] px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-[#0f172a] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="pointer-events-none absolute left-1/2 top-[-190px] size-[570px] -translate-x-1/2 rounded-full bg-[rgba(6,57,125,0.3)] blur-[60px]" />
          <div className="pointer-events-none absolute bottom-[-100px] left-[-190px] size-[570px] rounded-full bg-[rgba(124,58,237,0.3)] blur-[60px]" />

          <div className="relative p-12 lg:p-16">
            <div className="relative mx-auto max-w-[591px]">
              <AnimatedSection className="mb-8 text-center">
                <h2 className="mb-5 font-bold leading-[60px] text-white text-[51px]">Get in Touch</h2>
                <p className="font-normal leading-6 text-[#cbd5e1] text-[16px]">
                  Discover how Klinexia improves workflow efficiency and outcomes.
                  <br />
                  Get in touch with us.
                </p>
              </AnimatedSection>

              {status === "success" && (
                <div className="flex flex-col items-center gap-8 rounded-xl border border-[#d0d5dd] bg-transparent p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6ffe5]">
                    <img src="/icons/success-check.svg" alt="" className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="font-bold leading-8 text-white text-[20px]">Thank You!</h3>
                    <p className="max-w-[444px] font-normal leading-6 text-[#cbd5e1] text-[16px]">
                      Your message has been received. We&apos;ll get back to you shortly
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rounded-lg border border-[#06397d] bg-[#06397d] px-[18px] py-[10px] font-semibold leading-6 text-white text-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-all hover:bg-[#052d63]"
                  >
                    Send Message
                  </button>
                </div>
              )}

              {status === "error" && errorMessage && (
                <div className="mb-6 rounded-lg border border-[#c9a0a0]/60 bg-[#c9a0a0]/10 px-4 py-3 text-[#d4a5a5]">
                  {errorMessage}
                </div>
              )}

              {status !== "success" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-medium text-[#f5f5f5] text-[14px] leading-5">
                      Full Name <span className="text-[#d4a5a5]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`${inputBase} ${errors.fullName ? inputError : inputNormal}`}
                      disabled={status === "loading"}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[14px] text-[#d4a5a5]">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block font-medium text-[#f5f5f5] text-[14px] leading-5">Company</label>
                    <input
                      type="text"
                      placeholder="Enter company name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={`${inputBase} ${errors.company ? inputError : inputNormal}`}
                      disabled={status === "loading"}
                    />
                    {errors.company && (
                      <p className="mt-1 text-[14px] text-[#d4a5a5]">{errors.company}</p>
                    )}
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-medium text-[#f5f5f5] text-[14px] leading-5">
                      Email <span className="text-[#d4a5a5]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                      disabled={status === "loading"}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[14px] text-[#d4a5a5]">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1.5 block font-medium text-[#f5f5f5] text-[14px] leading-5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                      disabled={status === "loading"}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[14px] text-[#d4a5a5]">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block font-medium text-[#f5f5f5] text-[14px] leading-5">
                    Message <span className="text-[#d4a5a5]">*</span>
                  </label>
                  <textarea
                    placeholder="Enter message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputBase} ${errors.message ? inputError : inputNormal}`}
                    disabled={status === "loading"}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[14px] text-[#d4a5a5]">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full cursor-pointer rounded-lg border border-[#06397d] bg-[#06397d] px-5 py-3 font-semibold leading-6 text-white text-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-all duration-300 hover:bg-[#052d63] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
