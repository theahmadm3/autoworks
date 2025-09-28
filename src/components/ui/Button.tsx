import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group',
          {
            // Primary - Sophisticated blue with subtle gradient
            'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-xl': variant === 'primary',
            
            // Secondary - Elegant gray
            'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 rounded-xl shadow-sm hover:shadow-md': variant === 'secondary',
            
            // Outline - Sophisticated border style
            'border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-0.5': variant === 'outline',
            
            // Ghost - Minimal but elegant
            'text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg': variant === 'ghost',
            
            // Gradient - Premium accent
            'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-xl': variant === 'gradient',
          },
          {
            'h-8 px-3 text-sm font-medium': size === 'sm',
            'h-11 px-6 py-2.5 text-base font-medium': size === 'md',
            'h-12 px-8 py-3 text-lg font-semibold': size === 'lg',
            'h-14 px-10 py-4 text-xl font-semibold': size === 'xl',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Shimmer effect for primary and gradient buttons */}
        {(variant === 'primary' || variant === 'gradient') && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;