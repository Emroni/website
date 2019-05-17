import React from 'react';
import Trans from '../../components/Trans';

export default function Tags({items}) {

    let rows = [items];
    if (items.length >= 6){
        rows = [
            items.slice(0, Math.ceil(items.length / 2)),
            items.slice(Math.floor(items.length / 2)),
        ]
    }

    return <Trans className="work-tags">
        {rows.map((row, key) =>
            <div key={key} className="row">
                {row.map(tag =>
                    <div key={tag} className="item">
                        <span>{tag}</span>
                    </div>)}
            </div>)}
    </Trans>;

}