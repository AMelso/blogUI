import 'semantic-ui-css/semantic.min.css'
import {Router, Route, Switch} from 'react-router-dom'
import { history } from "./helpers";
import Layout from './containers/Layout'
import PostList from './containers/PostList'
import PostDetail from './containers/PostDetail'
import PostCreate from './containers/PostCreate'
import PostUpdate from './containers/PostUpdate';
import PostDelete from './containers/PostDelete';




function App() {
  return (
    <Router history={history}>
      {/* Wrap switch with layout so layout is everywhere w/out re-rendering */}
      <Layout>
        <Switch>
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/posts/create" component={PostCreate} />
          <Route exact path="/posts/:postSlug" component={PostDetail} />
          <Route exact path="/posts/:postSlug/update" component={PostUpdate} />
          <Route path="/posts/:postSlug/delete" component={PostDelete} />

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
