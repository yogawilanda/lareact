// ShadowButtonPrimary.jsx
import React from 'react';
import { Button, Link } from '@nextui-org/react'; // Import necessary components

function ShadowButtonPrimary({ onPress, href, children }) {
    return (
        <Button
            variant='shadow'
            color='primary'
            onPress={onPress ? onPress : () => console.log("Unidentified Button Action")}
        >
            <Link
                href={href ? href : "/"}
                className='text-white dark:text-white'
            >
                {children ? children : "Undefined Button"}
            </Link>
        </Button>
    );
}

export default ShadowButtonPrimary;