import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Reusable Button Component with variants
 * @param {string} variant - primary, secondary, outline, ghost
 * @param {string} size - sm, md, lg
 * @param {string} to - Link path (if internal link)
 * @param {string} href - External link
 * @param {boolean} fullWidth - Full width button
 * @param {ReactNode} children - Button content
 * @param {Function} onClick - Click handler
 */
export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  fullWidth = false,
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  // Variant styles
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg",
    secondary: "bg-cyan-500 text-white hover:bg-cyan-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    ghost: "text-indigo-600 hover:bg-indigo-50",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md",
  };

  // Size styles
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  const ButtonContent = () => (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  // Render as Link for internal navigation
  if (to) {
    return (
      <Link to={to} className={baseStyles} {...props}>
        <ButtonContent />
      </Link>
    );
  }

  // Render as anchor for external links
  if (href) {
    return (
      <a href={href} className={baseStyles} target="_blank" rel="noopener noreferrer" {...props}>
        <ButtonContent />
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      {...props}
    >
      <ButtonContent />
    </button>
  );
}
