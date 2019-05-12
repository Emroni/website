import React from 'react';

export default function List({title, items}) {

    items = items.split(',');

    return <div className="skills-list">
        <div className="skills-list-container">
            <h3>
                <span>{title}</span>
                <span/>
            </h3>
            <ul>
                {items.map((title, key) =>
                    <li key={key}>
                        <span>{title}</span>
                    </li>)}
            </ul>
        </div>
    </div>;

}