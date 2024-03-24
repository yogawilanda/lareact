import React from 'react';
import { Button } from "@nextui-org/react";

export default function QuantityButton({ title }) {
    const [state, setState] = React.useState(0);

    const handleClick = () => {
        setState(state + 1);
    }

    const handleClickMin = () => {
        if (state > 0) {
            setState(state - 1);
        } else {
            setState(0);
        }
    }

    return (
        <>
            <div className="flex space-x-5 justify-center items-center">
                <Button color="primary" onPress={handleClick}>{title ? title : "Undescribed Button"}</Button>

                <p className='light:text-red-700 dark:text-white'>
                    {state > 0 ? `You clicked ${state} times` : "0"}
                </p>

                <Button color="primary" onPress={handleClickMin}>{"-" ?? "Undescribed Button"}</Button>

                <Button variant='ghost' onPress={() => setState(0)}>Reset</Button>
            </div>
        </>
    );
}