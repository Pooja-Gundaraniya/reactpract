import React from 'react'

export default function Test({data}) {
    console.log(data);
    return (
        <div>
            Hello
            {data.map(item => (
                <>
                <div>
                    {item.id}
                </div>
                </>
            ))}
        </div>
    )
}
