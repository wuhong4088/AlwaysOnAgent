import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Check } from 'lucide-react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: 'primary' | 'error';
}

export default function Switch({ checked, onChange, variant = 'primary' }: SwitchProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
        checked ? (variant === 'primary' ? "bg-primary-container" : "bg-error") : "bg-surface-container-highest"
      )}
    >
      <motion.span
        animate={{ x: checked ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "pointer-events-none inline-flex h-6 w-6 transform items-center justify-center rounded-full shadow ring-0 transition duration-200 ease-in-out",
          checked ? (variant === 'primary' ? "bg-on-primary" : "bg-white") : "bg-surface-container-lowest border border-outline-variant"
        )}
      >
        {checked && <Check className={cn("w-4 h-4", variant === 'primary' ? "text-primary" : "text-error")} />}
      </motion.span>
    </button>
  );
}
