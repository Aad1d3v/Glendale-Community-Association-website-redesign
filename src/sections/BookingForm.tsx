import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hallBookingSteps } from "@/content/facilities";
import { rentalsEmail } from "@/content/contact";
import { association } from "@/content/site";
import { cn } from "@/lib/cn";

// Capacity claims differ between official rental pages. Ask the coordinator to confirm.

const EVENT_TYPES = [
  { value: "birthday", label: "Birthday party" },
  { value: "wedding", label: "Wedding or reception" },
  { value: "meeting", label: "Meeting or class" },
  { value: "memorial", label: "Memorial reception" },
  { value: "community", label: "Community event" },
  { value: "other", label: "Something else" },
] as const;

type Values = {
  name: string;
  email: string;
  phone: string;
  date: string;
  startTime: string;
  endTime: string;
  guests: string;
  eventType: string;
  kitchen: boolean;
  alcohol: boolean;
  notes: string;
};

type FieldName = keyof Values;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  date: "",
  startTime: "",
  endTime: "",
  guests: "",
  eventType: "",
  kitchen: false,
  alcohol: false,
  notes: "",
};

/** Order used for focus and for the error summary. */
const REQUIRED_ORDER: FieldName[] = ["name", "email", "date", "startTime", "endTime", "guests"];

const fieldId = (field: FieldName): string => `booking-${field}`;

/** Local date, not UTC — a Calgary evening would otherwise be tomorrow. */
const today = (): string => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
};

const validate = (values: Values): Errors => {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Tell us who the booking is for.";
  }

  if (!values.email.trim()) {
    errors.email = "We need an email address to send the quote to.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That does not look like an email address.";
  }

  if (!values.date) {
    errors.date = "Pick the date of your event.";
  } else if (values.date < today()) {
    errors.date = "That date has already passed. Pick today or later.";
  }

  if (!values.startTime) {
    errors.startTime = "Set a start time, including your set-up.";
  }

  if (!values.endTime) {
    errors.endTime = "Set an end time, including your take-down.";
  } else if (values.startTime && values.endTime <= values.startTime) {
    errors.endTime = "The end time has to be later than the start time.";
  }

  const guests = Number(values.guests);
  if (!values.guests.trim()) {
    errors.guests = "How many people are you expecting?";
  } else if (!Number.isInteger(guests) || guests < 1) {
    errors.guests = "Enter a whole number of guests.";
  }

  return errors;
};

const formatEventDate = (iso: string): string => {
  if (!iso) return "Not set";
  const parsed = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return iso;
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
};

const eventTypeLabel = (value: string): string =>
  EVENT_TYPES.find((type) => type.value === value)?.label ?? "Not specified";

