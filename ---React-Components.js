/*
-------------------------------------------------------------------------------

                Setting up a component

-------------------------------------------------------------------------------

    Creating the component in Main.js means that 
    you create the component/class itself in Main.js 
    and export it, like so:
*/

        class Main extends React.Component {
          render () {
            /* etc…*/
          }
        }

        export default Main

        // A real example:    -----------------------------------

        import React, {Component} from 'react';

        class Main extends React.Component {
            render () {
                return (
                    <div id="main" className="container-fluid">
                    <h1>Hello world!</h1>
                    </div>
                );
            }
        }

        export default Main;

/*
-------------------------------------------------------------------------------

    This way, we can import `Main` into other files/components, 
    and cause it to render by using it as JSX in _another_ component’s 
    render method (or in `ReactDOM.render`), like so:
*/

        import Main from './Main';

        ReactDOM.render(<div><Main /></div>, document.getElementById('app'));

        // A real example:    -----------------------------------
                        
        import React, {Component} from 'react';
        import ReactDOM from 'react-dom';

        import Main from './Main';

        ReactDOM.render(<Main />, document.getElementById('app'));

/*
----------------------------------------

    (or), if we wanted to use it in another component:
    
----------------------------------------
*/
    
        import Main from './Main';

        class SomeOtherComponent extends React.Component {

          render () {
            return (
               <div>
                 <Main />
               </div>
            );
          }
        }  

/*
-------------------------------------------------------------------------------
