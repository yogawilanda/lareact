import React, { forwardRef, useEffect, useRef } from 'react';

const TextInput = forwardRef(({ type = 'text', className = '', isFocused = false, icon, ...props }, ref) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <div className="relative">
            <input
                {...props}
                type={type}
                className={
                    'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                    className
                }
                ref={ref || inputRef}
            />
            {icon && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {icon}
                </span>
            )}
        </div>
    );
});

export default TextInput;