const buildSummary = (values: Values): string =>
  [
    "Hall rental inquiry for Glendale Community Hall (not a reservation).",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || "Not provided"}`,
    "",
    `Date: ${formatEventDate(values.date)}`,
    `Time: ${values.startTime} to ${values.endTime} (including set-up and take-down)`,
    `Guests: ${values.guests}`,
    `Event type: ${eventTypeLabel(values.eventType)}`,
    `Kitchen needed: ${values.kitchen ? "Yes" : "No"}`,
    `Alcohol served: ${values.alcohol ? "Yes" : "No"}`,
    "",
    `Notes: ${values.notes.trim() || "None"}`,
    "",
    "Sent from the booking form on myglendale.ca",
  ].join("\n");

const describedBy = (id: string, hint: boolean, error: boolean): string | undefined => {
  const ids = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean);
  return ids.length > 0 ? ids.join(" ") : undefined;
};

const inputClass = (invalid: boolean): string =>
  cn(
    "mt-1.5 block min-h-11 w-full rounded-lg border px-3.5 py-2.5 text-[0.9375rem] text-ink-900 transition-colors placeholder:text-ink-500",
    invalid ? "border-plum-600 bg-plum-50" : "border-ink-300 bg-white hover:border-ink-400",
  );

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: (aria: {
    "aria-describedby": string | undefined;
    "aria-invalid": true | undefined;
    "aria-required": true | undefined;
  }) => ReactNode;
};

/** Label, optional hint, the control itself, then the message. One shape, every field. */
function Field({ id, label, required = false, hint, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-ink-800">
        {label}
        {required ? <span className="ml-1.5 text-xs font-normal text-ink-500">required</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs leading-snug text-ink-500">
          {hint}
        </p>
      ) : null}
      {children({
        "aria-describedby": describedBy(id, Boolean(hint), Boolean(error)),
        "aria-invalid": error ? true : undefined,
        "aria-required": required ? true : undefined,
      })}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-ink-800"
        >
          <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-plum-700" />
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}

export function BookingForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sentSummary, setSentSummary] = useState<string | null>(null);

  const update = (patch: Partial<Values>): void => {
    const next: Values = { ...values, ...patch };
    setValues(next);
    /* Once the form has been submitted, keep correcting it as they type. */
    if (submitted) setErrors(validate(next));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    setSubmitted(true);

    const firstInvalid = REQUIRED_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    const body = buildSummary(values);
    const subject = `Hall booking request — ${formatEventDate(values.date)}`;

    /* There is no server behind this site, so the request is handed to the
       visitor's own mail client with every field already filled in. If the
       office ever gets a form endpoint, replace this line with a POST to it and
       render the response instead. */
    window.location.href = `mailto:${rentalsEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSentSummary(body);
  };

  const reset = (): void => {
    setValues(EMPTY);
    setErrors({});
    setSubmitted(false);
    setSentSummary(null);
  };

  const errorFields = REQUIRED_ORDER.filter((field) => errors[field]);

  const summaryRows: Array<[string, string]> = [
    ["Event", eventTypeLabel(values.eventType)],
    ["Date", formatEventDate(values.date)],
    [
      "Time",
      values.startTime && values.endTime ? `${values.startTime} – ${values.endTime}` : "Not set",
    ],
    ["Guests", values.guests || "Not set"],
    ["Kitchen", values.kitchen ? "Yes" : "No"],
    ["Alcohol", values.alcohol ? "Yes" : "No"],
  ];

  return (
    <Section id="booking" tone="paper">
      <SectionHeading
        eyebrow="Hall rentals"
        title="Send a rental inquiry"
        lede="Tell the Rental Coordinator your preferred date, space, and event details. This form opens a pre-filled email draft; it does not send a message, check availability, or reserve a date. The coordinator reviews the inquiry and replies with next steps."
      />

      <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          {sentSummary ? (
            <Card className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-grass-100 text-grass-700">
                  <Icon name="check" className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold">Your email draft is ready</h3>
                  <p className="mt-2 max-w-[54ch] text-sm leading-relaxed text-ink-600">
                    If your email program opened, review the details and press Send there. This website cannot send or store the inquiry. If nothing opened, email{" "}
                    <a
                      href={`mailto:${rentalsEmail}`}
                      className="font-semibold text-plum-700 underline underline-offset-2"
                    >
                      {rentalsEmail}
                    </a>{" "}
                    or call {association.phone}.
                  </p>

                  <dl className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                    {summaryRows.map(([term, detail]) => (
                      <div key={term}>
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
                          {term}
                        </dt>
                        <dd className="mt-1 text-sm text-ink-800">{detail}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button onClick={reset}>Send another request</Button>
                    <Button
                      href={association.phoneHref}
                      variant="outline"
                      icon="phone"
                      iconPosition="leading"
                    >
                      {association.phone}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-6">
              {submitted && errorFields.length > 0 ? (
                <div role="alert" className="rounded-card border border-plum-200 bg-plum-50 p-4">
                  <p className="flex items-center gap-2 font-display text-sm font-semibold text-ink-900">
                    <Icon name="close" className="h-4 w-4 text-plum-700" />
                    {errorFields.length === 1
                      ? "One thing needs fixing before this can be sent"
                      : `${errorFields.length} things need fixing before this can be sent`}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {errorFields.map((field) => (
                      <li key={field}>
                        <button
                          type="button"
                          onClick={() => document.getElementById(fieldId(field))?.focus()}
                          className="text-left text-sm font-medium text-plum-800 underline underline-offset-2 hover:text-plum-600"
                        >
                          {errors[field]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="booking-name"
                  label="Full name"
                  required
                  error={errors.name}
                  className="sm:col-span-2"
                >
                  {(aria) => (
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Who is the booking for?"
                      value={values.name}
                      onChange={(event) => update({ name: event.target.value })}
                      className={inputClass(Boolean(errors.name))}
                      {...aria}
                    />
                  )}
                </Field>

                <Field id="booking-email" label="Email" required error={errors.email}>
                  {(aria) => (
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={(event) => update({ email: event.target.value })}
                      className={inputClass(Boolean(errors.email))}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id="booking-phone"
                  label="Phone"
                  hint="Optional, but the fastest way to sort out a date"
                >
                  {(aria) => (
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="403-555-0134"
                      value={values.phone}
                      onChange={(event) => update({ phone: event.target.value })}
                      className={inputClass(false)}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id="booking-date"
                  label="Event date"
                  required
                  error={errors.date}
                  className="sm:col-span-2"
                >
                  {(aria) => (
                    <input
                      id="booking-date"
                      name="date"
                      type="date"
                      min={today()}
                      value={values.date}
                      onChange={(event) => update({ date: event.target.value })}
                      className={cn(inputClass(Boolean(errors.date)), "sm:max-w-xs")}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id="booking-startTime"
                  label="Start time"
                  required
                  error={errors.startTime}
                  hint="Include the time you need to set up"
                >
                  {(aria) => (
                    <input
                      id="booking-startTime"
                      name="startTime"
                      type="time"
                      value={values.startTime}
                      onChange={(event) => update({ startTime: event.target.value })}
                      className={inputClass(Boolean(errors.startTime))}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id="booking-endTime"
                  label="End time"
                  required
                  error={errors.endTime}
                  hint="Include clean-up and take-down"
                >
                  {(aria) => (
                    <input
                      id="booking-endTime"
                      name="endTime"
                      type="time"
                      value={values.endTime}
                      onChange={(event) => update({ endTime: event.target.value })}
                      className={inputClass(Boolean(errors.endTime))}
                      {...aria}
                    />
                  )}
                </Field>

                <Field
                  id="booking-guests"
                  label="Guests"
                  required
                  error={errors.guests}
                  hint="Published standing capacities differ between rental pages; seating capacity depends on the room layout. Confirm the suitable capacity for your event with the Rental Coordinator."
                >
                  {(aria) => (
                    <input
                      id="booking-guests"
                      name="guests"
                      type="number"
                      min={1}
                      step={1}
                      inputMode="numeric"
                      placeholder="80"
                      value={values.guests}
                      onChange={(event) => update({ guests: event.target.value })}
                      className={inputClass(Boolean(errors.guests))}
                      {...aria}
                    />
                  )}
                </Field>

                <Field id="booking-eventType" label="What kind of event is it?">
                  {(aria) => (
                    <select
                      id="booking-eventType"
                      name="eventType"
                      value={values.eventType}
                      onChange={(event) => update({ eventType: event.target.value })}
                      className={inputClass(false)}
                      {...aria}
                    >
                      <option value="">Select one</option>
                      {EVENT_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 text-sm">
                  <input
                    id="booking-kitchen"
                    name="kitchen"
                    type="checkbox"
                    checked={values.kitchen}
                    onChange={(event) => update({ kitchen: event.target.checked })}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink-300 accent-plum-700"
                  />
                  <span>
                    <span className="font-semibold text-ink-800">We need the kitchen</span>
                    <span className="mt-0.5 block text-xs leading-snug text-ink-500">
                      The official information page lists an oven with a five-element stovetop, a microwave, three sinks, coffee makers, and a serving window. Confirm current kitchen inventory and what is included with the Rental Coordinator.
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm">
                  <input
                    id="booking-alcohol"
                    name="alcohol"
                    type="checkbox"
                    checked={values.alcohol}
                    onChange={(event) => update({ alcohol: event.target.checked })}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink-300 accent-plum-700"
                  />
                  <span>
                    <span className="font-semibold text-ink-800">We will be serving alcohol</span>
                    <span className="mt-0.5 block text-xs leading-snug text-ink-500">
                      A liquor licence is required when alcohol is served. The official information page strongly recommends renter liability insurance; confirm the current requirements with the Rental Coordinator.
                    </span>
                  </span>
                </label>
              </div>

              <Field
                id="booking-notes"
                label="Anything else we should know?"
                hint="Accessibility needs, a band, a bouncy castle, tables you want left out"
              >
                {(aria) => (
                  <textarea
                    id="booking-notes"
                    name="notes"
                    rows={4}
                    value={values.notes}
                    onChange={(event) => update({ notes: event.target.value })}
                    className={inputClass(false)}
                    {...aria}
                  />
                )}
              </Field>

              <div className="flex flex-col gap-3 border-t border-ink-200 pt-6 sm:flex-row sm:items-center sm:gap-5">
                <Button type="submit" size="lg" icon="arrowRight">
                  Send the request
                </Button>
                <p className="max-w-[36ch] text-xs leading-snug text-ink-500">
                  This opens a draft to {rentalsEmail}. Review it and press Send; this website does not send or store the inquiry. A request does not reserve a date.
                </p>
              </div>
            </form>
          )}
        </div>

        <div className="lg:col-span-5">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-plum-600">
            How a booking runs
          </h3>
          <ol className="mt-5 space-y-5">
            {hallBookingSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum-100 font-display text-sm font-semibold text-plum-700">
                  {index + 1}
                </span>
                <div>
                  <p className="font-display text-[0.9375rem] font-semibold text-ink-900">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Card className="mt-8 bg-paper">
            <p className="font-display text-sm font-semibold text-ink-900">
              Would you rather just call?
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
              Contact the Rental Coordinator to ask about availability. This inquiry page does not access the live rental calendar.
            </p>
            <Button
              href={association.phoneHref}
              variant="outline"
              className="mt-4"
              icon="phone"
              iconPosition="leading"
            >
              {association.phone}
            </Button>
            <dl className="mt-5 space-y-2 text-xs">
              {association.officeHours.map((entry) => (
                <div
                  key={entry.days}
                  className="flex justify-between gap-4 border-b border-ink-200 pb-2 last:border-b-0 last:pb-0"
                >
                  <dt className="text-ink-500">{entry.days}</dt>
                  <dd className="font-semibold text-ink-700">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </div>
    </Section>
  );
}
