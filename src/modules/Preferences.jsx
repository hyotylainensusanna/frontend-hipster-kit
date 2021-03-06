import React from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { FormattedMessage } from 'react-intl';

import {
  Card,
  CardText,
  CardTitle,
} from 'material-ui/Card';

import jwtDecode from 'jwt-decode';

import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';

import { clearState } from '../utils/persist';

import theme from '../utils/theme';
import { languages, storeLocaleForUser } from '../utils/intl';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing.desktopGutter,
  },
  card: {
    margin: theme.spacing.desktopGutter,
    flex: 1,
    flexBasis: '450px',
  },
};

const Preferences = ({ activeLanguage, changeLanguage, doClearState, user }) => (
  <div style={styles.wrapper}>
    <Card style={styles.card}>
      <CardTitle
        title={<FormattedMessage id="language" />}
      />
      <CardText>
        <DropDownMenu
          value={activeLanguage}
          onChange={(event, index, locale) => changeLanguage(user, locale)}
        >
          {
            Object.keys(languages).map(language => (
              <MenuItem key={language} value={language} primaryText={languages[language].name} />
            ))
          }
        </DropDownMenu>
      </CardText>
      <CardTitle
        title={<FormattedMessage id="resetState" />}
        subtitle={<FormattedMessage id="resetStateExplanation" />}
      />
      <CardText>
        <RaisedButton label={<FormattedMessage id="resetStateButton" />} secondary onTouchTap={doClearState} />
      </CardText>
    </Card>
  </div>
);

Preferences.propTypes = {
  activeLanguage: React.PropTypes.string.isRequired,
  user: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    scope: React.PropTypes.string.isRequired,
  }).isRequired,
  changeLanguage: React.PropTypes.func.isRequired,
  doClearState: React.PropTypes.func.isRequired,
};

export default connect(
  state => ({
    activeLanguage: state.intl.locale,
    user: jwtDecode(state.auth.data.token),
  }),
  dispatch => ({
    changeLanguage: (user, locale) => {
      storeLocaleForUser(user.name, locale);
      dispatch(updateIntl({
        locale,
        messages: languages[locale].translations,
      }));
    },
    doClearState: () => {
      clearState(true);

      // reload app
      location.reload();
    },
  }),
)(Preferences);
