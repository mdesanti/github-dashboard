import React from 'react';
import NotificationsContainer from '../components/notificationsContainer.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import GithuService from '../services/githubService.js'

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div>
        <NotificationsContainer githubService={new GithuService()} />
      </div>
    );
  }
}

export default Home;
