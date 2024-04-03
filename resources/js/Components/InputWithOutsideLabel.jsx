import React from 'react';
import { Input } from '@nextui-org/react';

export default function InputWithOutsideLabel({ value, labelValue, className = '', children, ...props }) {
    return (
        <Input
            isClearable={true}
            className={className}
            type="email"
            label={labelValue ? labelValue : "undefined"}
            variant='flat'
            labelPlacement={"inside"}
        />
    );

}
