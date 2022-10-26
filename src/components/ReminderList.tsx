import React from 'react';

import Reminder from '../models/reminder';

interface ReminderListProps {
    items: Reminder[];
    removeReminder: (id: number) => void;
}

function ReminderList({ items, removeReminder }: ReminderListProps) {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li className="list-group-item" key={item.id}>
                    {item.title}
                    <button onClick={() => removeReminder(item.id)} className="btn btn-outline-danger mx-2 rounded-pill">Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ReminderList;