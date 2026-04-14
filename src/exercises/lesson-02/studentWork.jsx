//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file

import SnackFooter from './SnackFooter';
import SnackHeader from './SnackHeader';
import SnackList from './SnackList';

export default function StudentWork() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
      <p> Student output will go here</p>
    </div>
  );
}
