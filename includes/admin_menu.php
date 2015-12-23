<?php


class admin_js_app_page {

    function register_menu() {
        add_menu_page( 'JS App', 'JS App', 'manage_options', 'admin-js-app', array( $this, 'admin_page' ) );
    }

    function admin_page() {
        echo
            '<div class="container app-container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>JS Admin App</h2>
                        <nav class="navbar navbar-default">
                            <div class="collapse navbar-collapse">
                                <ul class="nav navbar-nav">
                                    <li>
                                        <a href="#/">Main</a>
                                    </li>
                                    <li>
                                        <a href="#/list">Books</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div id="admin-js-app" class="row app-template-wrapper">
                    <div class="col-sm-12">
                        <div id="app-container"></div>
                    </div>
                </div>
            </div>';

    }

}

?>