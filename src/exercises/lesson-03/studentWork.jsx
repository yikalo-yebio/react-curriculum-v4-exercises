//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder

import BugProps from './BugProps';
import BugMutatedState from './BugMutatedState';
import BugEffectLoop from './BugEffectLoop';

//Impport components here

export default function StudentWork() {
  return (
    <div>
      <BugProps />
      <BugEffectLoop />
      <BugMutatedState />
      <p>Student output will go here</p>
    </div>
  );
}
