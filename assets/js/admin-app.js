var App = React.createClass({

    getInitialState: function() {
        return {
            state: window.location.hash.substr(1)
        }
    },

    componentDidMount: function() {
        if( window.location.hash.substr(2).length > 0 )
        {
            this.setState({
                route: window.location.hash.substr(2)
            })
        }
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(2)
            })
        })
    },

    render() {
        if( !this.state.route ) {
            return(<div><Home/></div>);
        }

        var Child = Home;
        if( this.state.route.indexOf('list') > -1 ) {
            Child = AllBooks;
        }
        if( this.state.route.indexOf('book/') > -1 ) {
            Child = BookDetail;
        }
        if( this.state.route.indexOf('edit/') > -1 ) {
            Child = BookEdit;
        }

        return(<div><Child/></div>);
    }

});

ReactDOM.render((
    <App/>
), document.getElementById('app-container') );