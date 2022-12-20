
const Header = ({weekDay, lessonsPerDayCount}) => {
    
    return (
        <header className="wrapper sisi">
            <h1>Schedule</h1>
            <h3 className="schedule_counter">{weekDay}: {lessonsPerDayCount} {lessonsPerDayCount === 1 ? "lesson" : "lessons" }</h3>
        </header>
    )
}

export default Header;