"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const { contact, anchors } = content;
const { fields, errors: msg } = contact;

type Values = { name: string; phone: string; email: string; clientType: string; message: string };
type Errors = Partial<Record<"name" | "phone" | "email", string>>;

const initial: Values = { name: "", phone: "", email: "", clientType: "particular", message: "" };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[\d\s()-]{9,}$/;

const validate = (v: Values): Errors => {
  const e: Errors = {};
  if (!v.name.trim()) e.name = msg.required;
  if (!v.phone.trim()) e.phone = msg.required;
  else if (!PHONE.test(v.phone.trim())) e.phone = msg.phone;
  if (!v.email.trim()) e.email = msg.required;
  else if (!EMAIL.test(v.email.trim())) e.email = msg.email;
  return e;
};

const inputCls =
  "w-full rounded-btn border border-line-strong bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 aria-[invalid=true]:border-red-600";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setSent(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // El envío es simulado para esta prueba.
      setSent(true);
      setValues(initial);
    }
  };

  const text = (k: "name" | "phone" | "email", type: string, autoComplete: string) => (
    <div>
      <label htmlFor={k} className="mb-2 block text-sm font-semibold text-ink">
        {fields[k].label}
      </label>
      <input
        id={k}
        name={k}
        type={type}
        autoComplete={autoComplete}
        placeholder={fields[k].placeholder}
        value={values[k]}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${k}-error` : undefined}
        className={inputCls}
      />
      {errors[k] && (
        <p id={`${k}-error`} className="mt-1.5 text-sm text-red-600">
          {errors[k]}
        </p>
      )}
    </div>
  );

  return (
    <section id={anchors.contact} className="scroll-mt-16 py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle subtitle={contact.subtitle}>{contact.title}</SectionTitle>

          <form onSubmit={onSubmit} noValidate className="mt-8 rounded-panel border border-line bg-surface p-5 md:p-6">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
              {text("name", "text", "name")}
              {text("phone", "tel", "tel")}
              {text("email", "email", "email")}

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-ink">{fields.clientType.label}</legend>
                <div className="grid grid-cols-2 gap-3">
                  {fields.clientType.options.map((o) => (
                    <label
                      key={o.value}
                      className="flex cursor-pointer items-center gap-2 rounded-btn border border-line-strong px-3 py-2.5 text-sm font-medium text-ink has-checked:border-accent has-checked:bg-accent-soft has-checked:text-accent"
                    >
                      <input
                        type="radio"
                        name="clientType"
                        value={o.value}
                        checked={values.clientType === o.value}
                        onChange={set("clientType")}
                        className="peer sr-only"
                      />
                      <span className="h-3.5 w-3.5 rounded-full border border-line-strong peer-checked:border-accent peer-checked:bg-accent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-900" />
                      {o.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="md:col-span-2 lg:col-span-1">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                  {fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={fields.message.placeholder}
                  value={values.message}
                  onChange={set("message")}
                  className={`${inputCls} resize-y`}
                />
              </div>
            </div>

            <Button type="submit" fullWidth className="mt-5">
              {contact.submit}
            </Button>

            {sent && (
              <p role="status" className="mt-4 rounded-btn bg-accent-soft px-4 py-3 text-sm font-medium text-accent">
                {contact.success}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}