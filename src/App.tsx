import React, { useEffect, useState } from 'react';
import './App.css';

import Reminder from './models/reminder';
import reminderService from './api/reminder';

import ReminderList from './components/ReminderList';
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  }

  const removeReminder = async (id: number) => {
    //await reminderService.removeReminder(id);
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <NewReminder addReminder={addReminder}/>
      <ReminderList items={reminders} removeReminder={removeReminder}/>
    </div>
  );
}

export default App;
