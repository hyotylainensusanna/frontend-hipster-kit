import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';
import { clearState } from '../utils/persist';

class Logout extends React.Component {
  componentDidMount() {
    this.props.doLogout();
  }

  render() {
    return (
      <div
        style={{
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '200px',
        }}
      >
        <CircularProgress />
      </div>
    );
  }
}

Logout.propTypes = {
  doLogout: React.PropTypes.func.isRequired,
};

export default connect(
  undefined,
  () => ({
    doLogout() {
      clearState();

      // reload app
      location.reload();
    },
  }),
)(Logout);
