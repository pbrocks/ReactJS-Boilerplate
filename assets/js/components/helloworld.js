var $ = jQuery;
var Books = React.createClass({

    getInitialState: function() {
        return {
            books: []
        }
    },
    componentDidMount: function() {

        $.get( admin_app_local.api_url + 'wp/v2/book', function(res){
            this.setState({
                books: res
            })
        }.bind(this))

    },

    render: function() {
        console.log('rendering..');
        if( this.state.books.length > 0 ) {
            var all_books = this.state.books.map(function(book, i) {
                console.log('post-' + i);
                return (<div className="row" key="{'post-' + i}"><book className="col-sm-12" book="{book}"></book></div>);
            });
            return( <div>{all_books}</div> );
        } else {
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