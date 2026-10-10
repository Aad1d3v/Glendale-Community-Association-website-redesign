import { Button } from "@/components/ui/Button";
import { quickActions } from "@/content/site";

/**
 * On phones the two things people actually come here to do stay pinned to the
 * bottom of the screen, rather than hiding behind a menu. Hidden from lg up,
 * where the header carries the same two buttons.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-paper-light/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-[76rem] items-center gap-3 px-4 py-2.5">
        <Button
          to={quickActions[0].to}
          variant="sun"
          size="md"
          icon="hall"
          iconPosition="leading"
          className="flex-1"
        >
          {quickActions[0].label}
        </Button>
        <Button to={quickActions[1].to} variant="primary" size="md" className="flex-1">
          {quickActions[1].label}
        </Button>
      </div>
    </div>
  );
}
