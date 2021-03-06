import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
// import AdminInfo from '../components/AdminInfo'
import { Redirect, Route, Switch } from 'react-router';
import PostCarsList from './normalRoute/PostCarsList';
import PostWrite from './normalRoute/PostWrite';
import PostDetail from './normalRoute/PostDetail';
import Search from './normalRoute/Search';
import CategoryResult from './normalRoute/CategoryResult';
import {
  EditProtectedRoute,
  ProfileProtectedRoute,
} from './protectedRoute/ProtectedRoute';
import PostEdit from './normalRoute/PostEdit';
import Profile from './normalRoute/Profile';

const PostContainer = styled(Container)`
  @media ${props => props.theme.pc} {
    width: 100% !important;
    max-width: 1020px !important;
    padding: 90px 0 0 !important;
  }
  @media ${props => props.theme.mo} {
    padding: 0 15px !important;
  }
`;

function Router() {
  return (
    <>
      <Header />
      <PostContainer>
        <Switch>
          <Route path="/" exact component={PostCarsList} />
          <Route path="/post" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
          <EditProtectedRoute
            path="/post/:id/edit"
            exact
            component={PostEdit}
          />
          <Route
            path="/post/category/:category_name"
            exact
            component={CategoryResult}
          />
          <Route path="/search/:search_result" exact component={Search} />
          <ProfileProtectedRoute
            path="/user/:userName/profile"
            exact
            component={Profile}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </PostContainer>
      <Footer />
    </>
  );
}

export default Router;
