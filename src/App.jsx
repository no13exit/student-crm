
import Header from './components/Header';
import Footer from './components/Footer';
import StudentList from './students/StudentList';
import CourseList from './courses/CourseList';
import { students } from './data/students';
import { courses } from './data/courses';
import './App.css';

function App() {
    return (
        <div>
            <Header />

            <div className="dashboard">
                <div className="switcher">
                    <span>Student CRM</span>

                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>

                    <span>Course Catalog</span>
                </div>

                <div className="students-section">
                    <StudentList students={students} />
                </div>

                <div className="courses-section">
                    <CourseList courses={courses} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
