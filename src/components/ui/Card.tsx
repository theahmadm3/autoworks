import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'bordered';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group relative overflow-hidden transition-all duration-300',
          {
            'bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md': variant === 'default',
            'bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-1': variant === 'elevated',
            'bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl': variant === 'glass',
            'bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg': variant === 'bordered',
          },
          className
        )}
        {...props}
      >
        {/* Subtle gradient overlay for elevated cards */}
        {variant === 'elevated' && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        
        {/* Content wrapper */}
        <div className="relative z-10 p-6">
          {children}
        </div>
      </div>
    );
  }
);
Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mb-6', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn('font-semibold text-xl text-gray-900 leading-tight tracking-tight', className)}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = 'CardTitle';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('text-gray-600 leading-relaxed', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardContent.displayName = 'CardContent';

export { Card, CardHeader, CardTitle, CardContent };