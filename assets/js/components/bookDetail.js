var BookHTML = React.createClass({
    getInitialState: function(){
        return {
            html: this.props.html
        }
    },
    render: function() {
        return React.createElement( 'div', {
            dangerouslySetInnerHTML: {
                __html: this.state.html
            }
        })
    }
})
var BookDetail = React.createClass({

    getInitialState: function() {
        return {
            book_id: window.location.hash.substr(1).replace('/book/', ''),
            book: []
        }
    },

    componentDidMount: function() {
        if( this.state.book_id ) {
            $.get( admin_app_local.api_url + 'wp/v2/book/' + this.state.book_id, function(res){
                if (this.isMounted()) {
                    this.state.book[0] =  res;
                    this.forceUpdate();
                }
            }.bind(this))
        }
    },

    render: function(){
            if( this.state.book.length ) {
                var book = this.state.book.map(function(book, i){
                    var edit_url = '#/edit/' + book.id;
                    return(
                        <div key={book.id}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3>{book.title.rendered}</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-10">
                                    <BookHTML html={book.content.rendered} />
                                    <h4>Excerpt</h4>
                                    <BookHTML html={book.excerpt.rendered} />
                                    <div>
                                        <h4>ISBN</h4>
                                        <p>{book.meta.isbn}</p>
                                    </div>
                                <div>
                                    <h4>Price USD</h4>
                                    <p>${book.meta.price}</p>
                                </div>
                            </div>
                                <div className="col-sm-2">
                                    <a href={edit_url} className="btn btn-warning btn-block">Edit</a>

                                </div>
                            </div>
                        </div>
                    );
                })
                return( <div>{book}</div> );
            } else {
                return( <div>TEST</div> );
            }
    }

})