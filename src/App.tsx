import React from "react"

import Logo from './assets/logo.svg'

import './Global.css'
import style from './App.module.css'

import { TaskWrapper } from "./components/TaskWrapper/TaskWrapper"

export function App() {

  return (
    <React.Fragment>
      <header className={style.header}>
        <img src={Logo}/>
      </header>
      <main className={style.main}>
        <TaskWrapper/>
      </main>
    </React.Fragment>
  )
}

