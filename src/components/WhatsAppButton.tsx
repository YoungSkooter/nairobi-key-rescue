import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "lg";
  className?: string;
  onClick?: () => void;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.616c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.824-6.8-8.064-7.114-.23-.314-1.932-2.572-1.932-4.904s1.222-3.478 1.656-3.956c.434-.478.948-.598 1.264-.598.314 0 .632.002.908.016.292.016.684-.11 1.07.816.39.942 1.328 3.242 1.444 3.478.118.236.196.51.04.824-.158.314-.236.51-.472.786-.236.274-.496.614-.71.824-.234.236-.478.49-.206.962.274.472 1.216 2.006 2.612 3.25 1.794 1.598 3.306 2.094 3.778 2.33.472.236.746.196 1.02-.118.274-.314 1.178-1.374 1.492-1.846.314-.472.632-.392 1.066-.236.434.158 2.752 1.298 3.224 1.534.472.236.786.354.904.55.118.196.118 1.128-.272 2.228z" />
  </svg>
);

const WhatsAppButton = ({ href, children, size = "lg", className, onClick }: WhatsAppButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-heading font-semibold uppercase rounded-lg transition-transform hover:scale-105 hover:bg-[#20bd5a]",
        size === "lg" ? "text-lg md:text-xl px-8 py-4" : "text-base px-6 py-3",
        className
      )}
    >
      <WhatsAppIcon className="w-6 h-6" />
      {children}
    </a>
  );
};

export default WhatsAppButton;
