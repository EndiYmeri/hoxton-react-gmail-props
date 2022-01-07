import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Main from './components/Main/Main'
import emails from './data/emails'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

const getSearchedEmails = (emails, searchedWord) =>
   emails.filter(email => 
    email.title.toUpperCase().includes(searchedWord.toUpperCase()) ||
    email.sender.toUpperCase().includes(searchedWord.toUpperCase())
        )

function App() {

  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchedWord, setSearchedWord] = useState('')

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  if(searchedWord != ''){
    filteredEmails = getSearchedEmails(filteredEmails, searchedWord)
  }
  
  return (
    <div className="app">
      <Header 
        setSearchedWord = {setSearchedWord} />
      <LeftMenu
        emails = {emails} 
        currentTab = {currentTab} 
        setCurrentTab = {setCurrentTab} 
        hideRead = {hideRead}
        setHideRead = {setHideRead}
        />
      <Main 
        emails ={emails} 
        setEmails = {setEmails}
        filteredEmails = {filteredEmails}
        />
    </div>
  )
}

export default App
