var $ = jQuery;
var AllBooks = React.createClass({

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
            return( <Books data={this.state.books}></Books>)
        } else {
            return(<div>No Books</div>);
        }
    }
});

var Books = React.createClass({
    render: function(){
        if( this.props.data.length ) {
            var books = this.props.data.map(function(book){
                return( <Book key={book.id} book={book}></Book> );
            })
            return(<div>{books}</div>)
        } else {
            return( <div>Book not found</div> );
        }
    }
});

var Book = React.createClass({
    render: function(){
        return(<article>{this.props.book.title.rendered}</article>);
    }
})

ReactDOM.render(<AllBooks />, document.getElementById('app-container'));