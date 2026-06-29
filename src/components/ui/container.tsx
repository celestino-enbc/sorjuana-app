"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    const sizes = {
      default: "max-w-content",
      narrow: "max-w-narrow",
      wide: "max-w-7xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 md:px-6 lg:px-10",
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  as?: "section" | "div" | "article";
  variant?: "default" | "alternate" | "dark";
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className,
      as: Component = "section",
      variant = "default",
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "bg-white",
      alternate: "bg-neutral-off-white",
      dark: "bg-primary-deep text-white",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "py-12 md:py-20 lg:py-30",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = "Section";

export { Container, Section, type ContainerProps, type SectionProps };