import { style } from "@vanilla-extract/css";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as styles from "./button.css";
import { ButtonHTMLAttributes, useCallback } from "react";
import { useScrollSmooth } from "@/utils/useScrollSmooth";

type ButtonProps = {
  variant?: "primary" | "secondary" | "text" | "link";
  isLoading?: boolean;
  rounded?: boolean;
  id?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant,
  isLoading = false,
  rounded = false,
  id,
  href,
  className,
  ...props
}: ButtonProps) {
  const scrollSmooth = useScrollSmooth();

  const mainStyles = {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.text]: variant === "text",
    [styles.link]: variant === "link",
    [styles.rounded]: rounded,
  };

  const handleOnClick = useCallback(() => {
    if (href) {
      scrollSmooth(href);
    }
  }, [href, scrollSmooth]);

  if (variant === "link") {
    return (
      <motion.a id={id} className={clsx("", mainStyles, className)} href={href}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      disabled={isLoading}
      className={clsx("", styles.main, mainStyles, className)}
      onClick={handleOnClick}
    >
      {children}
    </motion.button>
  );
}
