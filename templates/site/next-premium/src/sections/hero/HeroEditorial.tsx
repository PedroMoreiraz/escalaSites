import Link from "next/link"
import { HeroProps } from "./types"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { ContentWrapper } from "@/components/layout/ContentWrapper"
import { Stagger, StaggerItem } from "@/motion/Stagger"
import { cn } from "@/lib/utils"

export function HeroEditorial({
  id = "hero",
  spacing = "xl",
  headline,
  subtext,
  eyebrow,
  actions,
  className,
}: HeroProps) {
  return (
    <Section
      id={id}
      spacing={spacing}
      className={cn("min-h-[100dvh] flex items-center", className)}
    >
      <Container size="standard">
        <Stagger className="flex flex-col items-start" amount={0.2}>

          {eyebrow && (
            <StaggerItem>
              <span className="text-caption inline-block mb-6 opacity-50 tracking-widest">
                {eyebrow}
              </span>
            </StaggerItem>
          )}

          <StaggerItem>
            <ContentWrapper align="left">
              <h1 className="text-display font-semibold mb-6 max-w-[18ch]">
                {headline}
              </h1>
            </ContentWrapper>
          </StaggerItem>

          {subtext && (
            <StaggerItem>
              <p className="text-body opacity-60 mb-10 max-w-[50ch]">
                {subtext}
              </p>
            </StaggerItem>
          )}

          {actions && actions.length > 0 && (
            <StaggerItem>
              <div className="flex items-center gap-4 flex-wrap">
                {actions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={cn(
                      "inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium transition-all duration-200",
                      "active:scale-[0.98]",
                      {
                        "bg-foreground text-background hover:opacity-90":
                          action.variant === "primary" || !action.variant,
                        "border border-current opacity-60 hover:opacity-100 text-foreground":
                          action.variant === "ghost" || action.variant === "outline",
                        "opacity-70 hover:opacity-100 text-foreground":
                          action.variant === "secondary",
                      }
                    )}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </StaggerItem>
          )}

        </Stagger>
      </Container>
    </Section>
  )
}
