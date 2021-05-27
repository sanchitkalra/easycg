import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [group, setGroup] = React.useState(null)
  const [tracker, setTracker] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  function resetStates() {
    setGroup(null)
    setTracker(0)
    setTotal(0)
  }

  function mapGrade(grade) {
    switch(grade) {
      case "A":
        return 10
      case "A-":
        return 9
      case "B":
        return 8
      case "B-":
        return 7
      case "C":
        return 6
      case "C-":
        return 5
      case "D":
        return 4
      case "E":
        return 3
      default:
        return 10
    }
  }

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

    var count = 8;
    var credits = 21;
    var subjects = {
      "PHY F111" : {
        weight: 4
      },
      "MATH F112" : {
        weight: 3
      },
      "MATH F113" : {
        weight: 3
      },
      "BITS F110" : {
        weight: 2
      },
      "BITS F111" : {
        weight: 3
      },
      "BIO F111" : {
        weight: 3
      },
      "BIO F110" : {
        weight: 1
      },
      "BITS F112" : {
        weight: 2
      },
    }
    var subKeys = Object.keys(subjects)

    if (tracker < count) {
      return (
        <>
          <GradeOption subject={subKeys[tracker]} weight={subjects[subKeys[tracker]].weight} count={count} />
        </>
      )
    } else {

      var gpa = total/credits

      return(
        <>
          <h1 className="text-4xl">
            Your CGPA is {gpa.toFixed(2)}
          </h1>
          <button className="mt-4 w-80 p-4 rounded-2xl border-2" onClick={() => window.location.reload()}>
            Calculate again
          </button>
        </>
      )
    }
    
  }

  function Group2(props) {

    var count = 8;
    var credits = 21;
    var subjects = {
      "CS F111" : {
        weight: 4
      },
      "MATH F112" : {
        weight: 3
      },
      "MATH F113" : {
        weight: 3
      },
      "BITS F110" : {
        weight: 2
      },
      "BITS F111" : {
        weight: 3
      },
      "BIO F111" : {
        weight: 3
      },
      "BIO F110" : {
        weight: 1
      },
      "BITS F112" : {
        weight: 2
      },
    }
    var subKeys = Object.keys(subjects)

    if (tracker < count) {
      return (
        <>
          <GradeOption subject={subKeys[tracker]} weight={subjects[subKeys[tracker]].weight} count={count} />
        </>
      )
    } else {

      var gpa = total/credits

      return(
        <>
          <h1 className="text-4xl">
            Your CGPA is {gpa.toFixed(2)}
          </h1>
          <button className="mt-4 w-80 p-4 rounded-2xl border-2" onClick={() => window.location.reload()}>
            Calculate again
          </button>
        </>
      )
    }
    
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
              // console.log(grades)
            }} className="block appearance-none w-80 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>A</option>
              <option>A-</option>
              <option>B</option>
              <option>B-</option>
              <option>C</option>
              <option>C-</option>
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
            // if (tracker < props.count) {
            //   setTotal(total + mapGrade(grade)*props.weight)
            //   if (tracker < props.count - 1) {
            //     setTracker(tracker + 1)
            //   }
            // } else {
            //   setTracker(tracker + 1)
            // }
            // console.log(total)
            if (tracker < props.count) {
              setTotal(total + mapGrade(grade)*props.weight)
              setTracker(tracker + 1)
            }
            // console.log(total)
            // grades[props.subject] = {grade, weight: props.weight}
            // console.log(grades)
            // setTotal(total + mapGrade(grade)*props.weight)
          }}>
          Next
        </button>
      </>
    )
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
          Let's calculate your CGPA
        </h1>

        {
          group ? group == 1 ? <Group1 /> : <Group2 /> : <ChooseGroup />
        }

        {/* <Group2 /> */}

      </main>

      <footer className={styles.footer}>
          Powered by coffee and some pasta
      </footer>
    </div>
  )
}
