import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({children, to}) {

    return <Link to={to} className="button">{children}</Link>;

}