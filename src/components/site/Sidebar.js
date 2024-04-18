    import {
            Route,
            Link,
            Switch,
            Routes
        } from 'react-router-dom';
        import Home from './Home';
        import Resources from './Resources';
        
        const Sidebar = () => {
        return(
            <div className='sidebar'>
                <div className='sidebar-list-styling'>
                    <ul className='sidebar-list list-unstyled'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/resources'>Resources</Link></li>
                        <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    </ul>
                </div>
                <div className='sidebar-route'>
                    <Routes>
                        <Route exact path='/home' element={<h2>Home</h2>} />
                        <Route exact path='/resources' element={<h2>Resources</h2>}/>
                        <Route exact path='/' />
                    </Routes>
                </div>
            </div>
        );
    };
    
    export default Sidebar;