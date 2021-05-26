import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [group, setGroup] = React.useState(null)

  var grades = {}

  function ChooseGroup() {
    return(
      <>
        <p className={styles.description}>Get started by choosing your group</p>
        <div className={styles.grid}>
          <button onClick={() => {setGroup(1)}} className={styles.card}>
            <h2>Group 1 &rarr;</h2>
          </button>

          <button onClick={() => {setGroup(2)}}  className={styles.card}>
            <h2>Group 2 &rarr;</h2>
          </button>
        </div>
      </>
    )
  }

  function Group1(props) {
    
  }

  function GradeOption(props) {

    const [grade, setGrade] = React.useState("A")

    return(
      <>
        <div className="mt-10">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            {props.subject}
          </label>
          <div className="relative">
            <select onChange={e => {
              setGrade(e.target.value)
              console.log(e.target.value)
              console.log(grades)
            }} className="block appearance-none w-80 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>A</option>
              <option>A-</option>
              <option>B</option>
              <option>B-</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
              </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <button
          className="mt-4 w-80 p-4 rounded-2xl border-2"
          onClick={() => {
            grades[props.subject] = {grade, weight: props.weight}
            console.log(grades)
          }}>
          Next
        </button>
      </>
    )
  }

  function Group2() {

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>EasyCG</title>
        <meta name="description" content="A simple CG Calculator because why not" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Let's calculate your CG
        </h1>

        {
          group ? group == 1 ? <GradeOption subject="M2" weight={3} /> : <GradeOption subject="CS F111" weight={4} /> : <ChooseGroup />
        }

      </main>

      <footer className={styles.footer}>
          Powered by coffee and some pasta
      </footer>
    </div>
  )
}
