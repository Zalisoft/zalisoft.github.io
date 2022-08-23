import Spinner from "../public/icons/spinner.svg";

import clsxm from "@/components/utils/clsxm";
import * as React from "react";

enum ButtonVariant {
  "primary",
  "light",
  "secondary-light",
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      isDarkBg = false,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          "inline-flex items-center rounded-full px-6 py-3 ",
          "transition-colors duration-75",
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && [
              "bg-main-blue text-white",
              "hover:bg-main-blue/90",
              "disabled:bg-main-blue/80",
            ],
            variant === "light" && [
              "bg-blueBg text-main-blue",
              "hover:bg-blueBg/90",
              "disabled:bg-blueBg/80",
            ],
            variant === "secondary-light" && [
              "bg-blueBg text-main-purple",
              "hover:bg-blueBg/90",
              "disabled:bg-blueBg/80",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "text-white": ["primary"].includes(variant),
                "text-main-blue": ["light"].includes(variant),
                "text-main-purple": ["secondary-light"].includes(variant),
              }
            )}
          >
            <Spinner className="animate-spin" />
          </div>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
