import React from 'react';
import Button from './Button'; // Corrected import to named import
import Student from './Student';
function App() {
    return (
        <>
            <Student name="Arvind" age="20" isStudent={true}/>
            <Student name="TamilSelvan" age={70} isStudent={false}/>
            <Student name="Bharath" age={20} isStudent={true}/>
            <Student name="Luffy" age={19} isStudent={false}/>
            <Student name="Donquiote Dharun" age={15} isStudent={true}/>
            <Student/>
            <Button />
            </>
    );
}

export default App;
