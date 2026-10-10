import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { IconBadge } from "@/components/ui/IconBadge";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits, joinSteps, membershipPortal, tiers } from "@/content/membership";

export function MembershipTiers() {
  return (
    <Section id="join" tone="white">
      <SectionHeading
        eyebrow="Join or renew"
        title="Start with the $35 annual membership"
        lede="Choose Resident or Associate. Non-residents are welcome. Seasonal court and garden access are shown here for the redesign preview; the test page does not process memberships."
      />

      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:max-w-4xl">
        {tiers.map((tier) => (
          <Card
            as="li"
            key={tier.id}
            tone={tier.best ? "highlight" : "default"}
            className="flex flex-col p-7"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink-900">{tier.name}</h3>
              {tier.best ? <Pill tone="plum">Resident option</Pill> : null}
            </div>

            <p className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-4xl font-semibold tabular-nums text-plum-700">
                {tier.price}
              </span>
              <span className="text-sm text-ink-500">{tier.per}</span>
            </p>

            <p className="mt-4 text-sm leading-relaxed text-ink-600">{tier.blurb}</p>

            <ul className="mt-6 space-y-2.5 border-t border-ink-200/70 pt-6">
              {tier.includes.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-grass-500" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex-1" />
            <Button
              to="/contact"
              variant={tier.best ? "primary" : "outline"}
              fullWidth
              icon="arrowRight"
            >
              Contact about membership
            </Button>
          </Card>
        ))}
      </ul>

      <div className="mt-7 rounded-card border border-sun-400/50 bg-sun-50 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p className="max-w-[62ch] text-sm leading-relaxed text-ink-700">
          The base membership auto-renews on its purchase anniversary until cancelled. Seasonal add-ons (including courts and garden) do not auto-renew by default. You will receive a receipt and facility welcome email after purchase.
        </p>
        <a href="/contact" className="mt-4 inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-plum-700 px-5 text-sm font-semibold text-white hover:bg-plum-800 sm:mt-0">
          Ask about membership
        </a>
      </div>

      <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900">
            What a membership gets you
          </h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit.title}>
                <IconBadge name={benefit.icon} tone="plum" />
                <p className="mt-3.5 font-display text-[0.9375rem] font-semibold text-ink-900">
                  {benefit.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{benefit.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div id="how-to-join">
          <h3 className="font-display text-xl font-semibold text-ink-900">How to join online</h3>
          <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink-600">
            The sign-up steps below describe the association&apos;s purchase flow; this redesign preview does not submit memberships or payments.
          </p>

          <ol className="mt-6 space-y-5 border-t border-ink-200/70 pt-6">
            {joinSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum-100 font-display text-sm font-semibold text-plum-800">
                  {index + 1}
                </span>
                <span>
                  <span className="block font-display text-[0.9375rem] font-semibold text-ink-900">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-600">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-7 text-sm leading-relaxed text-ink-600">
            Locked out? Choose <strong>Forgot Password</strong> on the portal login page and enter the email address associated with your existing membership. Check spam or junk folders for the reset message.
          </p>
          <a
            href={`mailto:${membershipPortal.coordinatorEmail}`}
            className="mt-4 inline-flex min-h-11 items-center font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4"
          >
            Email {membershipPortal.coordinatorEmail} for portal help
          </a>
        </div>
      </div>
    </Section>
  );
}
