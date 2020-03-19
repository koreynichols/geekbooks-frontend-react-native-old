import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import BookList from '../screens/BookList';
import BookDetailScreen from '../screens/BookDetailScreen';

const BookNavigator = createStackNavigator({
    BookList: BookList,
    BookDetailScreen: BookDetailScreen
});

export default createAppContainer(BookNavigator);