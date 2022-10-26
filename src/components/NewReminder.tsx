import React, { useState } from 'react';

interface NewReminderProps {
    addReminder: (title: string) => void;
}

function NewReminder({ addReminder }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        
        addReminder(title);
        setTitle('');
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input value={title} onChange={e => setTitle(e.target.value)} id="title" type="text" className="form-control"/>
            <button className="btn btn-primary rounded-pill my-3">Add reminder</button>
        </form>
    );
}

export default NewReminder;