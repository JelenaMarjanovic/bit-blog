import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PostsPage } from './posts/PostsPage';
import { PostDetailsPage } from './posts/details/PostDetailsPage';
import { CreatePost } from './posts/CreatePost';
import { AuthorsPage } from './authors/AuthorsPage';
import { AuthorDetailsPage } from './authors/details/AuthorDetailsPage';
import { AboutPage } from './about/AboutPage';

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route exact path="/posts/:postId" component={PostDetailsPage} />
            <Route exact path="/new" component={CreatePost} />
            <Route exact path="/authors" component={AuthorsPage} />
            <Route exact path="/authors/:authorId" component={AuthorDetailsPage} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </main>
);

export { Main };