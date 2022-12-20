
import './App.css';
import Lessons from './Lessons';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedLessons from './GroupedLessons';
import Nav from './Nav';
import NotFound from './NotFound';
import art from './images/art.png';
import biology from './images/biology.png';
import drama from './images/drama.png';
import english from './images/english.png';
import geography from './images/geography.png';
import history from './images/history.png';
import it from './images/it.png';
import maths from './images/maths.png';
import music from './images/music.png';
import science from './images/science.png';
import swimming from './images/swimming.png';


function App() {
  const [weekDay, setWeekDay] = useState(JSON.parse(localStorage.getItem('weekDay')) || 'Monday');

  const [lessons, setLessons] = useState(JSON.parse(localStorage.getItem('lessonsList')) || [
      {
          id: 1,
          name: 'Art',
          day: 'Monday',
          image: art
      },
      {
          id: 2,
          name: 'English',
          day: 'Tuesday',
          image: english
      },
      {
          id: 3,
          name: 'Maths',
          day:  'Wednesday',
          image: maths
      },
      {
          id: 4,
          name: 'Music',
          day: 'Wednesday',
          image: music
      },
      {
          id: 5,
          name: 'Biology',
          day: 'Friday',
          image: biology
      },
      {
          id: 6,
          name: 'Geography',
          day: 'Thursday',
          image: geography
      },
      {
          id: 7,
          name: 'History',
          day: 'Thursday',
          image: history
      },
      {   id: 8,
          name: 'IT',
          day: 'Monday',
          image: it
      },
      {
          id: 9,
          name: 'Science',
          day: 'Friday',
          image: science
      },
      {
          id: 10,
          name: 'Drama',
          day: 'Tuesday',
          image: drama
      },
      {
          id: 11,
          name: 'Swimming',
          day: 'Friday',
          image: swimming
      },
   
])

  useEffect(() => {
    localStorage.setItem('lessonsList',JSON.stringify(lessons))
  },[lessons])

  useEffect(() => {
    localStorage.setItem('weekDay',JSON.stringify(weekDay))
  },[weekDay])

  function handleDayChange (event) {
      setWeekDay(event.target.value)
  }

  function handleLessonCardClick(event) {
      const tranformedLessons = lessons.map((lesson) => lesson.id === parseInt(event.currentTarget.id)
      ? (lesson.day === weekDay) ? {...lesson, day:''}:{...lesson, day: weekDay} : lesson);
      setLessons(tranformedLessons);
  }

  return (
    <Router>
      <Nav/>
      <Header weekDay={weekDay}
        lessonsPerDayCount = {lessons.filter((lesson) => lesson.day === weekDay).length}        
      />
      <Routes>
        <Route path='/'
          element = {<Lessons lessons={lessons}
                    weekDay={weekDay}
                    handleLessonCardClick={handleLessonCardClick}
                    handleDayChange={handleDayChange}
                  />}>
        </Route>
        <Route path='/GroupedLessons' element={<GroupedLessons lessons = {lessons} weekDay = {weekDay} setWeekDay = {setWeekDay}/>}>
        </Route>
        <Route path='*' element={<NotFound/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
