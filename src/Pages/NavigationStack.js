import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Splash from '../../Splash';
import Login from '../../Login';

const screens = {
    Login  :{
        screen:Login
    },
    Splash:{
        screen:Splash
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);