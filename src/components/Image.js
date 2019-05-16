import React from 'react';
import classnames from 'classnames';

export default class Img extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        };

        this.image = new Image();
        this.image.onload = this.loaded.bind(this);
    }

    componentDidMount() {
        this.image.src = this.props.src;
    }

    loaded() {
        this.setState({
            loading: false,
        });
    }

    render() {
        const {alt, src} = this.props;
        const {loading} = this.state;

        const className = classnames('image', {
            loading,
        });

        return <img alt={alt} className={className} src={loading ? '' : src}/>;
    }

}