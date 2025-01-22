import './App.css';
import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';

const CourseList = lazy(() => import('../CourseList/CourseList'));
const Login = lazy(() => import('../Login/Login'));

class App extends React.Component {
  handleKeydown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    const { isLoggedIn, logOut } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const htmlObj = getLatestNotification();
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New course available' },
      { id: 3, type: 'urgent', html: htmlObj },
    ];

    return (
      <>
        <Notifications displayDrawer={false} listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <BodySectionWithMarginBottom title={isLoggedIn ? "Course list" : "Log in to continue"}>
              {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
            </BodySectionWithMarginBottom>
          </Suspense>
          <BodySection title="News from the School">
            <p>Graduation date is January 28th!</p>
          </BodySection>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
};

export default hot(module)(App);
