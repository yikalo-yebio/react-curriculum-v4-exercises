//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Yikalo';
  const age = 35;
  const listHobbies = [
    'Watching-football',
    'Watching-movie',
    'Playing-football',
    'Reading',
    'Coding',
  ];
  return (
    <div>
      {
        <>
          <h1>About {name}</h1>
          <p>
            {' '}
            My name is Yikalo coding is been my dream since my childhood by my
            fathers influence.{' '}
          </p>
          <ul>
            {listHobbies.map((hobbie, index) => (
              <li key={index}>{hobbie}</li>
            ))}
          </ul>
        </>
      }
      <p> Student output will go here </p>
    </div>
  );
}
