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
                return( <BookRow key={book.id} book={book}></BookRow> );
            })
            return(<div>{books}</div>)
        } else {
            return( <div>Book not found</div> );
        }
    }
});

var BookRow = React.createClass({
    render: function(){
        /*
         * Not sure if this is "right" but easiest way to pass data into HTML
         */
        var view_link = React.createElement( 'a', {href: '#/book/' + this.props.book.id, className: 'btn btn-primary' }, 'View');
        var edit_link = React.createElement( 'a', {href: '#/edit/' + this.props.book.id, className: 'btn btn-warning' }, 'Edit');
        var book_id = React.createElement( 'div', {className: 'col-sm-1'}, this.props.book.id );
        var book_title = React.createElement( 'div', {className: 'col-sm-4'}, this.props.book.title.rendered );
        var book_isbn = React.createElement( 'div', {className: 'col-sm-3'}, this.props.book.meta.isbn );
        var book_links = React.createElement( 'div', {className: 'col-sm-4 text-right'}, view_link, edit_link );

        var book_row = React.createElement( 'article', {className: 'book row'}, book_id, book_title, book_isbn, book_links );


        return( book_row );
    }
});