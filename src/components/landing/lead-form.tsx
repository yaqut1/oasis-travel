"use client";

import { FormEvent, useState } from "react";
import { IconWhatsApp } from "@/components/icons";
import { SITE, whatsAppUrl } from "@/lib/site-config";

type FieldErrors = {
  name?: boolean;
  phone?: boolean;
  interest?: boolean;
};

const interests = [
  "Dubai flight tickets",
  "Dubai visa assistance",
  "Dubai hotel & transfers",
  "Dubai holiday package",
  "Umrah package",
  "Group / family travel",
] as const;

export function LeadForm() {
  const [errors, setErrors] = useState<FieldErrors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const company = String(data.get("company") ?? "");
    if (company) return;

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {
      name: name.length <= 1,
      phone: !/^[+\d][\d\s\-()]{6,}$/.test(phone),
      interest: interest === "",
    };

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    const text = [
      `Hello ${SITE.agencyName}!`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${interest}`,
      `Details: ${message}`,
      "",
      "I would like a free quote.",
    ].join("\n");

    window.open(whatsAppUrl(text), "_blank", "noopener");
    form.reset();
    setErrors({});
  }

  const fieldClass = (key: keyof FieldErrors) =>
    errors[key] ? "border-[#E0B4AE] bg-[#FBF4F3]" : "border-hair bg-bg-soft";

  return (
    <form
      className="border-hair rounded-[14px] border bg-white p-[clamp(1.4rem,4vw,2.2rem)]"
      noValidate
      aria-label="Enquiry form"
      onSubmit={onSubmit}
    >
      <div className="grid gap-4">
        <div>
          <label
            htmlFor="fName"
            className="text-muted mb-1.5 block text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
          >
            Full name
          </label>
          <input
            id="fName"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Amina Khan"
            required
            className={`text-ink w-full rounded-[10px] border px-4 py-3.5 transition-colors focus:border-teal focus:bg-white focus:shadow-[0_0_0_3px_rgba(14,110,126,0.1)] focus:outline-none ${fieldClass("name")}`}
          />
          {errors.name ? (
            <span className="mt-1 block text-[0.76rem] text-[#B4453A]">
              Please enter your name.
            </span>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="fPhone"
            className="text-muted mb-1.5 block text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
          >
            Phone / WhatsApp
          </label>
          <input
            id="fPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+000 00 000 0000"
            required
            className={`text-ink w-full rounded-[10px] border px-4 py-3.5 transition-colors focus:border-teal focus:bg-white focus:shadow-[0_0_0_3px_rgba(14,110,126,0.1)] focus:outline-none ${fieldClass("phone")}`}
          />
          {errors.phone ? (
            <span className="mt-1 block text-[0.76rem] text-[#B4453A]">
              Please enter a valid number.
            </span>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="fInterest"
            className="text-muted mb-1.5 block text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
          >
            Service needed
          </label>
          <select
            id="fInterest"
            name="interest"
            required
            defaultValue=""
            className={`text-ink w-full rounded-[10px] border px-4 py-3.5 transition-colors focus:border-teal focus:bg-white focus:shadow-[0_0_0_3px_rgba(14,110,126,0.1)] focus:outline-none ${fieldClass("interest")}`}
          >
            <option value="">Choose one…</option>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.interest ? (
            <span className="mt-1 block text-[0.76rem] text-[#B4453A]">
              Please choose a service.
            </span>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="fMsg"
            className="text-muted mb-1.5 block text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
          >
            Message (optional)
          </label>
          <textarea
            id="fMsg"
            name="message"
            rows={3}
            placeholder="Dates, travelers, preferences…"
            className="border-hair bg-bg-soft text-ink w-full rounded-[10px] border px-4 py-3.5 transition-colors focus:border-teal focus:bg-white focus:shadow-[0_0_0_3px_rgba(14,110,126,0.1)] focus:outline-none"
          />
        </div>

        <div className="absolute -left-[9999px]" aria-hidden>
          <label htmlFor="fCompany">Company</label>
          <input id="fCompany" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          className="bg-navy hover:bg-teal mt-1 inline-flex w-full cursor-pointer items-center justify-center gap-[0.55rem] rounded-full border border-transparent px-6 py-[0.9rem] text-[0.95rem] font-semibold text-white transition-colors duration-200"
        >
          <IconWhatsApp size={17} />
          Request a Free Quote on WhatsApp
        </button>

        <small className="text-muted mt-1 block text-center text-[0.75rem]">
          We never share your details · No online payment is ever required on this
          site.
        </small>
      </div>
    </form>
  );
}