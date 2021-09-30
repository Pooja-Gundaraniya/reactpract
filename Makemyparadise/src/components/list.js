import React from "react";

const List = (people) => {
    return (
        <>
            {people.map((person) => {
            const { id, name, age, image } = person;
            return (
                <>
                    <p>{name}</p>
                    <a>{age}</a>
                </>
            );
        })
    }
        </>
    );
};
export default List;