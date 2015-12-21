var $ = jQuery;
var Books = React.createClass({

    getInitialState: function() {
        return {
            books: []
        }
    },
    componentDidMount: function() {

        $.get( admin_app_local.api_url + 'wp/v2/book', function(res){
            if (this.isMounted()) {
                this.setState({
                    books: res
                })
            }
        }.bind(this))

    },

    render: function() {

        if( this.state.books.length > 0 ) {
            console.log('rendering..');
            var all_books = this.state.books.map(function(book, i) {
                console.log( book );
                return (<div className="row" key="{book}"><book className="col-sm-12" book="{book}"></book></div>);
            });
            return( <div>{all_books}</div> );
        } else {
            console.log('no books');
            return(<div>No Books</div>);
        }
    }
});

var Book = React.createClass({

    render: function(){
        return(<article>{this.props.book.title.rendered}</article>);
    }

})

ReactDOM.render(<Books />, document.getElementById('app-container'));