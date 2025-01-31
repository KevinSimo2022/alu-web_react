import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

describe('<App />', () => {
    it('renders an <App /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });

    it('verifies that the default state for displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('verifies that handleDisplayDrawer updates displayDrawer to true', () => {
        const wrapper = mount(<App />);
        const instance = wrapper.instance();

        instance.setState({ displayDrawer: false }); // Ensure it's false initially
        instance.handleDisplayDrawer();
        wrapper.update();
        expect(wrapper.instance().state.displayDrawer).toBe(true);
    });

    it('verifies that handleHideDrawer updates displayDrawer to false', () => {
        const wrapper = mount(<App />);
        const instance = wrapper.instance();

        instance.setState({ displayDrawer: true }); // Ensure it's true first
        instance.handleHideDrawer();
        wrapper.update();
        expect(wrapper.instance().state.displayDrawer).toBe(false);
    });

    it('renders an <App /> component checking for <Notifications />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);
    });

    it('renders an <App /> component checking for <Header />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('renders an <App /> component checking for <Login />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('tests to check that CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });

    it('renders an <App /> component checking for <Footer />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('verifies that the Login component is not included when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('verifies that CourseList is displayed when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });

    it('verifies that the user can log out using ctrl + h', () => {
        const events = {};
        window.addEventListener = jest.fn().mockImplementation((event, callback) => {
            events[event] = callback;
        });

        const props = {
            isLoggedIn: true,
            logOut: jest.fn()
        };
        window.alert = jest.fn();

        const wrapper = shallow(<App {...props} />);
        events.keydown({ ctrlKey: true, key: 'h' });

        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(props.logOut).toHaveBeenCalled();
        window.alert.mockRestore();
    });
});
