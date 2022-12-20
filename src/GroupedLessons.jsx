import { useState } from "react";

const GroupedLessons = ({lessons, weekDay, setWeekDay}) => {
    
    const [schedule, setSchedule] = useState(groupedLessons());
    
    function groupedLessons () {

        let list = [];

        let mondayLessons = lessons.filter((lesson) => lesson.day === 'Monday');
        let monday = {day: 'Monday', classes: mondayLessons, collapsed: weekDay === 'Monday' ? false : true }
        list.push(monday);

        let tuesdayLessons = lessons.filter((lesson) => lesson.day === 'Tuesday');
        let tuesday = {day: 'Tuesday', classes: tuesdayLessons, collapsed: weekDay === 'Tuesday'?false:true}
        list.push(tuesday);

        let wednesdayLessons = lessons.filter((lesson) => lesson.day === 'Wednesday');
        let wednesday = {day: 'Wednesday', classes: wednesdayLessons, collapsed: weekDay === 'Wednesday'?false:true}
        list.push(wednesday);

        let thursdayLessons = lessons.filter((lesson) => lesson.day === 'Thursday');
        let thursday = {day: 'Thursday', classes: thursdayLessons, collapsed: weekDay === 'Thursday'?false:true}
        list.push(thursday);

        let fridayLessons = lessons.filter((lesson) => lesson.day === 'Friday');
        let friday = {day: 'Friday', classes: fridayLessons, collapsed: weekDay === 'Friday'?false:true}
        list.push(friday);
        
        return list;
    }

    function handleDayClick(event) {
        let newSchedule = schedule.map((groupedData) => groupedData.day === event.currentTarget.id? 
                                                            {...groupedData, collapsed:!groupedData.collapsed}:
                                                            groupedData);
        
        setSchedule(newSchedule);
        setWeekDay(event.currentTarget.id);
    }
    
    return (
        <main className="wrapper sisi">
            {
                schedule.map((item) => {
                    return (
                        <div key={item.day}   style={{ cursor: "pointer" }} className = 'schedule_day'>
                            <h3 id={item.day}  onClick={handleDayClick} >
                                {item.day}
                            </h3>
                            <div id={'collapse_' + item.day} className={item.collapsed === true ? "collapse" : ''}>
                            {
                                item.classes.map(cl => {
                                    return (
                                        <div key={cl.name}>
                                            <h5>{cl.name}</h5>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedLessons;

